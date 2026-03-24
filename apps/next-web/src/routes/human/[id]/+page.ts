import { fetchEntities } from "$lib/wikibase/api";
import { toAccomplishedH } from "$lib/wikibase/utils";
import { error } from "@sveltejs/kit";

export async function load(ctx) {
  const { id } = ctx.params;

  const subjects = await fetchEntities(
    ctx.fetch,
    [id],
    ["claims", "labels", "aliases"],
  );

  if (!subjects) {
    error(404, "Page not found");
  }

  return {
    subject: toAccomplishedH(subjects[id]),
  };
}
