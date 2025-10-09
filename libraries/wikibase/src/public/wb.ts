import type { EuroHuman } from "@accomplishedh/shared";
import * as wbApi from "../data/api.js";
import { isInstanceOfHuman } from "../logic/filters.js";
import { summarize, type SummarizedEntities } from "../logic/summarizer.js";
import type { Claim, Entity, EntityId } from "../types.js";

export async function fetchDetailedEntity(
  id: EntityId,
): Promise<Entity | undefined> {
  const entities = await wbApi.fetchEntities(
    [id],
    ["labels", "descriptions", "aliases", "claims", "sitelinks"],
  );

  return entities ? entities[id] : undefined;
}

export async function findAlternativeHumansFor(
  h: EuroHuman,
): Promise<SummarizedEntities> {
  const things_in_the_world = await wbApi.searchEntitiesByTitle(h);

  const promised_summarized_entity_array = Object.values(
    things_in_the_world,
  ).map((thing) => summarize(thing));

  const summarized_array = await Promise.all(promised_summarized_entity_array);

  return summarized_array
    .filter((h) => isInstanceOfHuman(h))
    .reduce((a, b) => {
      a[b.id] = b;
      return a;
    }, {} as SummarizedEntities);
}

export function simplifyClaim(c: Claim): unknown {
  console.log(c.id);
  throw new Error("Method not implemented.");
}
