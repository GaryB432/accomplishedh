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
      "@typescript-eslint/no-unnecessary-type-assertion": "warn",
      "@typescript-eslint/no-unsafe-call": "warn",
      "@typescript-eslint/no-floating-promises": "warn",
      "@typescript-eslint/no-unsafe-argument": "warn",
      "@typescript-eslint/restrict-template-expressions": "warn",
      "@typescript-eslint/no-unsafe-call": "warn",
      "@typescript-eslint/no-unsafe-return": "warn",
      "@typescript-eslint/require-await": "warn",

      "no-undef": "off",
      "svelte/no-navigation-without-resolve": ["error", { ignoreLinks: true }],
    },
  },
  {
    ignores: [
      "**/.vercel",
      "**/.svelte-kit",
      "**/node_modules",
      "*.config.js",
      "**/src",
    ],
  },
];
