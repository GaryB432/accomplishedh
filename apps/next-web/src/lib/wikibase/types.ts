import type { Entity } from "@accomplishedh/wikibase";

export type AccomplishedHuman = {
  wb: Pick<Entity, "id">;
  serial: string | undefined;
  name: string;
  notes?: string[];
};

export type { Entity, WikibaseResponse } from "@accomplishedh/wikibase";
