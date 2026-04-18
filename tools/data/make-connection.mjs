/**
 * This script was used to reorganize data from cosmosdb into the json structure
 * in apps/web/stat/data, which was stored in files by mob.
 *
 * It can be modified for similar purposes.
 */

import { existsSync, readFileSync } from "fs";

async function main() {
  /**
   *  @type {import('../../libraries/shared/src/index').EuroHuman[]}
   */
  const everybody = Array(16)
    .fill(0)
    .map((_, i) => `apps/web/static/data/shards/${i.toString(16)}.json`)
    .filter(existsSync)
    .map((m) => readFileSync(m, "utf-8"))
    .flatMap(JSON.parse);

  console.log(everybody.length);

  const qs = readFileSync(`apps/web/static/data/wb.json`, "utf-8");
  const qm = JSON.parse(qs);

  const pns = everybody
    .map((h) => ({
      h,
      q: qm[h.id],
      shardKey: h.id.slice(4, 5),
    }))
    .filter((m) => m.q);

  // pns.forEach(({ h, q }) => {
  //   // const {timestamp} = h.sr;
  //   console.log(["", h.name, h.serial, h.dob, h.yob, h.id, q, ""].join(" | "));
  // });

  const qns = pns
    .map((n) => ({
      dob: [n.h.yob, n.h.dob].join("-"),
      name: n.h.name,
      wb: n.q,
    }))
    .toSorted((a, b) => a.name.localeCompare(b.name));

  console.log(JSON.stringify(qns, undefined, 2));
  // pns.forEach(({ h }) => {
  //   console.log(`ha updatewm ${h.id} --birth ${h.yob} --name "${h.name}"`);
  // });

  //   for (let s = 0; s < 16; s++) {
  //     const sk = s.toString(16);

  //     // console.log('0'.charCodeAt(0))

  //     console.log(sk);
  //   }
}

main().then(
  () => {
    console.log("done");
  },
  (e) => {
    console.log(e);
  },
);
