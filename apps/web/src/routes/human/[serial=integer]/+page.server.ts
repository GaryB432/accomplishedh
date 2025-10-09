import { FeDataSvc } from "$lib/data/fe-data.svelte";
import type { FormDataHuman } from "$lib/data/utils";
import { isGary } from "$lib/utils";
import { error, redirect } from "@sveltejs/kit";
import type { Actions, PageServerLoad } from "./$types";

export const load: PageServerLoad = async (ctx) => {
  const dataService = await FeDataSvc.create(ctx.fetch);
  const fhs = await dataService.getFeaturedHumans([ctx.locals.todayISO]);
  if (!fhs) {
    error(500, "No Featureds");
  }
  const featured = fhs ? fhs.map((fh) => fh.human) : [];
  const human = await dataService.getHuman(ctx.params.serial);

  if (!human) {
    error(404, "Not found");
  }
  const admin = isGary(ctx.locals);
  return {
    admin,
    featured,
    human,
  };
};

export const actions: Actions = {
  default: async (ctx) => {
    const { request, locals } = ctx;
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
        inventory,
        knownFor,
        name,
        osfName,
        yob,
        id,
        serial,
      };

      // await dataService.putHuman(formHuman);
      error(500, "not supported");
    }
    redirect(303, `/human/${serial}`);
  },
};
