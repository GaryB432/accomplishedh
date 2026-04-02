import type { Entity } from "@accomplishedh/wikibase";

export type AccomplishedHuman = {
  name: string;
  notes?: string[];
  serial: string | undefined;
  wb: Pick<Entity, "id">;
};

export type { Entity, WikibaseResponse } from "@accomplishedh/wikibase";
