// import { FeDataSvc } from "$lib/data/fe-data.svelte";
// import type { FormDataHuman } from "$lib/data/utils";
// import { isGary } from "$lib/utils";
// import { refreshPortraitThumbnails } from "@accomplishedh/wikibase";
// import { error, redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = (ctx) => {
  console.log(ctx.params);
  //   const dataService = await FeDataSvc.create(ctx.fetch);
  //   const fhs = await dataService.getFeaturedHumans([ctx.locals.todayISO]);
  //   if (!fhs) {
  //     error(500, "No Featureds");
  //   }
  //   const featured = fhs ? fhs.map((fh) => fh.human) : [];
  //   const human = await dataService.getHuman(ctx.params.serial);

  //   if (!human) {
  //     error(404, "Not found");
  //   }
  const admin = false;
  const featured: unknown[] = [];
  const human = {};

  //   await refreshPortraitThumbnails(ctx.fetch, [human], 220);
  return {
    admin,
    featured,
    human,
  };
};
