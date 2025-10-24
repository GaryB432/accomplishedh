import { isGary } from "$lib/utils";
import { env } from "$env/dynamic/private";

import type { LayoutServerLoad } from "./$types";

export const load = (async (ctx) => {
  const theme = ctx.cookies.get("colortheme");
  return {
    admin: isGary(ctx.locals),
    theme,
    vercelEnv: {
      GIT_COMMIT_REF: env.VERCEL_GIT_COMMIT_REF!,
      GIT_COMMIT_SHA: env.VERCEL_GIT_COMMIT_SHA!,
      GIT_COMMIT_MESSAGE: env.VERCEL_GIT_COMMIT_MESSAGE!,
    },
  };
}) satisfies LayoutServerLoad;
