# Copilot Instructions

## Monorepo Strategy

This repository uses **Source-First, Artifact-Later (SFAL)**.

SFAL means:

- Develop, type-check, and unit-test directly from `src`.
- Do not require `dist` artifacts for daily `check`/`test` loops.
- Reserve build artifacts for release/distribution workflows.
- The apps will be built into `dist` folders for deployment and will have any necessary dependencies bundled

## Configuration Rules

### TypeScript

- Root config is `tsconfig.json` (single source of truth).
- Root `compilerOptions.paths` maps `@accomplishedh/*` to each library `src/index.ts`.
- Root keeps `moduleResolution: "NodeNext"` baseline.
- Package-level tsconfigs override to `module: "ES2022"` and `moduleResolution: "Bundler"`.
- Libraries include spec files in TypeScript checks to keep test imports and source imports in the same resolver mode.
- `ignoreDeprecations: "6.0"` is present until TS 7 replacement for current baseUrl/paths workflow is available.

### Vitest/Vite

- Tests run package-local with `pnpm -r test`.
- Avoid root-level `pnpx vitest --run` for workspace-wide runs.
- Runtime aliases must be configured for internal package imports when tests execute cross-package source:
  - CLI aliases internal packages in `apps/cli/vitest.config.ts`.
  - Libraries that import `@accomplishedh/shared` at runtime alias it in local `vite.config.ts`.

### Scripts

- Root scripts:
  - `build`: `pnpm -r build`
  - `check`: `pnpm -r check`
  - `test`: `pnpm -r test`
- Libraries should expose both `check` and `test` scripts.
- Applications should expose a `build` script along with `check` and `test`
- Extension intentionally has no plain `check` script; webpack-aware tooling is authoritative there.

## Bootstrap Requirement

- Keep `tools/bootstrap-new-repo.sh` aligned with SFAL defaults.
- Any config strategy changes must update bootstrap in the same change.
