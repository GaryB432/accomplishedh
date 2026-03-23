import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";

export const load: PageLoad = (ctx) => {
  if (!ctx.params.id.startsWith("Q")) {
    error(404, "use a Q");
  }
  return {
    entity : ctx.params.id
  };
};
