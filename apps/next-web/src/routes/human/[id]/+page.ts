import { fetchEntities } from "$lib/wikibase/api";
import type { PageLoad } from "./$types";
import { error } from "@sveltejs/kit";

type Iso = string;

type WikbaseEntity = {
  id: string;
  name: string;
  dob: Iso;
  notes?: string[];
};

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
    subject: subjects[id],
  };
}
