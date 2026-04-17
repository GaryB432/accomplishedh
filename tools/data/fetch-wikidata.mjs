import fs from "fs";

// 1. CONFIGURATION
const BASE_URL = "https://en.wikipedia.org/w/api.php";
const BATCH_SIZE = 50; // Hard limit for standard users
const USER_AGENT = "MyProjectBot/1.0 (contact@example.com)"; // REQUIRED: Change to your email

async function runWikipediaPipeline() {
  try {
    // 2. IMPORT IDS
    const rawIds = fs.readFileSync(
      "apps/next-web/src/data/identifiers.json",
      "utf8",
    );
    const allIds = JSON.parse(rawIds).map((f) => f.wb);

    let masterResults = {};

    console.log(
      `🚀 Starting. Processing ${allIds.length} IDs in batches of ${BATCH_SIZE}...`,
    );

    for (let i = 0; i < allIds.length; i += BATCH_SIZE) {
      const currentBatch = allIds.slice(i, i + BATCH_SIZE);

      // 3. EXECUTE BATCH
      // Using POST avoids "URL Too Long" errors for large ID strings
      const params = new URLSearchParams({
        action: "query",
        format: "json",
        formatversion: "2", // Ensures clean JSON (booleans as booleans, arrays as arrays)
        origin: "*", // Satisfies CORS requirements
        pageids: currentBatch.join("|"),
        prop: "info|pageviews", // Specify exact stats needed here
      });

      const url = `${BASE_URL}?${params.toString()}`;
      console.log(url);
      const response = await fetch(url, {
        headers: {
          "User-Agent": USER_AGENT, // Prevents the 403 Forbidden error
        },
        method: "GET",
      });

      //   // 4. VERIFY RESPONSE TYPE
      //   const contentType = response.headers.get("content-type");
      //   if (!contentType || !contentType.includes("application/json")) {
      //     const errorText = await response.text();
      //     console.error(
      //       `❌ Batch ${i} failed. Received HTML instead of JSON. Check endpoint or headers.`,
      //     );
      //     console.error("Snippet:", errorText.substring(0, 100));
      //     continue;
      //   }

      const data = await response.json();

      // DEBUG: See exactly what Wikipedia is sending back
      if (data.query && data.query.pages) {
        console.log(
          `Success: Found ${data.query.pages.length} pages in this batch.`,
        );
      } else {
        console.warn(
          "Warning: API returned no pages. Full response:",
          JSON.stringify(data),
        );
      }

      // 5. RECOMBINE JSON
      if (data.query && data.query.pages) {
        // Assigning by page ID keeps the output flat and easy to read
        data.query.pages.forEach((page) => {
          masterResults[page.pageid] = page;
        });
        console.log(
          `✅ Merged batch ${Math.floor(i / BATCH_SIZE) + 1}. Progress: ${Object.keys(masterResults).length} pages.`,
        );
      }

      // Respect API etiquette with a brief pause
      await new Promise((res) => setTimeout(res, 250));
    }

    // 6. SAVE FINAL FILE
    fs.writeFileSync("stats.json", JSON.stringify(masterResults, null, 4));
    console.log(`\n🎉 Success! All data saved to stats.json`);
  } catch (err) {
    console.error("Critical Script Error:", err.message);
  }
}

runWikipediaPipeline();
