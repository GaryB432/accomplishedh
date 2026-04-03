import adapter from "@sveltejs/adapter-vercel";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    alias: {
      "@accomplishedh/shared": "../../libraries/shared/src",
      "@accomplishedh/social-media": "../../libraries/social-media/src",
      "@accomplishedh/wikibase": "../../libraries/wikibase/src",
      "@accomplishedh/web-ui": "../../libraries/web-ui/src",
    },
  },

  vitePlugin: {
    dynamicCompileOptions: ({ filename }) =>
      filename.includes("node_modules") ? undefined : { runes: true },
  },
};

export default config;
