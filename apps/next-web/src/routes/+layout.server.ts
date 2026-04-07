import type { AccomplishedHuman } from "$lib/wikibase/types";

import { fetchEntities } from "$lib/wikibase/api";
import { toAccomplishedH } from "$lib/wikibase/utils";

import type { LayoutServerLoad } from "./$types";

type FlatFeaturedInfo = {
  entity: string;
  on: string;
  serial: string;
};

export const load = (async (ctx) => {
  console.log(ctx.locals.todayISO);
  const featureds = await fetchDayFeatureds(ctx.fetch, ctx.locals.todayISO);
  const admin = false;
  return { admin, featureds };
}) satisfies LayoutServerLoad;

async function fetchDayFeatureds(
  fetch: (s: string) => Promise<Response>,
  date: string,
): Promise<AccomplishedHuman[]> {
  // console.log(`fetureds for ${date} `);
  // const f = await fetch("/data/featureds.json");
  // if (!f.ok) {
  //   throw new Error(f.statusText);
  // }
  // const featureds = (await f.json()) as FeaturedEntity[];
  // console.log(featureds);

  const on = date;
  const featureds: FlatFeaturedInfo[] = [
    { entity: "Q982518", on, serial: "8426" },
    { entity: "Q57983", on, serial: "5318" },
    { entity: "Q55030753", on, serial: "2522" },
    { entity: "Q76579", on, serial: "87" },
    { entity: "Q20882", on, serial: "2502" },
  ];

  const ids = featureds.map<string>((f) => f.entity);
  const serials = featureds.reduce(
    (a, b) => {
      a[b.entity] = b.serial;
      return a;
    },
    {} as Record<string, string>,
  );

  const featuredEntities = await fetchEntities(fetch, ids, [
    "claims",
    "labels",
  ]);

  const humans: AccomplishedHuman[] = Object.values(featuredEntities)
    .map(toAccomplishedH)
    .map((f) => ({ ...f, serial: serials[f.wb.id] }));

  return humans;
}
