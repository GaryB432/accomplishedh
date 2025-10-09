import globals from "globals";
import baseConfig from "../../eslint.config.mjs";

export default [
  ...baseConfig,
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    languageOptions: {
      globals: { ...globals.webextensions },
    },
  },
  { ignores: ["webpack.config.js"] },
];
