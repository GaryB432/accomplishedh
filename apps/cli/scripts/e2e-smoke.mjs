#!/usr/bin/env node

import { spawnSync } from "node:child_process";
import { mkdirSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";

const repoRoot = resolve(import.meta.dirname, "../../..");
const tmpRoot = join(repoRoot, "tmp", "e2e-cli");
const runId = new Date().toISOString().replaceAll(":", "-");
const runDir = join(tmpRoot, runId);

mkdirSync(runDir, { recursive: true });

function runStep(step, index) {
  const proc = spawnSync(step.cmd, step.args, {
    cwd: repoRoot,
    encoding: "utf8",
  });

  const stdout = proc.stdout ?? "";
  const stderr = proc.stderr ?? "";
  const output = `${stdout}${stderr}`;
  const clean = stripAnsi(output);
  const code = proc.status ?? 1;

  const base = `${String(index + 1).padStart(2, "0")}-${step.name}`;
  writeFileSync(
    join(runDir, `${base}.cmd.txt`),
    `${step.cmd} ${step.args.join(" ")}\n`,
  );
  writeFileSync(join(runDir, `${base}.stdout.log`), stdout);
  writeFileSync(join(runDir, `${base}.stderr.log`), stderr);
  writeFileSync(join(runDir, `${base}.all.log`), output);

  if (step.exitCode !== code) {
    throw new Error(
      `Step ${step.name} exit code mismatch: expected ${step.exitCode}, got ${code}`,
    );
  }

  for (const re of step.mustMatch ?? []) {
    if (!re.test(clean)) {
      throw new Error(
        `Step ${step.name} missing expected output pattern: ${re}`,
      );
    }
  }

  for (const re of step.mustNotMatch ?? []) {
    if (re.test(clean)) {
      throw new Error(
        `Step ${step.name} matched forbidden output pattern: ${re}`,
      );
    }
  }
}

function stripAnsi(text) {
  // eslint-disable-next-line no-control-regex
  return text.replace(/\u001B\[[0-9;]*m/g, "");
}

const steps = [
  {
    args: ["--filter=@accomplishedh/cli", "run", "build"],
    cmd: "pnpm",
    exitCode: 0,
    mustMatch: [/Build success/],
    name: "build",
  },
  {
    args: ["apps/cli/dist/main.js", "--help"],
    cmd: "node",
    exitCode: 0,
    mustMatch: [/Usage/, /Commands:/, /featured/, /botd/],
    name: "help",
  },
  {
    args: ["apps/cli/dist/main.js", "featured", "2026-04", "--dry-run"],
    cmd: "node",
    exitCode: 1,
    mustMatch: [/start should be ISO/],
    name: "featured-invalid-start",
  },
  {
    args: ["apps/cli/dist/main.js", "botd", "2026-02-30", "--listOnly"],
    cmd: "node",
    exitCode: 1,
    mustMatch: [/facebook\.com/, /ENOENT/, /web\/static\/data\/shards/],
    mustNotMatch: [/only listOnly is supprted in this version/],
    name: "botd-list-only",
  },
  {
    args: ["apps/cli/dist/main.js", "botd", "2026-02-30"],
    cmd: "node",
    exitCode: 0,
    mustMatch: [/only listOnly is supported in this version/],
    name: "botd-no-list-only",
  },
];

try {
  for (const [i, step] of steps.entries()) {
    process.stdout.write(`Running ${step.name}...\n`);
    runStep(step, i);
  }
  process.stdout.write(`PASS e2e smoke. Logs: ${runDir}\n`);
} catch (error) {
  const msg = error instanceof Error ? error.message : String(error);
  process.stderr.write(`FAIL e2e smoke: ${msg}\n`);
  process.stderr.write(`Logs: ${runDir}\n`);
  process.exit(1);
}
