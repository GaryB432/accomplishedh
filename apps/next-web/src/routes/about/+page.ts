import type { PageLoad } from "./$types";

export const load: PageLoad = async (ctx) => {
  console.log(`${ctx.route.id} route has a routeId.`);
  // error(500, "oh oh problems");
  return {
    subject: "about route",
  };
};
