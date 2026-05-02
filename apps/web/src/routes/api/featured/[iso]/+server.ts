import { FeDataSvc } from "$lib/data/fe-data.svelte";
import { isValidISO8601 } from "@accomplishedh/shared";
import { error } from "@sveltejs/kit";

import type { RequestHandler } from "./$types";

export const GET: RequestHandler = async (ctx) => {
  const width = ctx.url.searchParams.get("thumbnail_width") ?? "220";
  const dataService = await FeDataSvc.create(ctx.fetch);
  const fullISO =
    ctx.params.iso === "today" ? ctx.locals.todayISO : ctx.params.iso;
  const iso = fullISO.slice(0, 10);

  if (!isValidISO8601(iso)) {
    error(400, "Bad Request");
  }

  type SomeType = {};

  let featureds: SomeType[] = [];
  try {
    const rawFeatureds = await dataService.getFeaturedHumans([iso]);
    if (rawFeatureds) {
      featureds = rawFeatureds.map((fh) => fh.human);
    } else {
      console.error(`No featured humans found for ISO: ${iso}`);
    }
  } catch (e) {
    console.error(`Failed to fetch featured humans for ${iso}:`, e);
  }

  const headers = new Headers([
    ["content-type", "application/json;charset=UTF-8"],
    ["Access-Control-Allow-Credentials", "true"],
    ["Access-Control-Allow-Origin", "*"],
    [
      "Access-Control-Allow-Headers",
      "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
    ],
    ["Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT"],
    ["X-Powered-By", "HA"],
  ]);

  // await refreshPortraitThumbnails(ctx.fetch, featureds, parseInt(width));

  return new Response(JSON.stringify(featureds), {
    headers,
    status: 200,
    statusText: "OK",
  });
};
