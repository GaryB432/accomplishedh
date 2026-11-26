import { readFileSync } from "node:fs";
import { join, normalize } from "node:path";

export const dataPath = "apps/next-web/src/lib/data";

type EsteemedIndividual = {
  field?: string | undefined;
  id: string;
  name: string;
};

export const dataRoot = normalize(
  join(import.meta.dirname, "../../..", dataPath),
);

let everybody: EsteemedIndividual[] | undefined;
let idBySerial: Record<string, string> | undefined;

const localeCompareEsteemedIndividuals = (
  a: EsteemedIndividual,
  b: EsteemedIndividual,
): number => {
  const normalizeEntityId = (entityId: string) => {
    if (!entityId.startsWith("Q")) throw new Error("do not");

    return "Q" + entityId.slice(1).padStart(9, "0");
  };
  return normalizeEntityId(a.id).localeCompare(normalizeEntityId(b.id));
};

export function readAll(): EsteemedIndividual[] {
  if (!everybody) {
    const dto = JSON.parse(
      readFileSync(join(dataRoot, "identifiers.json"), "utf-8"),
    ) as Array<{ wb: string; name: string }>;
    everybody = dto
      .map<EsteemedIndividual>((s) => {
        return { id: s.wb, name: s.name, field: undefined };
      })
      .toSorted(localeCompareEsteemedIndividuals);
  }
  return everybody;
}

export function readById(_id: string): EsteemedIndividual | undefined {
  throw new Error("not supported");
  // const all = readAll();
  // return all[0];
}
