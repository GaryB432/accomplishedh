#!/usr/bin/env bash
set -euo pipefail

REPO_NAME="${1:-accomplishedh-next}"

mkdir -p "$REPO_NAME"
cd "$REPO_NAME"

mkdir -p apps/{cli,extension,web,next-web}/src
mkdir -p libraries/{shared,social-media,web-ui,wikibase}/src

# Root workspace files
cat > pnpm-workspace.yaml <<'EOF'
packages:
  - apps/*
  - libraries/*
EOF

cat > .gitignore <<'EOF'
node_modules/
dist/
tmp/
EOF

cat > .prettierignore <<'EOF'
pnpm-lock.yaml
EOF

cat > package.json <<'EOF'
{
  "name": "@accomplishedh/repo",
  "private": true,
  "version": "0.1.0",
  "type": "module",
  "packageManager": "pnpm@10.28.0",
  "scripts": {
    "check": "pnpm -r check",
    "test": "pnpm -r test"
  },
  "devDependencies": {
    "@types/node": "^24.0.0",
    "typescript": "next",
    "vitest": "^4.1.2"
  }
}
EOF

cat > tsconfig.json <<'EOF'
{
  "compilerOptions": {
    "baseUrl": ".",
    "ignoreDeprecations": "6.0",
    "target": "ES2022",
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "strict": true,
    "noUnusedLocals": false,
    "resolveJsonModule": true,
    "paths": {
      "@accomplishedh/shared": ["libraries/shared/src/index.ts"],
      "@accomplishedh/social-media": ["libraries/social-media/src/index.ts"],
      "@accomplishedh/web-ui": ["libraries/web-ui/src/index.ts"],
      "@accomplishedh/wikibase": ["libraries/wikibase/src/index.ts"]
    }
  }
}
EOF

write_library() {
  local dir="$1"
  local name="$2"

  cat > "${dir}/package.json" <<EOF
{
  "name": "${name}",
  "private": true,
  "version": "0.1.0",
  "type": "module",
  "scripts": {
    "check": "tsc --noEmit -p tsconfig.json",
    "test": "vitest --run"
  }
}
EOF

  cat > "${dir}/tsconfig.json" <<'EOF'
{
  "extends": ["../../tsconfig.json"],
  "compilerOptions": {
    "module": "ES2022",
    "moduleResolution": "Bundler"
  },
  "include": ["src"]
}
EOF

  cat > "${dir}/vite.config.ts" <<'EOF'
import { fileURLToPath } from "node:url";

import { defineConfig } from "vitest/config";

export default defineConfig({
  resolve: {
    alias: {
      "@accomplishedh/shared": fileURLToPath(
        new URL("../shared/src/index.ts", import.meta.url),
      ),
      "@accomplishedh/social-media": fileURLToPath(
        new URL("../social-media/src/index.ts", import.meta.url),
      ),
      "@accomplishedh/web-ui": fileURLToPath(
        new URL("../web-ui/src/index.ts", import.meta.url),
      ),
      "@accomplishedh/wikibase": fileURLToPath(
        new URL("../wikibase/src/index.ts", import.meta.url),
      ),
    },
  },
  test: {
    expect: { requireAssertions: true },
    projects: [
      {
        extends: "./vite.config.ts",
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
EOF

  echo "export {};" > "${dir}/src/index.ts"
}

write_library libraries/shared "@accomplishedh/shared"
write_library libraries/social-media "@accomplishedh/social-media"
write_library libraries/web-ui "@accomplishedh/web-ui"
write_library libraries/wikibase "@accomplishedh/wikibase"

cat > apps/cli/package.json <<'EOF'
{
  "name": "@accomplishedh/cli",
  "private": true,
  "version": "0.1.0",
  "type": "module",
  "scripts": {
    "check": "tsc --noEmit -p tsconfig.json",
    "test": "vitest --run"
  },
  "dependencies": {
    "@accomplishedh/shared": "workspace:^",
    "@accomplishedh/social-media": "workspace:^",
    "@accomplishedh/wikibase": "workspace:^"
  }
}
EOF

cat > apps/cli/tsconfig.json <<'EOF'
{
  "extends": ["../../tsconfig.json"],
  "compilerOptions": {
    "module": "ES2022",
    "moduleResolution": "Bundler",
    "rootDir": "../..",
    "types": ["node"]
  },
  "include": ["src"]
}
EOF

cat > apps/cli/vitest.config.ts <<'EOF'
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
      "@accomplishedh/web-ui": fileURLToPath(
        new URL("../../libraries/web-ui/src/index.ts", import.meta.url),
      ),
      "@accomplishedh/wikibase": fileURLToPath(
        new URL("../../libraries/wikibase/src/index.ts", import.meta.url),
      ),
    },
  },
  test: {
    environment: "node",
  },
});
EOF

echo "export {};" > apps/cli/src/index.ts

write_vite_app() {
  local dir="$1"
  local name="$2"

  cat > "${dir}/package.json" <<EOF
{
  "name": "${name}",
  "private": true,
  "version": "0.1.0",
  "type": "module",
  "scripts": {
    "check": "tsc --noEmit -p tsconfig.json",
    "test:unit": "vitest",
    "test": "vitest --run"
  }
}
EOF

  cat > "${dir}/tsconfig.json" <<'EOF'
{
  "extends": ["../../tsconfig.json"],
  "compilerOptions": {
    "module": "ES2022",
    "moduleResolution": "Bundler"
  },
  "include": ["src"]
}
EOF

  echo "export {};" > "${dir}/src/index.ts"
}

write_vite_app apps/web "@accomplishedh/web"
write_vite_app apps/next-web "@accomplishedh/next-web"

# Extension intentionally omits a plain `check` script.
# Webpack (assets/scss/loaders) is its runtime truth for correctness.
cat > apps/extension/package.json <<'EOF'
{
  "name": "@accomplishedh/extension",
  "private": true,
  "version": "0.1.0",
  "type": "module",
  "scripts": {
    "test": "vitest --run"
  },
  "devDependencies": {
    "@types/chrome": "^0.1.39"
  }
}
EOF

cat > apps/extension/tsconfig.json <<'EOF'
{
  "$schema": "https://json.schemastore.org/tsconfig",
  "extends": ["../../tsconfig.json"],
  "compilerOptions": {
    "target": "ES2023",
    "lib": ["ES2023", "DOM"],
    "module": "ES2022",
    "moduleResolution": "Bundler",
    "types": ["chrome"],
    "paths": {
      "@accomplishedh/shared": ["libraries/shared/src/index.ts"],
      "@accomplishedh/social-media": ["libraries/social-media/src/index.ts"],
      "@accomplishedh/web-ui": ["libraries/web-ui/src/index.ts"],
      "@accomplishedh/wikibase": ["libraries/wikibase/src/index.ts"],
      "@environments/*": ["apps/extension/src/environments/*"]
    }
  },
  "include": ["./src/**/*"],
  "exclude": ["src/**/*.spec.ts"]
}
EOF

echo "export {};" > apps/extension/src/index.ts

pnpm install
pnpm -r check
pnpm -r test

echo
echo "Done: ${REPO_NAME} is ready with Source-First, Artifact-Later defaults."
