import js from "@eslint/js";
import perf from "eslint-plugin-perfectionist";
import { defineConfig } from "eslint/config";
import globals from "globals";
import tseslint from "typescript-eslint";

export default defineConfig([
  tseslint.configs.recommended,
  perf.configs["recommended-natural"],
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    plugins: { js, gb: perf },
    extends: ["js/recommended"],
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
    rules: {
      "no-unused-vars": "off",
      "no-undef": "off",
    },
  },

  {
    files: ["**/*.{ts,mts,cts}"],
    rules: {
      "@typescript-eslint/explicit-module-boundary-types": "warn",
    },
  },
  {
    files: ["**/*.{cjs,mjs}"],
    rules: {
      "@typescript-eslint/explicit-module-boundary-types": "off",
    },
  },
  {
    ignores: ["**/dist", "**/coverage"],
  },
]);
