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
  serial: string;
};

type ISODate = string;

type OtherI = {
  name: string;
};

export const load = (async (ctx) => {
  console.log(ctx.locals.todayISO);
  const featureds = await fetchDayFeatureds(ctx.locals.todayISO);
  const admin = false;
  return { admin, featureds };
}) satisfies LayoutServerLoad;

async function fetchDayFeatureds(date: string): Promise<AccomplishedHuman[]> {
  const on = date.slice(0, 10);

  const featuredJson = JSON.parse(
    readFileSync("static/data/featured.json", "utf-8"),
  ) as FeaturedDTO[];

  const j = featuredJson
    .filter(([b, k]) => b && k === on)
    .map<FlatFeaturedInfo>(([entity, on]) => {
      return { entity, on, serial: "dunno" };
    });

  console.log(j);
  const featureds: FlatFeaturedInfo[] = j;

  const ids = featureds.map<string>((f) => f.entity);
  const serials = featureds.reduce(
    (a, b) => {
      a[b.entity] = b.serial;
      return a;
    },
    {} as Record<string, string>,
  );

  const featuredEntities = await fetchEntities(fetch, ids, [
    "labels",
    "claims",
  ]);

  const humans: AccomplishedHuman[] = Object.values(featuredEntities)
    .map((a) => {
      // console.log(a.claims);
      return a;
    })
    .map(toAccomplishedH)
    .map((f) => ({ ...f, serial: serials[f.wb.id] }));

  return humans;
}
