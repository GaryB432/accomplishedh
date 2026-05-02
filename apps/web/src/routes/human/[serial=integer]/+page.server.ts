import type { FormDataHuman } from "$lib/data/utils";

import { FeDataSvc } from "$lib/data/fe-data.svelte";
import { isGary } from "$lib/utils";
import { error, redirect } from "@sveltejs/kit";

import type { Actions, PageServerLoad } from "./$types";

export const load: PageServerLoad = async (ctx) => {
  try {
    const dataService = await FeDataSvc.create(ctx.fetch);
    const fhs = await dataService.getFeaturedHumans([ctx.locals.todayISO]);
    if (!fhs) {
      console.error("No featured humans found");
    }
    const featured = fhs ? fhs.map((fh) => fh.human) : [];
    const human = await dataService.getHuman(ctx.params.serial);

    if (!human) {
      error(404, "Not found");
    }
    const admin = isGary(ctx.locals);

    // await refreshPortraitThumbnails(ctx.fetch, [human], 220);
    return {
      admin,
      featured,
      human,
    };
  } catch (e) {
    console.error(`Error loading human ${ctx.params.serial}:`, e);
    // If it's already a SvelteKit error (like the 404 above), rethrow it
    if (e && typeof e === "object" && "status" in e) {
      throw e;
    }
    error(500, "Internal Server Error");
  }
};

export const actions: Actions = {
  default: async (ctx) => {
    const { locals, request } = ctx;
    const form = await request.formData();
    const serial = form.get("serial") as string;
    if (isGary(locals)) {
      const adultbasic = form.get("adultbasic") as string;
      const adultregion = form.get("adultregion") as string;
      const death = form.get("death") as string;
      const dob = form.get("dob") as string;
      const era = form.get("era") as string;
      const inventory = form.get("inventory") as string;
      const knownFor = form.get("knownFor") as string;
      const name = form.get("name") as string;
      const osfName = form.get("osfName") as string;
      const yob = form.get("yob") as string;
      const id = form.get("id") as string;

      const formHuman: FormDataHuman = {
        adultbasic,
        adultregion,
        death,
        dob,
        era,
        id,
        inventory,
        knownFor,
        name,
        osfName,
        serial,
        yob,
      };

      // await dataService.putHuman(formHuman);
      console.log(formHuman);
      error(500, "not supported");
    }
    redirect(303, `/human/${serial}`);
  },
};
