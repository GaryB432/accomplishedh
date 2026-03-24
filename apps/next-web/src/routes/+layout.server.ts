import { fetchEntities } from "$lib/wikibase/api";
import type { WikibaseEntity } from "$lib/wikibase/types";
import type { LayoutServerLoad } from "./$types";

type FeaturedEntity = {
  on: string;
  serial: string;
  entity: string;
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
): Promise<WikibaseEntity[]> {
  // console.log(`fetureds for ${date} `);
  // const f = await fetch("/data/featureds.json");
  // if (!f.ok) {
  //   throw new Error(f.statusText);
  // }
  // const featureds = (await f.json()) as FeaturedEntity[];
  // console.log(featureds);

  const on = date;
  const featureds: FeaturedEntity[] = [
    { on, serial: "8426", entity: "Q982518" },
    { on, serial: "5318", entity: "Q57983" },
    { on, serial: "2522", entity: "Q55030753" },
    { on, serial: "87", entity: "Q76579" },
    { on, serial: "2502", entity: "Q20882" },
  ];
  const featuredEntities = await fetchEntities(
    fetch,
    featureds.map((f) => f.entity),
    ["claims", "labels"],
  );
  return featuredEntities;
}
