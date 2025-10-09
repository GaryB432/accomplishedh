import { FeDataSvc } from "$lib/data/fe-data.svelte";
import { isValidISO8601 } from "@accomplishedh/shared";
import { error } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";

export const GET: RequestHandler = async (ctx) => {
  const dataService = await FeDataSvc.create(ctx.fetch);
  const fullISO =
    ctx.params.iso === "today" ? ctx.locals.todayISO : ctx.params.iso;
  const iso = fullISO.slice(0, 10);

  if (!isValidISO8601(iso)) {
    error(400, "Bad Request");
  }
  const featureds = (await dataService.getFeaturedHumans([iso])).map(
    (fh) => fh.human,
  );
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

  return new Response(JSON.stringify(featureds), {
    status: 200,
    statusText: "OK",
    headers,
  });
};
