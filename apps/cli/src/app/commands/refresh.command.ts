import { DTO } from "@accomplishedh/shared";
import type {
  EntityQid,
  FieldsOfWorkDatasetV1 as FieldsComprehension,
} from "@accomplishedh/shared/lib/dto.types.js";
import { type SparqlResponse } from "@accomplishedh/wikibase";
import { writeFileSync } from "fs";
import { dataRoot, readAll } from "../data/wb/fs-reader.js";
import { type CommandArgs } from "./refresh.types.js";

const WIKIDATA_SPARQL_URL = "https://query.wikidata.org/sparql";
const USER_AGENT = "AccomplishedHBot/1.0 (editor@humanaccomplishment.com)";
const BATCH_SIZE = 200;

const ROOTS = {
  Art: "Q36649",
  Lit: "Q8242",
  Music: "Q9730",
  Science: "Q336",
};

const schemaVersion = 1;

type QueryResponseRow = {
  human: {
    value: string;
  };
  fow: {
    value: string;
  };
  fowLabel: {
    value: string;
  };
  root: {
    value: string;
  };
};

export async function refreshCommand({
  opts,
  today,
}: CommandArgs): Promise<void> {
  if (!today || today.length !== 10) {
    throw new Error("now must be ISO Date");
  }
  const fowDataset: FieldsComprehension = {
    schemaVersion,
    generatedAt: today,
    people: {},
  };

  const everybody = readAll();
  const subjects = everybody.slice(0, 4).filter((h) => h);
  const allIds = subjects.map((s) => s.id);

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

    const fowRecords = data.results.bindings.map<
      DTO.FieldOfWorkEntryV1 & { hum: EntityQid }
    >((b) => {
      const row = b as unknown as QueryResponseRow;
      return {
        hum: asQid(extractValue(row.human)),
        id: asQid(extractValue(row.fow)),
        category: "Art",
        label: row.fowLabel.value,
      };
    });
    for (const row of fowRecords) {
      let summary = fowDataset.people[row.hum];

      if (!summary) {
        summary = fowDataset.people[row.hum] = { fows: [] };
      }
      summary.fows.push(row);
    }

    console.log(`✅ Processed batch ${Math.floor(i / BATCH_SIZE) + 1}.`);
    await new Promise((res) => setTimeout(res, 500));
  }

  writeFileSync(
    `${dataRoot}/wikibase-cache/fields-of-work.json`,
    JSON.stringify(fowDataset, undefined, 2),
    "utf-8",
  );
}

function asQid(value: string): `Q${number}` {
  if (!/^Q\d+$/.test(value)) {
    throw new Error(`Invalid field-of-work id: ${value}`);
  }

  return value as `Q${number}`;
}

function extractValue(typedValue: { value: string }): string {
  const popped = typedValue.value.split("/").pop();
  if (!popped) {
    throw new Error("no pop");
  }
  return popped;
}
