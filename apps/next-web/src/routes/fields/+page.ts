import type { PageLoad } from "./$types";

import type {
  FieldsOfWorkSummaryV1,
  PersonQid,
} from "@accomplishedh/shared/lib/dto.types";
import fieldsOfWork from "../../data/wikibase-cache/fields-of-work.json";
import { createElements } from "./cytoscape";

export const load = (() => {
  const elements = createElements(
    fieldsOfWork.people as Record<PersonQid, FieldsOfWorkSummaryV1>,
  );
  return { elements };
}) satisfies PageLoad;
