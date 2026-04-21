# Wikibase caching strategy (proposal)

## Goal

Keep long-lived product data separate from generated Wikibase cache artifacts, while still supporting offline/prefetched views (for charts, summaries, and future property expansions like lifespan).

## Recommendation

1. **Do not comingle canonical app data and generated cache data in the same file set.**
2. Keep canonical data files as-is:
   - `apps/next-web/src/data/identifiers.json`
   - `apps/next-web/src/data/featured.json`
3. Keep generated Wikibase cache files in a dedicated cache namespace under `src/data`, for example:
   - `apps/next-web/src/data/wikibase-cache/fields-of-work.json`
   - `apps/next-web/src/data/wikibase-cache/lifespan.json`
   - `apps/next-web/src/data/wikibase-cache/manifest.json` (metadata: generatedAt/source/schemaVersion)

This keeps ownership and lifecycle clear:

- canonical files: hand-curated/product-owned
- cache files: script-generated/refreshable/disposable

## Why this scales

- Property caches can grow by concern instead of becoming one very large mixed document.
- Regeneration can be targeted (refresh only lifespan, not field-of-work).
- Consumers can load only what they need.
- It stays easy to add more prefetched Wikibase concerns over time.

## Lifespan-first scope

Start a dedicated **lifespan** cache keyed by QID and sourced from these properties:

- `DATE_OF_BIRTH` (`P569`)
- `DATE_OF_DEATH` (`P570`)
- `PLACE_OF_BIRTH` (`P19`)
- `PLACE_OF_DEATH` (`P20`)
- `CAUSE_OF_DEATH` (`P509`)
- `MANNER_OF_DEATH` (`P1196`)

This should be stored separately from `fields-of-work.json` (same cache namespace, different concern file).

## Operational pattern

- Read from cache first for bulk/offline pages.
- Refresh caches via scripts on a schedule or manual back-office run.
- Treat cache misses/staleness as recoverable (fall back to live fetch where practical).
- Store generation timestamp + source query metadata in `manifest.json` for observability.
