import { firstAndOnly } from "@accomplishedh/shared";
import {
  entities_get_url,
  type WikibaseResponse,
} from "@accomplishedh/wikibase";

import type { PageLoad } from "./$types";

export const load = (async ({ data, fetch }) => {
  // TODO make sure this is defined and remove the check
  if (data.human.entity?.id) {
    const fetched = await fetch(
      entities_get_url({
        ids: [data.human.entity!.id],
        props: ["labels", "aliases", "claims", "sitelinks/urls"],
      }),
    );
    const wb_response = (await fetched.json()) as WikibaseResponse;

    if (wb_response.success) {
      data.human.entity = firstAndOnly(wb_response.entities);
    }
    if (wb_response.warnings) console.log(wb_response.warnings);
  }
  return { ...data };
}) satisfies PageLoad;
