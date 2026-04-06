import { fetchEntities } from "$lib/wikibase/api";
import { error } from "@sveltejs/kit";

import type { PageLoad, PageLoadEvent } from "./$types";

export const load: PageLoad = async (ctx: PageLoadEvent) => {
  const { id } = ctx.params;

  const subjects = await fetchEntities(
    ctx.fetch,
    [id],
    ["claims", "labels", "aliases"],
  );

  if (!subjects) {
    error(404, "Page not found");
  }

  const subject = subjects[id];

  subject.claims ??= {};

  const pentities = await fetchEntities(
    ctx.fetch,
    Object.keys(subject.claims).slice(0, 25), // TODO need rate limit windows
    ["labels"],
  );

  const wikibaseProperties = Object.values(pentities);

  return {
    subject,
    wikibaseProperties,
  };
};
