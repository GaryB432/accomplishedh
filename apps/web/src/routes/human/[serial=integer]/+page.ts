import { firstAndOnly } from "@accomplishedh/shared";
import {
  entities_get_url,
  type WikibaseResponse,
} from "@accomplishedh/wikibase";

import type { PageLoad } from "./$types";

export const load = (async ({ data, fetch }) => {
  // TODO make sure this is defined and remove the check
  if (data.human.entity?.id) {
    // Wikidata enrichment is optional. Its edge error pages (rate limits, 5xx)
    // carry no Access-Control-Allow-Origin, and SvelteKit's SSR fetch turns
    // that into a thrown "CORS error"; render the page without it instead.
    try {
      const fetched = await fetch(
        entities_get_url({
          ids: [data.human.entity!.id],
          props: ["labels", "aliases", "claims", "sitelinks/urls"],
        }),
      );
      if (!fetched.ok) {
        throw new Error(`${fetched.status} ${fetched.statusText}`);
      }
      const wb_response = (await fetched.json()) as WikibaseResponse;

      if (wb_response.success) {
        data.human.entity = firstAndOnly(wb_response.entities);
      }
      if (wb_response.warnings) console.log(wb_response.warnings);
    } catch (e) {
      console.error(`Wikidata fetch failed for ${data.human.entity!.id}:`, e);
    }
  }
  return { ...data };
}) satisfies PageLoad;
