import type { Entities, EntityId } from "../types";
import type { WikibaseResponse } from "../types/responses";

import { entities_get_url, type EntityPropertyName } from "./urls";

export async function reanimated__fetchEntities(
  ids: EntityId[],
  props: EntityPropertyName[],
): Promise<Entities> {
  if (ids.length === 0 || props.length === 0) {
    console.log("do not get empty arrays");
    return {};
  }
  const entityUrl = entities_get_url({
    ids,
    props,
  });
  const response = await fetch(entityUrl);
  const entityData = (await response.json()) as WikibaseResponse;

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
