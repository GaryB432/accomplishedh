import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { setTimeout as sleep } from "node:timers/promises";
import { fileURLToPath } from "node:url";
import { classifier } from "./fows/classifier.mjs";

const WIKIDATA_SPARQL_URL = "https://query.wikidata.org/sparql";
const BATCH_SIZE = 200;

const schemaVersion = 1;

const HA_DIRECTORY = join(fileURLToPath(import.meta.url), "../..");
const HA_DATA = join(HA_DIRECTORY, "apps/next-web/src/lib/data");

const WIKIBASE_DIRECTORY = join(HA_DATA, "wikibase");
const FIELDS_FILE_NAME = join(WIKIBASE_DIRECTORY, "fields-of-work.json");

const USER_AGENT = "AccomplishedHBot/1.0 (editor@humanaccomplishment.com)";

async function waitFetch(input, init) {
  await sleep(250);
  return fetch(input, init);
}

/**
 * from {id: 'Q1234'} receive 0001234
 * @param {import("../libraries/wikibase/src/types").Entity | string} entity
 * @returns {string}
 */
function qnumpart(entity) {
  const qn = entity.id ?? entity;
  return qn.slice(1).padStart(14, "0");
}

/**
 *
 * @param {import("../libraries/wikibase/src/types").Entity} a
 * @param {import("../libraries/wikibase/src/types").Entity} b
 * @returns {number}
 */
function compareEntities(a, b) {
  // console.log(JSON.stringify({ a, b }));

  return qnumpart(a).localeCompare(qnumpart(b));
}

async function main(today) {
  today ??= new Date().toISOString();
  const fowDataset = {
    schemaVersion,
    generatedAt: today,
    people: {},
  };

  const everybody = JSON.parse(
    readFileSync(join(HA_DATA, "identifiers.json"), "utf-8"),
  );

  /** @type {Array<string>} */
  const allIds = everybody.map((s) => s.wb);

  console.log(`🚀 Mapping FOWs for ${allIds.length} humans...`);

  for (let i = 0; i < allIds.length; i += BATCH_SIZE) {
    const currentBatch = allIds.slice(i, i + BATCH_SIZE);

    const humansValues = currentBatch.map((id) => `wd:${id}`).join(" ");

    const query = `
      SELECT ?human ?humanLabel ?dob ?fow ?fowLabel ?occupation ?occupationLabel WHERE {
        VALUES ?human { 
          ${humansValues}
          }
          
          OPTIONAL { ?human wdt:P569 ?dob . }
          OPTIONAL { ?human wdt:P101 ?fow . }
          OPTIONAL { ?human wdt:P106 ?occupation . }
          
          SERVICE wikibase:label { bd:serviceParam wikibase:language "en". }
          }`;

    const url = `${WIKIDATA_SPARQL_URL}?query=${encodeURIComponent(query)}`;

    const response = await waitFetch(url, {
      headers: {
        Accept: "application/sparql-results+json",
        "User-Agent": USER_AGENT,
      },
    });

    if (!response.ok) {
      throw new Error(`SPARQL query failed: ${response.statusText}`);
    }

    /**  @type {import('../libraries/wikibase/src/types').QueryBindingsResponse} */
    const data = await response.json();
    // console.log(JSON.stringify(data.results.bindings[0], null, 2));

    void data.results.bindings
      .map(toFowEntry)
      .filter((fow) => fow.category !== "Ignore")
      .reduce((a, fow) => {
        const { id, category, label, human } = fow;

        a[human] ??= { fows: [] };
        a[human].fows.push({ id, category, label });
        return a;
      }, fowDataset.people);

    console.log(`✅ Processed batch ${Math.floor(i / BATCH_SIZE) + 1}.`);
  }

  const sorteds = Object.keys(fowDataset.people).toSorted(compareEntities);
  fowDataset.people = sorteds.reduce((a, hid) => {
    const fows = [
      ...new Map(
        fowDataset.people[hid].fows
          .toSorted(compareEntities)
          .map((item) => [item.id, item]),
      ).values(),
    ];
    a[hid] = { ...fowDataset.people[hid], fows };
    return a;
  }, {});

  mkdirSync(WIKIBASE_DIRECTORY, { recursive: true });

  writeFileSync(
    FIELDS_FILE_NAME,
    JSON.stringify(fowDataset, undefined, 2),
    "utf-8",
  );
  console.log(`🔥Complete. ${FIELDS_FILE_NAME}`);
}

/**
 *
 * @param {Binding} binding
 * @returns {string | undefined}
 */
function unbind(binding) {
  if (!binding) {
    return undefined;
  }
  switch (binding.type) {
    case "literal": {
      return binding.value;
    }
    case "uri": {
      return binding.value.split("/").at(-1);
    }
    default: {
      console.log(JSON.stringify(binding));
      throw new Error(`what is that`);
    }
  }
}

/**
 * @param {Record<string,import('../libraries/wikibase/src/types').Binding} row
 * @param {number} index
 * @param {Record<string,Binding>[]} array
 * @returns  {import('../libraries/shared/src/lib/dto.types').FieldOfWorkEntryV1 & { human: import('../libraries/shared/src/lib/dto.types').EntityQid   }}
 */
function toFowEntry(row, index, array) {
  const human = unbind(row["human"]);
  // const humanLabel = unbind(row["humanLabel"]);
  // const dob = unbind(row["dob"]);
  const fow = unbind(row["fow"]);
  const fowLabel = unbind(row["fowLabel"]);
  const occupation = unbind(row["occupation"]);
  const occupationLabel = unbind(row["occupationLabel"]);

  if (!human) {
    throw new Error("dehumanized");
  }

  const id = fow ?? occupation;
  const label = fowLabel ?? occupationLabel;

  return { id, category: classifier.classify(label), human, label };
}

void main();
