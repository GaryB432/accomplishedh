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
): Promise<FeaturedEntity[]> {
  console.log(`fetureds for ${date} `);
  const f = await fetch("/data/featureds.json");
  if (!f.ok) {
    throw new Error(f.statusText);
  }
  const featureds = (await f.json()) as FeaturedEntity[];

  return featureds;
}
