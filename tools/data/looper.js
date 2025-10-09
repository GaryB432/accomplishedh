/**
 * This script was used to reorganize data from cosmosdb into the json structure
 * in apps/web/stat/data, which was stored in files by mob.
 *
 * It can be modified for similar purposes.
 */

const fs = require("fs");

async function main() {
  /**
   *  @type {import('../../libraries/shared/src/index').EuroHuman[]}
   */
  const everybody = Array(16)
    .fill(0)
    .map((_, i) => `apps/web/static/data/shards/${i.toString(16)}.json`)
    .filter(fs.existsSync)
    .map((m) => fs.readFileSync(m, "utf-8"))
    .flatMap(JSON.parse);

  console.log(everybody.length);

  const missingPortrait = everybody.filter(
    (h) => h.portrait.img["src"] === void 0,
  );

  const pns = missingPortrait.map((h) => ({ h, shardKey: h.id.slice(4, 5) }));

  pns.forEach(({ h, shardKey }) => {
    // const {timestamp} = h.sr;
    console.log(["", h.name, h.serial, h.yob, h.id, shardKey, ""].join(" | "));
  });
  pns.forEach(({ h, shardKey }) => {
    console.log({ shardKey });
    console.log(`ha updatewm ${h.id} --birth ${h.yob} --name "${h.name}"`);
  });

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
