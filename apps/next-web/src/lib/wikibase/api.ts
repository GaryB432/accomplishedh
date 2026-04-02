import type { WikibaseResponse } from "@accomplishedh/wikibase";
import type { Entities } from "@accomplishedh/wikibase/types"; // TODO no subdirs

import { entities_get_url, type EntityPropertyName } from "./urls";

export async function fetchEntities(
  fetch: (url: string, init?: Readonly<RequestInit>) => Promise<Response>,
  ids: string[],
  props: EntityPropertyName[],
): Promise<Entities> {
  if (ids.length === 0 || props.length === 0) {
    throw new Error("do not get empty arrays");
  }
  const entityUrl = entities_get_url({
    ids,
    props,
  });

  const f = await fetch(entityUrl, {
    headers: [
      [
        "User-Agent",
        "AccomplishedH/1.0 (https://www.humanaccomplishment.com/aout#bot/; editor@humanaccomplishment.com) web/7.0",
      ],
    ],
  });

  if (!f.ok) {
    console.error(f.statusText);
  }

  const g = (await f.json()) as WikibaseResponse;
  if (g.success !== 1) {
    console.error(JSON.stringify(g));
    return {};
  }
  return g.entities ?? {};
}
