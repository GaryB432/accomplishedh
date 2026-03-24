import { dev } from "$app/environment";
import { FeDataSvc } from "$lib/data/fe-data.svelte";
import type { FeaturedHuman } from "@accomplishedh/shared";
import { refreshPortraitThumbnails } from "@accomplishedh/wikibase";
import { error, redirect } from "@sveltejs/kit";
import type { Actions, PageServerLoad } from "./$types";

export const load: PageServerLoad = async (ctx) => {
  const { locals, fetch } = ctx;
  try {
    const dataService = await FeDataSvc.create(fetch);
    const featuredHumans: FeaturedHuman[] | null =
      await dataService.getFeaturedHumans([locals.todayISO]);
    if (!featuredHumans) {
      error(503, "some bad things");
    }
    const ro = { humans: featuredHumans.map((fh) => fh.human) };

    await refreshPortraitThumbnails(ctx.fetch, ro.humans, 320);

    return { ro };
  } catch (e) {
    console.error(JSON.stringify(e));
    error(503, "other bad things");
  }
};

export const actions: Actions = {
  setTheme: async ({ url, cookies }) => {
    const theme = url.searchParams.get("theme");
    const redirectTo = url.searchParams.get("redirectTo");

    if (theme) {
      cookies.set("colortheme", theme, {
        path: "/",
        sameSite: "lax",
        maxAge: 60 * 60 * 24 * 365,
        secure: !dev,
      });
    }

    redirect(303, redirectTo ?? "/");
  },
};
