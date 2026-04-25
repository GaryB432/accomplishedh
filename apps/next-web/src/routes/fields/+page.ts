import type { PageLoad } from "./$types";

import fieldsOfWork from "../../data/wikibase-cache/fields-of-work.json";

export const load = (async ({ fetch }) => {
  return { fieldsOfWork };
}) satisfies PageLoad;
