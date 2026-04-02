import adapter from "@sveltejs/adapter-vercel";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    alias: {
      "@accomplishedh/shared": "../../libraries/shared/src",
      "@accomplishedh/web-ui": "../../libraries/web-ui/src",
      "@accomplishedh/wikibase": "../../libraries/wikibase/src",
    },
  },

  preprocess: vitePreprocess(),
};

export default config;
