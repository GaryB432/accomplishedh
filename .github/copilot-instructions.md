# Copilot Instructions

## Monorepo Strategy

This repository uses **Source-First, Artifact-Later (SFAL)**.

See [AGENTS.md](../AGENTS.md) for the SvelteKit app-shell convention around native scrolling, sticky header behavior, and footer flow.

- Internal workspace packages are resolved through pnpm workspaces and bundled into applications at build time, so keep cross-package dependencies declared in each app or library `package.json`.

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
- Test files with a `.spec.ts` extension are included in TypeScript checks so test imports and source imports use the same resolver mode.
- `ignoreDeprecations: "6.0"` is present until TS 7 replacement for current baseUrl/paths workflow is available.

### Vitest and Vite

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
- The extension uses webpack-based build and test scripts in `apps/extension/package.json`; do not add a plain `check` script there.

## Bootstrap Requirement

- Keep `tools/bootstrap-new-repo.sh` aligned with SFAL defaults.
- If `tools/bootstrap-new-repo.sh` fails or drifts from SFAL defaults, stop, fix the script, and rerun it before merging any config strategy change.
