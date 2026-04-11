import type { AccomplishedHuman } from "$lib/wikibase/types";
import type { ItemId } from "@accomplishedh/wikibase/types";

import { fetchEntities } from "$lib/wikibase/api";
import { toAccomplishedH } from "$lib/wikibase/utils";
import { readFileSync } from "fs";

import type { LayoutServerLoad } from "./$types";

type FeaturedDTO = {
  dob: string;
  name: string;
  wb: ItemId;
};

type FlatFeaturedInfo = {
  entity: string;
  on: string;
  serial: string;
};

export const load = (async (ctx) => {
  console.log(ctx.locals.todayISO);
  const featureds = await fetchDayFeatureds(ctx.locals.todayISO);
  const admin = false;
  return { admin, featureds };
}) satisfies LayoutServerLoad;

async function fetchDayFeatureds(date: string): Promise<AccomplishedHuman[]> {
  const f = readFileSync("static/data/identifiers.json", "utf-8");
  const on = date;
  const g = JSON.parse(f) as FeaturedDTO[];

  const j = g.map<FlatFeaturedInfo>((k) => {
    const entity = k.wb;
    const dob = k.dob;
    return { dob, entity, on, serial: "8426" };
  });

  const featureds: FlatFeaturedInfo[] = j.slice(94, 97);

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
