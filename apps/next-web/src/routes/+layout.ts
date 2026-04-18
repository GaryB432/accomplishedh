import type { LayoutLoad } from "./$types";

export const load = (async (ctx) => {
  const { featureds } = ctx.data;
  return { featureds };
}) satisfies LayoutLoad;
