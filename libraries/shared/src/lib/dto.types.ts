export type CachedDatePrecisionV1 = "day" | "month" | "unknown" | "year";
export type CachedDateV1 = {
  iso?: string;
  precision?: CachedDatePrecisionV1;
  year?: number;
};

export type EntityQid = `Q${number}`;

/** Generic reference to a Wikibase entity, optionally including a label for zero-fetch UI. */
export type EntityRefV1 = {
  id: string; // QID, e.g. "Q20440"
  label?: string;
};

/**
 * One "field of work" for a person, as emitted by tools/data/map-fows.mjs.
 * `label` is currently always present in the script output; keep it required.
 */
export type FieldOfWorkEntryV1 = {
  /** Root category bucket (derived by subclass-of root). */
  category: FowRootCategoryV1;
  /** Field-of-work QID (P101 value). */
  id: EntityQid;
  /** English label returned by the label service. */
  label: string;
};

// --- Lifespan cache -----------------------------------------------------------

/**
 * Canonical cache wrapper (recommended going forward).
 * Suggested file: apps/next-web/src/data/wikibase/fields-of-work.json
 */
export type FieldsOfWorkDatasetV1 = {
  generatedAt: string; // ISO datetime
  people: Record<PersonQid, FieldsOfWorkSummaryV1>;
  schemaVersion: 1;
};

/**
 * Back-compat type for the prototype output file:
 * tools/data/map-fows.mjs currently writes a raw map (no generatedAt/schemaVersion)
 * to apps/next-web/src/data/fow-summary.json.
 */
export type FieldsOfWorkPrototypeMapV0 = Record<
  PersonQid,
  FieldsOfWorkSummaryV1
>;

// --- Fields-of-work (FOW) cache ----------------------------------------------

export type FieldsOfWorkSummaryV1 = {
  fows: FieldOfWorkEntryV1[];
};

/** Root bucket labels used by the prototype script (Art/Lit/Music/Science). */
export type FowRootCategoryV1 = "Art" | "Lit" | "Music" | "Science";

export type LifespanDatasetV1 = {
  generatedAt: string; // ISO datetime
  people: Record<PersonQid, LifespanEntryV1>;
  schemaVersion: 1;
};

export type LifespanEntryV1 = {
  birth?: CachedDateV1;
  causeOfDeath?: EntityRefV1;

  death?: CachedDateV1;
  flags?: {
    missingBirth?: boolean;
    missingDeath?: boolean;
    multipleBirthCandidates?: boolean;
    multipleDeathCandidates?: boolean;
  };

  mannerOfDeath?: EntityRefV1;
  placeOfBirth?: EntityRefV1;

  placeOfDeath?: EntityRefV1;
};

export type PersonQid = `Q${number}`;
