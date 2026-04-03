import path from "node:path";
import { fileURLToPath } from "node:url";

import { defineConfig } from "vitest/config";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  resolve: {
    alias: {
      "@accomplishedh/shared": path.resolve(
        __dirname,
        "../../libraries/shared/src/index.ts",
      ),
      "@accomplishedh/social-media": path.resolve(
        __dirname,
        "../../libraries/social-media/src/index.ts",
      ),
      "@accomplishedh/wikibase": path.resolve(
        __dirname,
        "../../libraries/wikibase/src/index.ts",
      ),
    },
  },
});
