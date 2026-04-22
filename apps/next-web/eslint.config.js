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
        extraFileExtensions: [".svelte"],
        parser: ts.parser,
        projectService: true,
        svelteConfig,
      },
    },
    rules: {
      ...baseConfig.rules,
      "@typescript-eslint/no-floating-promises": "warn",
      "@typescript-eslint/no-unsafe-argument": "warn",
      "@typescript-eslint/restrict-template-expressions": "warn",
      "@typescript-eslint/no-unsafe-call": "warn",
      "no-undef": "off",
      // typescript-eslint strongly recommend that you do not use the no-undef lint rule on TypeScript projects.
      // see: https://typescript-eslint.io/troubleshooting/faqs/eslint/#i-get-errors-from-the-no-undef-rule-about-global-variables-not-being-defined-even-though-there-are-no-typescript-errors
      "svelte/no-navigation-without-resolve": ["error", { ignoreLinks: true }],
    },
  },
  {
    ignores: ["**/.vercel", "**/.svelte-kit", "**/node_modules", "*.config.js"],
  },
];
