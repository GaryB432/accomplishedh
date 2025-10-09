import { padSerialForKey, type EuroHuman } from "@accomplishedh/shared";
import { readdirSync, readFileSync } from "node:fs";
import { join, normalize } from "node:path/posix";

export const dataPath = "web/static/data";

const dataRoot = normalize(join(import.meta.dirname, "../../../../", dataPath));

let everybody: EuroHuman[] | undefined;
let idBySerial: Record<string, string> | undefined;

export function readAll(): EuroHuman[] {
  if (!everybody) {
    everybody = [];
    const shardsDir = join(dataRoot, "shards");
    const fn = readdirSync(shardsDir).map((a) => join(shardsDir, a));
    for (const shardPath of fn) {
      const humans: EuroHuman[] = JSON.parse(readFileSync(shardPath, "utf-8"));
      everybody.push(...humans);
    }
    everybody.sort((a, b) => a.id.localeCompare(b.id));
  }
  return everybody;
}

export function readById(id: string): EuroHuman | undefined {
  const all = readAll();
  return all.filter((h) => h.id === id)[0];
}

export function serialToId(serial: string): string | undefined {
  if (!idBySerial) {
    idBySerial = JSON.parse(
      readFileSync(join(dataRoot, "serials.json"), "utf-8"),
    );
  }
  return idBySerial![padSerialForKey(serial)];
}
