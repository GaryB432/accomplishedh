import js from "@eslint/js";
import perf from "eslint-plugin-perfectionist";
import { defineConfig } from "eslint/config";
import globals from "globals";
import tseslint from "typescript-eslint";

export default defineConfig([
  {
    ignores: [
      "**/node_modules/**",
      "**/dist/**",
      "**/build/**",
      "**/.svelte-kit/**",
      "**/.vercel/**",
      "**/coverage/**",
      "**/tmp/**",
    ],
  },
  tseslint.configs.recommended,
  {
    extends: ["js/recommended"],
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
    plugins: { js, perf },
    rules: {
      "@typescript-eslint/no-undef": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "no-undef": "off",
      "no-unused-vars": "off",
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
]);
