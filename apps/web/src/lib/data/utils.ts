import { existsSync, readFileSync } from "node:fs";

export interface FormDataHuman {
  adultbasic: string;
  adultregion: string;
  death: string;
  dob: string;
  era: string;
  id: string;
  inventory: string;
  knownFor: string;
  name: string;
  osfName: string;
  serial: string;
  yob: string;
}

export function getShardPathFor(
  k: string,
  patern = "../../data/shards/*.json",
): string {
  const m = patern.split("*");
  const n = m.join(k ?? "X");
  return n;
}

export function readJSONSync<T>(fn: string, defaultValue?: T): T | undefined {
  // console.log(existsSync.toString());
  if (existsSync(fn)) {
    return JSON.parse(readFileSync(fn, "utf-8"));
  }
  console.log(`no "${fn}" using default`, defaultValue);
  return defaultValue;
}

export function readArraySync<T>(fn: string, defaultValue?: T[]): Array<T> {
  if (!existsSync(fn)) {
    if (defaultValue) {
      return defaultValue;
    }
    throw new Error(`${fn} seems to not exist`);
  }
  return JSON.parse(readFileSync(fn, "utf-8"));
}
