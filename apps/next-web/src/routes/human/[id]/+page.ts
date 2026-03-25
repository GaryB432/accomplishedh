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

  // console.log(fetchEntities(ctx.fetch, .));

  if (!subjects) {
    error(404, "Page not found");
  }

  const subject = subjects[id];

  const pentities = await fetchEntities(
    ctx.fetch,
    Object.keys(subject.claims ?? {}).slice(0, 25), // TODO need rate limit windows
    ["labels"],
  );
  // if (!pentities.ok) {
  //   console.log(pentities);
  //   error(
  //     503,
  //     new Error("can't get entities", { cause: pentities.statusText }),
  //   );
  // }

  const pppd = Object.values(pentities);
  console.log(pppd.map((p) => p.title));

  // const mps = await getps.json();

  return {
    subject,
  };
}
