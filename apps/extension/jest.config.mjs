import { createDefaultPreset } from "ts-jest";

const defaultPreset = createDefaultPreset();

/** @type {import('ts-jest').JestConfigWithTsJest} */
const config = {
  ...defaultPreset,
  coverageProvider: "v8",
  displayName: "app/extension",
  moduleNameMapper: {
    "^@human-accomplishment(.*)$": "<rootDir>/../../libraries$1/src/index.ts",
  },
};

export default config;
