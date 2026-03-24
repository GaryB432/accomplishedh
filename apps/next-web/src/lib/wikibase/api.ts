import type { WikibaseEntity } from "./types";
import { entities_get_url, type EntityPropertyName } from "./urls";
// import type { Entity } from "@accomplishedh/wikibase";
// import { entities_get_url, type EntityPropertyName } from "./urls";

export async function fetchEntities(
  fetch: (url: string) => Promise<Response>,
  ids: string[],
  props: EntityPropertyName[],
): Promise<WikibaseEntity[]> {
  if (ids.length === 0 || props.length === 0) {
    throw new Error("do not get empty arrays");
  }
  const entityUrl = entities_get_url({
    ids,
    props,
  });

  const f = await fetch(entityUrl);

  if (!f.ok) {
    console.error(f.statusText);
  }

  type WBFella = {};

  const g = (await f.json()) as WikibaseEntity[];
  console.log(g.length);

  return g;
}
