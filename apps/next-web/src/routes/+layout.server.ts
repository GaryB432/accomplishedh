import type { AccomplishedHuman } from "$lib/wikibase/types";
import type { ItemId } from "@accomplishedh/wikibase/types";

import { fetchEntities } from "$lib/wikibase/api";
import { toAccomplishedH } from "$lib/wikibase/utils";
import { readFileSync } from "fs";

import type { LayoutServerLoad } from "./$types";

type FeaturedDTO = [ItemId, ISODate];

type FlatFeaturedInfo = {
  entity: string;
  on: string;
};

type ISODate = string;

export const load = (async (ctx) => {
  console.log(ctx.locals.todayISO);
  console.log(process.cwd(), "where am i ❓❓");
  const featureds = await fetchDayFeatureds(ctx.locals.todayISO);
  const admin = false;
  return { admin, featureds };
}) satisfies LayoutServerLoad;

async function fetchDayFeatureds(date: string): Promise<AccomplishedHuman[]> {
  const on = date.slice(0, 10);

  const featuredJson = JSON.parse(
    readFileSync("static/data/featured.json", "utf-8"),
  ) as FeaturedDTO[];

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

  const humans: AccomplishedHuman[] = Object.values(featuredEntities)
    .map((a) => {
      // console.log(a.claims);
      return a;
    })
    .map(toAccomplishedH)
    .map((f) => ({ ...f }));

  return humans;
}
