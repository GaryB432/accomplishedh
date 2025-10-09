import { FeDataSvc } from "$lib/data/fe-data.svelte";
import { isValidISO8601 } from "@accomplishedh/shared";
import { error } from "@sveltejs/kit";
import xmllib from "xml";
import { homeOf } from "../utils";
import type { RequestHandler } from "./$types";
import { feed as atomFeed } from "./atom";

export const GET: RequestHandler = async (ctx) => {
  console.log(ctx.params.format);
  const iso = ctx.locals.todayISO.slice(0, 10);

  if (!isValidISO8601(iso)) {
    error(422, "Bad Request");
  }
  const dataService = await FeDataSvc.create(ctx.fetch);
  const features = await dataService.getFeaturedHumans(true);
  switch (ctx.params.format) {
    case "atom": {
      const feedXml = await atomFeed(
        features,
        homeOf(ctx.url.href),
        ctx.locals.todayISO.slice(0, 10),
      );
      return new Response(xmllib(feedXml), {
        status: 200,
        statusText: "OK",
        headers: {
          "content-type": "application/atom+xml;charset=UTF-8",
          //   'Cache-Control': 'public, max-age=600',
        },
      });
    }
    default: {
      error(422, `feed format is not provided`);
    }
  }
};
