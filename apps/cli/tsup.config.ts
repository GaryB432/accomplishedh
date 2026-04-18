import { defineConfig } from "tsup";

export default defineConfig({
  clean: true,
  dts: false,
  entry: ["src/main.ts"],
  format: ["esm"],
  outDir: "dist",
  sourcemap: true,
  target: "node22",
  tsconfig: "./tsconfig.json",
});
