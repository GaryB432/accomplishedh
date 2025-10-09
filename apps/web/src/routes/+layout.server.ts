import { isGary } from "$lib/utils";
import {
  VERCEL_GIT_COMMIT_MESSAGE,
  VERCEL_GIT_COMMIT_REF,
  VERCEL_GIT_COMMIT_SHA,
} from "$env/static/private";
import type { LayoutServerLoad } from "./$types";

export const load = (async (ctx) => {
  const theme = ctx.cookies.get("colortheme");
  return {
    admin: isGary(ctx.locals),
    theme,
    vercelEnv: {
      GIT_COMMIT_REF: VERCEL_GIT_COMMIT_REF,
      GIT_COMMIT_SHA: VERCEL_GIT_COMMIT_SHA,
      GIT_COMMIT_MESSAGE: VERCEL_GIT_COMMIT_MESSAGE,
    },
  };
}) satisfies LayoutServerLoad;
