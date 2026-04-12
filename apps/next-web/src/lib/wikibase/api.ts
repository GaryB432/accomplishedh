import type { Entities, WikibaseResponse } from "@accomplishedh/wikibase";

import { split } from "@accomplishedh/shared";

import {
  apiRequestConfig,
  entities_get_url,
  type EntityPropertyName,
} from "./urls";

export async function fetchEntities(
  svelteFetch: (url: string, init?: Readonly<RequestInit>) => Promise<Response>,
  ids: string[],
  props: EntityPropertyName[],
): Promise<Entities> {
  if (ids.length === 0 || props.length === 0) {
    throw new Error("do not get empty arrays");
  }
  const batches = split(ids, 20).map((qs) =>
    entities_get_url({ ids: qs, props }),
  );
  const fetches = await Promise.all(
    batches.map((u) => svelteFetch(u, apiRequestConfig)),
  );

  const wikibaseResponses = await Promise.all(
    fetches.map<Promise<WikibaseResponse>>((r) => r.json()),
  );

  const ok = wikibaseResponses.every((r) => r.success === 1);

  if (!ok) {
    console.warn("86 on wb");
  }

  return wikibaseResponses
    .filter((j) => j.success === 1)
    .map((a) => a.entities ?? {})
    .reduce((a, b) => {
      const f = { ...b, ...a };
      return f;
    }, {} as Entities);
}
