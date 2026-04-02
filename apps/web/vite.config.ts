import { sveltekit } from "@sveltejs/kit/vite";
import devtoolsJson from "vite-plugin-devtools-json";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [sveltekit(), devtoolsJson()],
  test: {
    expect: { requireAssertions: true },
    projects: [
      // {
      //   extends: "./vite.config.ts",
      //   test: {
      //     name: "client",
      //     environment: "browser",
      //     browser: {
      //       enabled: true,
      //       provider: "playwright",
      //       instances: [{ browser: "chromium", headless: true }],
      //     },
      //     include: ["src/**/*.svelte.{test,spec}.{js,ts}"],
      //     exclude: ["src/lib/server/**"],
      //     setupFiles: ["./vitest-setup-client.ts"],
      //   },
      // },
      {
        extends: true,
        test: {
          environment: "node",
          exclude: ["src/**/*.svelte.{test,spec}.{js,ts}"],
          include: ["src/**/*.{test,spec}.{js,ts}"],
          name: "server",
        },
      },
    ],
  },
});
