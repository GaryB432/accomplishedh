import adapter from "@sveltejs/adapter-vercel";

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
};

export default config;
