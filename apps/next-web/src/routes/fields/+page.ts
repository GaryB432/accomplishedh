import type { PageLoad } from "./$types";

import fieldsOfWork from "../../data/wikibase-cache/fields-of-work.json";
import { grabGraphParts } from "./graph";

export const load = (() => {
  Object.values(fieldsOfWork.people as Record<string, { fows: object[] }>)
    .map((g) => g.fows.map((f) => ({ ...f, data: {} })))
    .flat();

  const graph = grabGraphParts(fieldsOfWork.people);

  return { graph };
}) satisfies PageLoad;
