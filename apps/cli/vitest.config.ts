import { fileURLToPath } from "node:url";

import { defineConfig } from "vitest/config";

export default defineConfig({
  resolve: {
    alias: {
      "@accomplishedh/shared": fileURLToPath(
        new URL("../../libraries/shared/src/index.ts", import.meta.url),
      ),
      "@accomplishedh/social-media": fileURLToPath(
        new URL("../../libraries/social-media/src/index.ts", import.meta.url),
      ),
      "@accomplishedh/wikibase": fileURLToPath(
        new URL("../../libraries/wikibase/src/index.ts", import.meta.url),
      ),
      "@accomplishedh/web-ui": fileURLToPath(
        new URL("../../libraries/web-ui/src/index.ts", import.meta.url),
      ),
    },
  },
  test: {
    environment: "node",
  },
});
