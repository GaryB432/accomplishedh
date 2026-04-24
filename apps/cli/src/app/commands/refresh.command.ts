import { DTO } from "@accomplishedh/shared";

import { type SparqlResponse } from "@accomplishedh/wikibase";

import { readAll } from "../data/wb/fs-reader.js";
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

type HJ =
  | Record<string, { value: string }>
  | {
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
  console.log(opts);
  if (!today || today.length !== 10) {
    throw new Error("now must be ISO Date");
  }

  // if (!opts.listOnly) {
  //   throw new Error("only listOnly is supprted in this version");
  // }
  // console.log(
  //   colors.bgBlue(
  //     colors.white(
  //       "https://business.facebook.com/latest/home?asset_id=100786702612447",
  //     ),
  //   ),
  // );
  // console.log(colors.gray("https://www.facebook.com/AccomplishedH"));

  const everybody = readAll();
  const subjects = everybody.slice(50, 55).filter((h) => h);
  // console.log(subjects);
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

    // console.log(url);

    const response = await fetch(url, {
      headers: {
        Accept: "application/sparql-results+json",
        "User-Agent": USER_AGENT,
      },
    });

    if (!response.ok) {
      throw new Error(`SPARQL query failed: ${response.statusText}`);
    }

    const data = (await response.json()) as Dataaa;

    console.log(JSON.stringify(data.results.bindings, undefined, 1), "wtf");

    // console.log(JSON.stringify({ data }, undefined, 8));

    // data.result.binding/fowLabel

    type Dataaa = {
      head: unknown;
      results: {
        bindings: Array<HJ>;
      };
    };

    const results = data.results;

    const mfd = results.bindings.map<DTO.FieldOfWorkEntryV1>(
      (fowRootHumanFowLabel) => {
        return {
          id: asQid(extractValue(fowRootHumanFowLabel.fow)),
          category: "Art",
          label: fowRootHumanFowLabel.fowLabel.value,
        };
      },
    );

    console.log(JSON.stringify(mfd, undefined, 2));

    console.log(`✅ Processed batch ${Math.floor(i / BATCH_SIZE) + 1}.`);
    await new Promise((res) => setTimeout(res, 500));
  }
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
