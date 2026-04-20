import fs from "fs";

/**
 * CONFIGURATION
 */
const WIKIDATA_SPARQL_URL = "https://query.wikidata.org/sparql";
const USER_AGENT = "AccomplishedHBot/1.0 (editor@humanaccomplishment.com)";
const BATCH_SIZE = 200; // Batching human IDs in the SPARQL query

const ROOTS = {
  Art: "Q36649",
  Lit: "Q8242",
  Music: "Q9730",
  Science: "Q336",
};

async function runFowMapping() {
  try {
    const rawIds = fs.readFileSync(
      "apps/next-web/src/data/identifiers.json",
      "utf8",
    );
    const allHumans = JSON.parse(rawIds);
    const allIds = allHumans.map((h) => h.wb);

    const fowMap = {};

    console.log(`🚀 Mapping FOWs for ${allIds.length} humans...`);

    for (let i = 0; i < allIds.length; i += BATCH_SIZE) {
      const currentBatch = allIds.slice(i, i + BATCH_SIZE);
      const humansValues = currentBatch.map((id) => `wd:${id}`).join(" ");

      const rootValues = Object.entries(ROOTS)
        .map(([name, qid]) => `wd:${qid}`)
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

      const data = await response.json();
      const results = data.results.bindings;

      results.forEach((row) => {
        const humanQid = row.human.value.split("/").pop();
        const fowQid = row.fow.value.split("/").pop();
        const fowLabel = row.fowLabel.value;
        const rootQid = row.root.value.split("/").pop();
        const categoryName = Object.keys(ROOTS).find(
          (k) => ROOTS[k] === rootQid,
        );

        if (!fowMap[humanQid]) {
          fowMap[humanQid] = { fows: [] };
        }

        fowMap[humanQid].fows.push({
          category: categoryName,
          id: fowQid,
          label: fowLabel,
        });
      });

      console.log(`✅ Processed batch ${Math.floor(i / BATCH_SIZE) + 1}.`);
      await new Promise((res) => setTimeout(res, 500)); // Respectful pause
    }

    fs.writeFileSync(
      "apps/next-web/src/data/fow-summary.json",
      JSON.stringify(fowMap, null, 2),
    );

    console.log(
      `\n🎉 Success! Mapped FOWs saved to apps/next-web/src/data/fow-summary.json`,
    );
  } catch (err) {
    console.error("Critical Script Error:", err.message);
  }
}

runFowMapping();
