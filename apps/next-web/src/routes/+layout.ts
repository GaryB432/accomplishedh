import type { LayoutLoad, LayoutLoadEvent } from "./$types";

export const load = (async (ctx: LayoutLoadEvent) => {
  const { featureds } = ctx.data;
  return Promise.resolve({ featureds });
}) satisfies LayoutLoad;
