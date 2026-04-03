# Project Guidelines

## Architecture

- This repository is a pnpm workspace monorepo with packages under `apps/*` and `libraries/*`.
- App boundaries:
	- `apps/cli`: TypeScript Node CLI for operations and data generation.
	- `apps/extension`: browser extension bundled with webpack.
	- `apps/web` and `apps/next-web`: SvelteKit sites (Vite-based).
- Library boundaries:
	- `libraries/shared`: core shared utilities.
	- `libraries/web-ui`: shared UI logic for extension and web apps.
	- `libraries/social-media` and `libraries/wikibase`: domain libraries consumed by apps.
- Keep dependency direction app -> libraries and avoid introducing circular dependencies among libraries.

## Build And Test

- Install dependencies from repo root:
	- `pnpm install`
- Common workspace commands from repo root:
	- `pnpm -r lint`
	- `pnpm -r test`
	- `pnpm -r build`
- Run package-specific commands with filter when you only change one area:
	- `pnpm -r --filter @accomplishedh/extension... build`
	- `pnpm --filter @accomplishedh/web test`
	- `pnpm --filter @accomplishedh/next-web check`
	- `pnpm --filter @accomplishedh/cli build`
- For SvelteKit apps (`apps/web`, `apps/next-web`), run `check` after route/type-affecting changes.
- For extension work, use package scripts in `apps/extension/package.json` (`dev`, `build`, `watch`, `zip`).

## Code Style And Conventions

- Use ESM and TypeScript across the repo (`type: module` and `module: NodeNext`).
- Follow ESLint configuration in `eslint.config.mjs` and package-level lint configs; do not introduce a parallel style system.
- Keep public library entry points aligned with package exports (`src/index.ts` -> `dist/index.js` + declarations).
- Prefer small, focused changes that preserve package boundaries.

## Agent Workflow Expectations

- Before editing, identify the affected package(s) and run only relevant checks first; run broader checks when changes span packages.
- If a command fails, report the exact failing package and script, then continue with the smallest useful validation set.
- Do not duplicate long operational instructions already documented elsewhere; link to existing docs.

## Key Docs

- Repository overview: `README.md`
- Extension operations and release workflow: `docs/wiki/Extension.md`
- Posting workflow: `docs/wiki/Posting.md`
- Featured data refresh workflow: `docs/wiki/UpdatingFeatureds.md`
