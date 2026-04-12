import type { AccomplishedHuman } from "$lib/wikibase/types";
import type { ItemId } from "@accomplishedh/wikibase/types";

import { fetchEntities } from "$lib/wikibase/api";
import { toAccomplishedH } from "$lib/wikibase/utils";

import type { PageLoad } from "./$types";

import featuredJsonData from "../../data/featured.json";

type FeaturedDTO = [ItemId, ISODate];

type ISODate = string;

export const load = (async (ctx) => {
  const allFeatureds = await grabAllFeatureds(
    featuredJsonData as FeaturedDTO[],
    ctx.fetch,
  );
  return { featureds: allFeatureds };
}) satisfies PageLoad;

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
