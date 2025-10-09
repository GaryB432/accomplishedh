import { firstAndOnly } from "@accomplishedh/shared";
import {
  entities_get_url,
  type WikibaseResponse,
} from "@accomplishedh/wikibase";
import type { PageLoad } from "./$types";

export const load = (async ({ data, fetch }) => {
  const fetched = await fetch(
    entities_get_url({
      ids: [data.human.entity!.id],
      props: ["labels", "aliases", "claims", "sitelinks/urls"],
    }),
  );
  const wb_response: WikibaseResponse = await fetched.json();

  if (wb_response.success) {
    data.human.entity = firstAndOnly(wb_response.entities);
  }
  if (wb_response.warnings) console.log(wb_response.warnings);
  return { ...data };
}) satisfies PageLoad;
