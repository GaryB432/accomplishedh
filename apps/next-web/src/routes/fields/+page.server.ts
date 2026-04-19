import type { AccomplishedHuman } from "@accomplishedh/shared";
import type { ItemId, WikibaseResponse } from "@accomplishedh/wikibase/types";

import { fetchEntities } from "$lib/wikibase/api";
import { apiRequestConfig } from "$lib/wikibase/urls";
import { toAccomplishedH } from "$lib/wikibase/utils";
import { split } from "@accomplishedh/shared";
import {
  entities_get_url,
  WIKIDATA_PERSON_PROPERTIES as p,
} from "@accomplishedh/wikibase";

import type { PageServerLoad } from "./$types";

import everybodyJson from "../../data/identifiers.json";

type FeaturedDTO = [ItemId, ISODate];

type ISODate = string;

export const load = (async (ctx) => {
  const fieldsOfWork = new Map<string, number>();

  const batches = split(everybodyJson as { wb: string }[], 10);

  const humanFetches = batches
    .map((wbs) =>
      entities_get_url({ ids: wbs.map((a) => a.wb), props: ["claims"] }),
    )
    .map((u) => ctx.fetch(u, apiRequestConfig));

  const resolvedFetches = await Promise.all(humanFetches);

  const resolvedHumanFetches = resolvedFetches.map(
    (resp) => resp.json() as Promise<WikibaseResponse>,
  );

  const resolvedHumanJsons = await Promise.all(resolvedHumanFetches);

  if (resolvedHumanJsons.some((r) => r.success !== 1)) {
    throw new Error("unsuccessful fetch");
  }

  const personResponses = resolvedHumanJsons.filter((r) => r.success === 1);

  for (const personResp of personResponses) {
    const { entities = {} } = personResp;
    for (const ent of Object.values(entities)) {
      const { claims = {} } = ent;
      const fows = (claims[p.FIELD_OF_WORK] ?? [])
        .map((c) => c.mainsnak)
        .map((q) => {
          return q.datavalue && q.datavalue.type === "wikibase-entityid"
            ? q.datavalue.value.id
            : undefined;
        })
        .filter((fow) => fow !== undefined);

      fows.reduce((a, b) => {
        const c = a.get(b) ?? 0;
        a.set(b, c + 1);
        return a;
      }, fieldsOfWork);
    }
  }

  return { fieldsOfWork };
}) satisfies PageServerLoad;

async function grabAllFeatureds(
  featuredJson: FeaturedDTO[],
  svelteFetch: (
    input: Request | string | URL,
    init?: RequestInit,
  ) => Promise<Response>,
): Promise<AccomplishedHuman[]> {
  const featureds: ItemId[] = featuredJson
    .filter(([entity]) => entity)
    .map<ItemId>(([entity]) => {
      return entity;
    });

  const featuredEntities =
    featureds.length > 0
      ? await fetchEntities(svelteFetch, featureds, ["claims"])
      : {};

  const humans: AccomplishedHuman[] =
    Object.values(featuredEntities).map(toAccomplishedH);

  return humans;
}
