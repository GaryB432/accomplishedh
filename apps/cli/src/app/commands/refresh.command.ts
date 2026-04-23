import { DTO } from "@accomplishedh/shared";
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
  const subjects = everybody.slice(50, 70).filter((h) => h);
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

    const data = (await response.json()) as {
      head: { vars: string[] };
      results: {
        bindings: Array<{
          human: { value: string };
          fow: { value: string };
          fowLabel: { value: string };
          root: { value: string };
        }>;
      };
    };

    const results = data.results.bindings;

    const mfd = results.map<DTO.FieldOfWorkEntryV1>((r) => {
      return {
        id: asQid(extractValue(r.fow)),
        category: "Art",
        label: r.fowLabel.value,
      };
    });

    console.log(JSON.stringify(mfd, undefined, 2));

    results.forEach((row) => {
      // console.log(row.human);
      // const {bindings } = row;
      // const fdf = row["itemf"].value = "sdf";
      // const humanQid = row.human.value.split("/").pop();
      // const fowQid = row.fow.value.split("/").pop();
      // const fowLabel = row.fowLabel.value;
      // const rootQid = row.root.value.split("/").pop();
      // console.log(JSON.stringify({ row, humanQid, fowQid, fowLabel, rootQid }));
      // const categoryName = Object.keys(ROOTS).find((k) => ROOTS[k] === rootQid);
      // if (!humanQid || !categoryName) return;
      // if (!fowMap[humanQid]) {
      //   fowMap[humanQid] = { fows: [] };
      // }
      // fowMap[humanQid].fows.push({
      //   category: categoryName,
      //   id: fowQid,
      //   label: fowLabel,
      // });
    });

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
