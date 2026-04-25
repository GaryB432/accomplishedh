import type {
  EntityQid,
  FieldOfWorkEntryV1,
  FowRootCategoryV1,
} from "@accomplishedh/shared/lib/dto.types.js";
import { WIKIDATA_PERSON_PROPERTIES as P } from "../constants.js";
import { isoFrom } from "../data/timevalue.js";
import type { Binding, Entity, LanguageDictionary } from "../types.js";

const categories: Map<EntityQid, FowRootCategoryV1> = new Map([
  ["Q36649", "Art"],
  ["Q8242", "Art"],
  ["Q336", "Art"],
]);

export function entityDateOfBirthIso(
  entity: Pick<Entity, "claims">,
): string | undefined {
  const claims = entity.claims ?? {};
  if (claims[P.DATE_OF_BIRTH]) {
    const dobc = claims[P.DATE_OF_BIRTH]![0];
    if (
      dobc &&
      dobc.mainsnak.datavalue?.type === "time" &&
      dobc.mainsnak.datavalue.value.precision > 10
    ) {
      return isoFrom(dobc.mainsnak.datavalue);
    }
  }
  return undefined;
}

export function fromDictionary(
  stringByLanguage?: LanguageDictionary,
  lang = "en",
): string {
  if (stringByLanguage) {
    const term = stringByLanguage[lang];
    if (term) {
      return term.value ?? "no language value";
    }
  }
  return "dunno af";
}
export function toFowEntry(
  row: Record<string, Binding>,
  index?: number,
  array?: Record<string, Binding>[],
): FieldOfWorkEntryV1 {
  const id = asQid(extractValue(row["fow"]!));
  const label = row["fowLabel"]!.value;

  const category = getFowRootCategory(row["root"]!);

  return { id, category, label };
}

export function asQid(value: string): `Q${number}` {
  if (!/^Q\d+$/.test(value)) {
    throw new Error(`Invalid field-of-work id: ${value}`);
  }

  return value as `Q${number}`;
}

export function extractValue(typedValue: { value: string }): string {
  const popped = typedValue.value.split("/").pop();
  if (!popped) {
    throw new Error("no pop");
  }
  return popped;
}

const missing: EntityQid[] = [];

function getFowRootCategory(arg0: Binding): FowRootCategoryV1 {
  const q = asQid(extractValue(arg0));

  if (!categories.has(q)) {
    if (!missing.includes(q)) {
      missing.push(q);
    }
  }

  console.log(missing);

  return "Art";
}
