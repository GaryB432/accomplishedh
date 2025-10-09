/**
 * This script was used to reorganize data from cosmosdb into the json structure
 * in apps/web/stat/data, which was stored in files by mob.
 *
 * It can be modified for similar purposes.
 */

const fs = require("fs");

const byIdMap = new Map();

/**
 *  @type {Map<string, import('../../libraries/shared/src/index').EuroHuman[]>}
 */
const shardMap = new Map();

/**
 *  @type {Record<string, string>}
 */
const serialToId = {};

async function main() {
  const months = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
  ];
  for (const mm of months) {
    /**
     *  @type {import('../../libraries/shared/src/index').EuroHuman[]>}
     */
    const meuros = JSON.parse(
      fs.readFileSync(`data/euros/m${mm}.json`, "utf-8"),
    );
    for (const h of meuros) {
      byIdMap.set(h.id, h);
      const fullSerial = h.serial.padStart(6, "0");
      serialToId[fullSerial] = h.id;
      const shardKey = h.id.slice(4, 5);
      const s = shardMap.get(shardKey) ?? [];
      s.push(h);
      shardMap.set(shardKey, s);
    }
  }

  // console.log(shardMap);
  for (const [key, humans] of shardMap.entries()) {
    humans.sort((a, b) => a.id.localeCompare(b.id));
    fs.writeFileSync(
      `data/shards/${key}.json`,
      JSON.stringify(humans, undefined, 2).concat("\n"),
    );
    console.log(key, humans.length);
  }

  fs.writeFileSync(
    `data/shards/index.json`,
    JSON.stringify([...shardMap.keys()].sort(), undefined, 2).concat("\n"),
  );

  fs.writeFileSync(
    `data/serials.json`,
    JSON.stringify(
      Object.keys(serialToId)
        .sort()
        .reduce((a, b) => {
          a[b] = serialToId[b];
          return a;
        }, {}),
      undefined,
      2,
    ).concat("\n"),
  );
}

main().then(
  () => {
    console.log("done");
  },
  (e) => {
    console.log(e);
  },
);
