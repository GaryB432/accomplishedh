import type { Entity, LanguageDictionary } from "@accomplishedh/wikibase";
import { type AccomplishedHuman } from "./types";

export function greet(name: string): string {
  return `utils says: hello to ${name}`;
}
export function add(a: number, b: number): number {
  return a + b;
}
export const meaning: { life: number } = {
  life: 42,
};
export function toAccomplishedH(subject: Entity): AccomplishedHuman {
  const name: string = fromDictionary(subject.labels) ?? subject.id;

  // const ps = Object.keys(subject.claims ?? {}).toSorted();
  // console.log(JSON.stringify(ps));

  const h: AccomplishedHuman = {
    wb: subject,
    serial: undefined,
    name,
  };
  return h;
}
export function fromDictionary(
  dictionary: Readonly<LanguageDictionary> | undefined,
  language = "en",
): string | undefined {
  if (dictionary && language in dictionary) {
    return dictionary[language].value;
  }
}
