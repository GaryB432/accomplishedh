import { FeDataSvc } from "$lib/data/fe-data.svelte";
import { isGary } from "$lib/utils";
import type { FeaturedHuman } from "@accomplishedh/shared";
import { error, redirect, type Actions } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async (ctx) => {
  const { todayISO } = ctx.locals;
  if (!isGary(ctx.locals)) {
    error(401, "Unauthorized");
  }
  const dataService = await FeDataSvc.create(ctx.fetch);
  if (todayISO) {
    const today = Date.parse(todayISO);
    const nextFewDays = Array(10)
      .fill(0)
      .map((_, n) => {
        const nd = new Date(today);
        nd.setDate(nd.getDate() + n);
        return nd.toISOString().slice(0, 10);
      });
    const fhs = await dataService.getFeaturedHumans(nextFewDays);
    const featured: FeaturedHuman[] = fhs ?? [];

    return {
      featured,
      todayISO,
    };
  }
  error(503, "sorry not today");
};

export const actions: Actions = {
  default: async (ctx) => {
    const { locals } = ctx;
    const dataService = {
      clearCaches: () => Promise.resolve(false),
    };
    if (isGary(locals)) {
      if (await dataService.clearCaches()) {
        redirect(303, `/admin`);
      } else {
        error(503, "cache failed to clear");
      }
    }
    error(401, "something is terribly wrong with you");
  },
};
