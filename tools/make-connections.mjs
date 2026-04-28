import { FILE } from "node:dns";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const WIKIDATA_SPARQL_URL = "https://query.wikidata.org/sparql";
const BATCH_SIZE = 200;

const schemaVersion = 1;

const ROOTS = {
  Art: "Q36649",
  Lit: "Q8242",
  Music: "Q9730",
  Science: "Q336",
};

const categories = new Map([
  ["Q36649", "Art"],
  ["Q8242", "Lit"],
  ["Q9730", "Music"],
  ["Q336", "Science"],
]); // TODO compute by reverse ROOTS

const HA_DIRECTORY = join(fileURLToPath(import.meta.url), "../..");
const HA_DATA = join(HA_DIRECTORY, "apps/next-web/src/data");

const WB_CACHE_NAME = join(HA_DATA, "wikibase-cache");
const FIELDS_FILE_NAME = join(WB_CACHE_NAME, "fields-of-work.json");

const USER_AGENT = "AccomplishedHBot/1.0 (editor@humanaccomplishment.com)";

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

  const allIds = everybody.map((s) => s.wb);

  console.log(`🚀 Mapping FOWs for ${allIds.length} humans...`);

  for (let i = 0; i < allIds.length; i += BATCH_SIZE) {
    const currentBatch = allIds.slice(i, i + BATCH_SIZE);

    const humansValues = currentBatch.map((id) => `wd:${id}`).join(" ");

    const rootValues = Object.entries(ROOTS)
      .map(([, qid]) => `wd:${qid}`)
      .join(" ");

    const query = `
        SELECT ?human ?fow ?fowLabel ?root WHERE {
          VALUES ?human { ${humansValues} }
          VALUES ?root { ${rootValues} }

          ?human wdt:P101 ?fow .
          ?fow wdt:P279* ?root .

          SERVICE wikibase:label { bd:serviceParam wikibase:language "en". }
        }
      `;

    const url = `${WIKIDATA_SPARQL_URL}?query=${encodeURIComponent(query)}`;

    const response = await fetch(url, {
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

    void data.results.bindings.map(toFowEntry).reduce((a, fow) => {
      const { id, category, label, human } = fow;

      a[human] ??= { fows: [] };
      a[human].fows.push({ id, category, label });

      return a;
    }, fowDataset.people);

    console.log(`✅ Processed batch ${Math.floor(i / BATCH_SIZE) + 1}.`);
    await new Promise((res) => setTimeout(res, 500));
  }

  mkdirSync(WB_CACHE_NAME, { recursive: true });

  writeFileSync(
    FIELDS_FILE_NAME,
    JSON.stringify(fowDataset, undefined, 2),
    "utf-8",
  );
  console.log(`🔥Complete. ${FIELDS_FILE_NAME}`);
}

function asQid(value) {
  if (!/^Q\d+$/.test(value)) {
    throw new Error(`Invalid field-of-work id: ${value}`);
  }

  return value;
}

export function extractValue(typedValue) {
  const popped = typedValue.value.split("/").pop();
  if (!popped) {
    throw new Error("no pop");
  }
  return popped;
}

/**
 * @param {Record<string,import('../libraries/wikibase/src/types').Binding} row
 * @param {number} index
 * @param {Record<string,Binding>[]} array
 * @returns {FieldOfWorkEntryV1 & { human: EntityQid }}
 */
function toFowEntry(row, index, array) {
  const human = asQid(extractValue(row["human"]));
  const id = asQid(extractValue(row["fow"]));
  const label = row["fowLabel"].value;

  const category = getFowRootCategory(row["root"]);
  return { id, category, human, label };
}

void main();

/**
 *
 * @param {import('../libraries/wikibase/src/types/responses').Binding} binding
 * @returns {import('../libraries/shared/src/lib/dto.types'.EntityRefV1)}
 */
function getFowRootCategory(binding) {
  return categories.get(asQid(extractValue(binding)));
}
