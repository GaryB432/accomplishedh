import svelte from "eslint-plugin-svelte";
import ts from "typescript-eslint";
import baseConfig from "../../eslint.config.mjs";
import svelteConfig from "./svelte.config.js";

export default [
  ...baseConfig,
  ...svelte.configs.recommended,
  {
    files: ["**/*.svelte", "**/*.svelte.ts", "**/*.svelte.js"],
    languageOptions: {
      parserOptions: {
        projectService: true,
        extraFileExtensions: [".svelte"],
        parser: ts.parser,
        svelteConfig,
      },
    },
    rules: {
      // TODO turn this back to error
      "svelte/no-navigation-without-resolve": "warn",
      "no-undef": "off",
    },
  },
  {
    ignores: ["**/.vercel", "**/.svelte-kit"],
  },
];
