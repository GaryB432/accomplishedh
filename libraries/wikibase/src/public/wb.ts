import type { Claim, Entity, EntityId } from "../types.js"; // TODO weird extensions

import * as wbApi from "../data/api.js";
import { type SummarizedEntities } from "../logic/summarizer.js";

export async function fetchDetailedEntity(
  id: EntityId,
): Promise<Entity | undefined> {
  const entities = await wbApi.reanimated__fetchEntities(
    [id],
    ["labels", "descriptions", "aliases", "claims", "sitelinks"],
  );

  return entities ? entities[id] : undefined;
}

export async function findAlternativeHumansFor(
  h: unknown,
): Promise<SummarizedEntities> {
  const f: SummarizedEntities = {};
  return f;
}

export function simplifyClaim(c: Claim): unknown {
  console.log(c.id);
  throw new Error("Method not implemented.");
}
