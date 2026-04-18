/**
 * This script was used to port the featureds from an older format
 *
 * It can be modified for similar purposes.
 */

import { readFileSync } from "fs";

async function main() {
  const fs = readFileSync(`apps/web/static/data/featured.json`, "utf-8");
  const qs = readFileSync(`apps/web/static/data/wb.json`, "utf-8");

  /**
   *  @type {{id:string,stamp:string,human:{id:string}}[]}
   */
  const fm = JSON.parse(fs);

  /**
   *  @type {Record<string, string>}
   */
  const qm = JSON.parse(qs);

  const qns = fm
    .map((i) => {
      const id = qm[i.human.id];
      return [id, i.stamp];
    })
    .filter(([a]) => a);

  console.log(JSON.stringify(qns, undefined, 2));
}

main().then(
  () => {
    console.log("\n");
  },
  (e) => {
    console.log(e);
  },
);
