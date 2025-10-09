import { type EuroHuman } from "@accomplishedh/shared";
import axios from "axios";
import type { Entities, EntityId, ItemId } from "../types.js";
import type { WikibaseResponse } from "../types/responses.js";
import {
  entities_get_url,
  entity_searh_url,
  type EntityPropertyName,
} from "./urls.js";

export async function fetchEntities(
  ids: EntityId[],
  props: EntityPropertyName[],
): Promise<Entities> {
  if (ids.length === 0 || props.length === 0) {
    throw new Error("do not get empty arrays");
  }
  const entityUrl = entities_get_url({
    ids,
    props,
  });
  const { data: entityData } = await axios.get<WikibaseResponse>(entityUrl);

  if (entityData.success === 1) {
    return entityData.entities!;
  } else {
    const { error, warnings } = entityData;
    if (warnings) {
      Object.keys(warnings).forEach((k) => {
        console.warn(`${k} warning(s):`);
        Object.values(warnings[k]!).forEach((w) => console.warn(w));
      });
    }
    if (error) {
      console.error(error?.info);
      throw new Error("see above");
    }
  }
  return {};
}

export async function searchEntitiesByTitle(
  search: EuroHuman | string,
): Promise<Entities> {
  const term = typeof search === "string" ? search : search.name;
  const searcher = entity_searh_url(term);

  const { data } = await axios.get<WikibaseResponse>(searcher);

  if (data.success !== 1 || data.search === void 0) {
    throw new Error(JSON.stringify(data));
  }

  return data.search.length > 0
    ? await fetchEntities(
        data.search.map<ItemId>((s) => s.id),
        ["claims", "descriptions", "labels"],
      )
    : {};
}
