import { readFileSync } from "node:fs";
import { join, normalize } from "node:path";

const dataPath = "apps/next-web/src/data";

type EsteemedIndividual = {
  field?: string | undefined;
  id: string;
};

export const dataRoot = normalize(
  join(import.meta.dirname, "..", "..", "..", dataPath),
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
    ) as Array<{ wb: string }>;
    everybody = dto
      .map((s) => s.wb)
      .map<EsteemedIndividual>((id) => {
        return { field: undefined, id };
      })
      .toSorted(localeCompareEsteemedIndividuals);
  }
  return everybody;
}

export function readById(id: string): EsteemedIndividual | undefined {
  const all = readAll();
  return all[0];
}

// export function serialToId(serial: string): string | undefined {
//   if (!idBySerial) {
//     idBySerial = JSON.parse(
//       readFileSync(join(dataRoot, "serials.json"), "utf-8"),
//     );
//   }
//   return idBySerial![padSerialForKey(serial)];
// }
