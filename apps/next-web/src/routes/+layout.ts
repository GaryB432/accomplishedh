import type { LayoutLoad, LayoutLoadEvent } from "./$types";

export const load = (async (ctx: LayoutLoadEvent) => {
  const { admin, featureds } = ctx.data;
  return Promise.resolve({ admin, featureds });
}) satisfies LayoutLoad;
