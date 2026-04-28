import type { FieldsOfWorkDatasetV1 as FowDataSet } from "@accomplishedh/shared/lib/dto.types.js";
import {
  ROOTS,
  toFowEntry,
  USER_AGENT,
  type SparqlResponse,
} from "@accomplishedh/wikibase";
import { writeFileSync } from "fs";
import { dataRoot, readAll } from "../data/wb/fs-reader.js";
import { type CommandArgs } from "./refresh.types.js";

const WIKIDATA_SPARQL_URL = "https://query.wikidata.org/sparql";
const BATCH_SIZE = 200;

const schemaVersion = 1;

export async function refreshCommand({
  opts,
  today,
}: CommandArgs): Promise<void> {
  return new Promise((success) => {
    console.log("just use the make-connection script");
    success(void 0);
  });
}

export async function ΘrefreshCommand({
  opts,
  today,
}: CommandArgs): Promise<void> {
  const systemDate = new Date().toISOString();
  today ??= systemDate;
  if (today.length !== systemDate.length) {
    console.log(today, "is here");
    throw new Error("now must be ISO Date");
  }
  const fowDataset: FowDataSet = {
    schemaVersion,
    generatedAt: today,
    people: {},
  };

  const everybody = readAll();
  const allIds = everybody.map((s) => s.id);

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

    const data = (await response.json()) as SparqlResponse;

    void data.results.bindings.map(toFowEntry).reduce((a, fow) => {
      const { id, category, label, human } = fow;

      a[human] ??= { fows: [] };
      a[human].fows.push({ id, category, label });

      return a;
    }, fowDataset.people);

    console.log(`✅ Processed batch ${Math.floor(i / BATCH_SIZE) + 1}.`);
    await new Promise((res) => setTimeout(res, 500));
  }

  writeFileSync(
    `${dataRoot}/wikibase-cache/fields-of-work.json`,
    JSON.stringify(fowDataset, undefined, 2),
    "utf-8",
  );
}
