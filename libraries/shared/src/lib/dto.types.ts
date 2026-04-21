/* eslint-disable perfectionist/sort-modules, perfectionist/sort-object-types, perfectionist/sort-union-types */

// --- Wikibase cache DTOs (generated artifacts) --------------------------------
// Conventions:
// - Cache files are script-generated and disposable.
// - Prefer per-file metadata: `generatedAt` + `schemaVersion` live in the cache file.

export type PersonQid = `Q${number}`;
export type EntityQid = `Q${number}`;

/** Generic reference to a Wikibase entity, optionally including a label for zero-fetch UI. */
export type EntityRefV1 = {
  id: string; // QID, e.g. "Q20440"
  label?: string;
};

export type CachedDatePrecisionV1 = "day" | "month" | "year" | "unknown";

export type CachedDateV1 = {
  iso?: string;
  precision?: CachedDatePrecisionV1;
  year?: number;
};

// --- Lifespan cache -----------------------------------------------------------

export type LifespanEntryV1 = {
  birth?: CachedDateV1;
  death?: CachedDateV1;

  placeOfBirth?: EntityRefV1;
  placeOfDeath?: EntityRefV1;

  causeOfDeath?: EntityRefV1;
  mannerOfDeath?: EntityRefV1;

  flags?: {
    missingBirth?: boolean;
    missingDeath?: boolean;
    multipleBirthCandidates?: boolean;
    multipleDeathCandidates?: boolean;
  };
};

export type LifespanDatasetV1 = {
  schemaVersion: 1;
  generatedAt: string; // ISO datetime
  people: Record<PersonQid, LifespanEntryV1>;
};

// --- Fields-of-work (FOW) cache ----------------------------------------------

/** Root bucket labels used by the prototype script (Art/Lit/Music/Science). */
export type FowRootCategoryV1 = "Art" | "Lit" | "Music" | "Science";

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

export type FieldsOfWorkSummaryV1 = {
  fows: FieldOfWorkEntryV1[];
};

/**
 * Canonical cache wrapper (recommended going forward).
 * Suggested file: apps/next-web/src/data/wikibase-cache/fields-of-work.json
 */
export type FieldsOfWorkDatasetV1 = {
  schemaVersion: 1;
  generatedAt: string; // ISO datetime
  people: Record<PersonQid, FieldsOfWorkSummaryV1>;
};

/**
 * Back-compat type for the prototype output file:
 * tools/data/map-fows.mjs currently writes a raw map (no generatedAt/schemaVersion)
 * to apps/next-web/src/data/fow-summary.json.
 */
export type FieldsOfWorkPrototypeMapV0 = Record<PersonQid, FieldsOfWorkSummaryV1>;