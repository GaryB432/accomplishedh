import type { AccomplishedHuman } from "@accomplishedh/shared";
import type { ItemId } from "@accomplishedh/wikibase/types";

import { fetchEntities } from "$lib/wikibase/api";
import { toAccomplishedH } from "$lib/wikibase/utils";

import type { LayoutServerLoad } from "./$types";

import featuredJsonData from "../data/featured.json";

type FeaturedDTO = [ItemId, ISODate];

type FlatFeaturedInfo = {
  entity: string;
  on: string;
};

type ISODate = string;

export const load = (async (ctx) => {
  console.log(ctx.locals.todayISO);
  const dtos = featuredJsonData as FeaturedDTO[];
  const featureds = await grabDayFeatureds(dtos, ctx.locals.todayISO);
  const admin = false;
  return { admin, featureds };
}) satisfies LayoutServerLoad;

async function grabDayFeatureds(
  featuredJson: FeaturedDTO[],
  date: string,
): Promise<AccomplishedHuman[]> {
  const on = date.slice(0, 10);

  const featureds: FlatFeaturedInfo[] = featuredJson
    .filter(([entity, stamp]) => entity && stamp === on)
    .map<FlatFeaturedInfo>(([entity, on]) => {
      return { entity, on };
    });

  const featuredEntities = await fetchEntities(
    fetch,
    featureds.map<string>((f) => f.entity),
    ["labels", "descriptions", "claims"],
  );

  const humans: AccomplishedHuman[] =
    Object.values(featuredEntities).map(toAccomplishedH);

  return humans;
}
