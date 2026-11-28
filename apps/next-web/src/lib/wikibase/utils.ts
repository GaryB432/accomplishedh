import { fromDictionary, type Entity } from "@accomplishedh/wikibase";

import { type AccomplishedHuman } from "@accomplishedh/shared";

export function toAccomplishedH(subject: Entity): AccomplishedHuman {
  const name: string = fromDictionary(subject.labels) ?? subject.id;

  const h: AccomplishedHuman = {
    images: [],
    name,
    serial: undefined,
    wb: subject,
  };
  return h;
}
