import type { AccomplishedHuman } from "$lib/wikibase/types";
import type { ItemId } from "@accomplishedh/wikibase/types";

import { fetchEntities } from "$lib/wikibase/api";
import { toAccomplishedH } from "$lib/wikibase/utils";

import { error } from "@sveltejs/kit";
import type { LayoutServerLoad } from "./$types";

type FeaturedDTO = [ItemId, ISODate];

type FlatFeaturedInfo = {
  entity: string;
  on: string;
};

type ISODate = string;

export const load = (async (ctx) => {
  console.log(ctx.locals.todayISO);
  const data = await ctx.fetch("/data/featured.json");
  if (!data.ok) {
    console.error(data);
    error(503, 'splines');
  }
  const dto: FeaturedDTO[] = await data.json();
  const featureds = await fetchDayFeatureds(dto, ctx.locals.todayISO);
  const admin = false;
  return { admin, featureds };
}) satisfies LayoutServerLoad;

async function fetchDayFeatureds(
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
    ["labels", "claims"],
  );

  const humans: AccomplishedHuman[] =
    Object.values(featuredEntities).map(toAccomplishedH);

  return humans;
}
