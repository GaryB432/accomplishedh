import { WIKIDATA_PERSON_PROPERTIES as P } from "../constants.js";
import { isoFrom } from "../data/timevalue.js";
import type { Entity, ΘLanguageDictionary } from "../types.js";

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
  stringByLanguage?: ΘLanguageDictionary,
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
