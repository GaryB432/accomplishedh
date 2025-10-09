export function greet(name: string): string {
  return `sparql says: hello to ${name}`;
}
export function add(a: number, b: number): number {
  return a + b;
}
export const meaning: { life: number } = {
  life: 42,
};
import { type EuroHuman } from "@accomplishedh/shared";

const inventoryFields = new Map<string, string>([
  ["Art.West", "Q36649"],
  ["Music.West", "Q9730"],
  ["Lit.West", "Q8242"],
  ["Science", "Q336"],
]);

export function getInventoryQuery(h: EuroHuman): string {
  const inventoryKey = Array.isArray(h.inventory)
    ? h.inventory.at(0)
    : h.inventory;
  if (!inventoryKey) {
    throw new Error("no inventory");
  }
  const fowQ = inventoryFields.get(inventoryKey);

  const fowsql = `(YEAR(?date_of_birth) = ${h.yob}) ?field wdt:P279* wd:${fowQ}.`;

  const wheresql = `?item wdt:P31 wd:Q5; wdt:P569 ?date_of_birth; wdt:P101 ?field. FILTER ${fowsql}`;

  const sql = `SELECT DISTINCT ?item WHERE { ${wheresql} }`;

  return sql;
}
