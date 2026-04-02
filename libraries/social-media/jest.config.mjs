import { createDefaultPreset } from "ts-jest";

const defaultPreset = createDefaultPreset();

/** @type {import('ts-jest').JestConfigWithTsJest} */
const config = {
  ...defaultPreset,
  coverageProvider: "v8",
  displayName: "library/social-media",
  moduleNameMapper: {
    "^@accomplishedh(.*)$": "<rootDir>/../../libraries$1/src/index.ts",
  },
};

export default config;
