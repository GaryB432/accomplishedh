import { createDefaultPreset } from "ts-jest";

const defaultPreset = createDefaultPreset();

/** @type {import('ts-jest').JestConfigWithTsJest} */
const config = {
  ...defaultPreset,
  displayName: "app/extension",
  coverageProvider: "v8",
  moduleNameMapper: {
    "^@human-accomplishment(.*)$": "<rootDir>/../../libraries$1/src/index.ts",
  },
};

export default config;
