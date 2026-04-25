#!/usr/bin/env node

import { spawnSync } from "node:child_process";
import { mkdirSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";

const repoRoot = resolve(import.meta.dirname, "../..");

const cacheDir = join(repoRoot, "apps/next-web/src/data/wikibase-cache");
mkdirSync(cacheDir, {
  recursive: true,
});

function runStep(step, index) {
  const proc = spawnSync(step.cmd, step.args, {
    cwd: join(repoRoot, "apps", "cli"),
    encoding: "utf8",
  });

  const stdout = proc.stdout ?? "";
  const stderr = proc.stderr ?? "";
  const output = `${stdout}${stderr}`;
  const clean = stripAnsi(output);
  const code = proc.status ?? 1;

  console.log(output);
}

function stripAnsi(text) {
  // eslint-disable-next-line no-control-regex
  return text.replace(/\u001B\[[0-9;]*m/g, "");
}

const steps = [
  {
    name: "Refresh Wikibase Caches",
    args: ["dist/main.js", "refresh", new Date().toISOString(), "--all"],
    cmd: "node",
  },
];

try {
  for (const [i, step] of steps.entries()) {
    process.stdout.write(`Running ${step.name}...\n`);
    runStep(step, i);
  }
  process.stdout.write(`refreshed: ${cacheDir}\n`);
} catch (error) {
  const msg = error instanceof Error ? error.message : String(error);
  process.stderr.write(`FAIL refresh command: ${msg}\n`);
  process.exit(1);
}
