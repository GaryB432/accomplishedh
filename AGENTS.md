# Layout Convention

This repository's SvelteKit layouts should keep scrolling native to the browser window.

Use this pattern for app shells:

- Let `html` and `body` remain unboxed and scroll naturally.
- Do not trap page scrolling inside a root wrapper with `overflow-y: auto`, `overflow: scroll`, or fixed viewport heights.
- Keep the top navigation sticky with `position: sticky; top: 0; z-index: 50;`.
- Keep the footer in normal document flow so it sits at the bottom on short pages and below content on long pages.
- Use a flex column shell with `min-height: 100dvh` and let `main` grow with `flex: 1`.
- Prefer semantic top-level page roots in `+page.svelte` files, adding page wrapper classes only when a route needs layout control.

Do not use `afterNavigate`, `goto` scroll options, or manual JavaScript scroll handling for this pattern.
