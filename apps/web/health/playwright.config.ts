import type { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
  use: {
    baseURL: "https://humanaccomplishment.com",
  },
  testDir: "tests",
};

export default config;
