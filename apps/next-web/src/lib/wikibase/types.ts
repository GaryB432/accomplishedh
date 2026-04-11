import type { Entity } from "@accomplishedh/wikibase";

// not using the old excessive type but kept these names
export type AccomplishedHuman = {
  images: { caption: string; size: number; src: string }[];
  name: string;
  notes?: string[];
  serial: string | undefined;
  wb: Pick<Entity, "id" | "type">;
};

export {
  type Claim,
  type Entity,
  type WikibaseResponse,
  WIKIDATA_PERSON_PROPERTIES,
} from "@accomplishedh/wikibase";
