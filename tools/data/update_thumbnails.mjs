import { existsSync, readFileSync } from "fs";

async function main() {
  const fd = readFileSync("apps/web/static/data/wb.json", "utf-8");
  console.log(JSON.parse(fd));

  /**
   *  @type {import('../../libraries/shared/src/index').EuroHuman[]}
   */
  const everybody = Array(16)
    .fill(0)
    .map((_, i) => `apps/web/static/data/shards/${i.toString(16)}.json`)
    .filter(existsSync)
    .map((m) => readFileSync(m, "utf-8"))
    .flatMap(JSON.parse);

  //   const pns = everybody.map((h) => ({ h, shardKey: h.id.slice(4, 5) }));

  //   pns.forEach(({ h, shardKey }) => {
  //     // const {timestamp} = h.sr;
  //     console.log(["", h.name, h.serial, h.yob, h.id, shardKey, ""].join(" | "));
  //   });
  //   pns.forEach(({ h }) => {
  //     console.log(`ha updatewm ${h.id} --birth ${h.yob} --name "${h.name}"`);
  //   });

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
