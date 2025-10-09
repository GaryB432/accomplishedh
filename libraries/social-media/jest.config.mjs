import { createDefaultPreset } from "ts-jest";

const defaultPreset = createDefaultPreset();

/** @type {import('ts-jest').JestConfigWithTsJest} */
const config = {
  ...defaultPreset,
  displayName: "library/social-media",
  coverageProvider: "v8",
  moduleNameMapper: {
    "^@accomplishedh(.*)$": "<rootDir>/../../libraries$1/src/index.ts",
  },
};

export default config;
