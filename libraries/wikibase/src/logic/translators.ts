import type { Entity, LanguageDictionary } from "../types.js";
import { WIKIDATA_PERSON_PROPERTIES as P } from "../constants.js";
import { isoFrom } from "../data/timevalue.js";
import type {
  FieldOfWorkEntryV1,
  EntityQid,
} from "@accomplishedh/shared/lib/dto.types.js"; // TODO why deep link?

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
type QueryResponseRow = {
  human: {
    value: string;
  };
  fow: {
    value: string;
  };
  fowLabel: {
    value: string;
  };
  root: {
    value: string;
  };
};

type BindingBBB = {
  type: "uri" | "literal";
  value: string;
};

export const mapFieldOfWorkEntry = (
  binding: BindingBBB,
): FieldOfWorkEntryV1 & { hum: EntityQid } => {
  const row = binding as unknown as QueryResponseRow;
  return {
    hum: asQid(extractValue(row.human)),
    id: asQid(extractValue(row.fow)),
    category: "Art",
    label: row.fowLabel.value,
  };
};

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
