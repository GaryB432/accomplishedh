#!/usr/bin/env bash
set -euo pipefail

REPO_NAME="${1:-accomplishedh-next}"

mkdir -p "$REPO_NAME"
cd "$REPO_NAME"

mkdir -p apps/{cli,extension,web,next-web}/src
mkdir -p libraries/{shared,social-media,web-ui,wikibase}/src

# ── root ─────────────────────────────────────────────────────────────────────

cat > pnpm-workspace.yaml <<'EOF'
packages:
  - apps/*
  - libraries/*
EOF

cat > .gitignore <<'EOF'
node_modules/
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
    "check": "pnpm -r check"
  },
  "devDependencies": {
    "@types/node": "^24.0.0",
    "typescript": "next"
  }
}
EOF

cat > tsconfig.base.json <<'EOF'
{
  "compilerOptions": {
    "ignoreDeprecations": "6.0",
    "target": "ES2022",
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "strict": true,
    "noUnusedLocals": false,
    "resolveJsonModule": true,
    "paths": {
      "@accomplishedh/shared": ["./libraries/shared/src/index.ts"],
      "@accomplishedh/social-media": ["./libraries/social-media/src/index.ts"],
      "@accomplishedh/web-ui": ["./libraries/web-ui/src/index.ts"],
      "@accomplishedh/wikibase": ["./libraries/wikibase/src/index.ts"]
    }
  }
}
EOF

# ── library helper ────────────────────────────────────────────────────────────

make_library () {
  local dir="$1"
  local name="$2"

  cat > "${dir}/package.json" <<EOF
{
  "name": "${name}",
  "private": true,
  "version": "0.1.0",
  "type": "module",
  "scripts": {
    "check": "tsc --noEmit -p tsconfig.json"
  }
}
EOF

  cat > "${dir}/tsconfig.json" <<'EOF'
{
  "extends": ["../../tsconfig.base.json"],
  "compilerOptions": {
    "module": "ES2022",
    "moduleResolution": "Bundler"
  },
  "include": ["src"]
}
EOF

  echo "export {};" > "${dir}/src/index.ts"
}

make_library libraries/shared        "@accomplishedh/shared"
make_library libraries/social-media  "@accomplishedh/social-media"
make_library libraries/web-ui        "@accomplishedh/web-ui"
make_library libraries/wikibase      "@accomplishedh/wikibase"

# ── app helper ────────────────────────────────────────────────────────────────

make_app () {
  local dir="$1"
  local name="$2"

  cat > "${dir}/package.json" <<EOF
{
  "name": "${name}",
  "private": true,
  "version": "0.1.0",
  "type": "module",
  "scripts": {
    "check": "tsc --noEmit -p tsconfig.json"
  }
}
EOF

  cat > "${dir}/tsconfig.json" <<'EOF'
{
  "extends": ["../../tsconfig.base.json"],
  "compilerOptions": {
    "module": "ES2022",
    "moduleResolution": "Bundler"
  },
  "include": ["src"]
}
EOF

  echo "export {};" > "${dir}/src/index.ts"
}

make_app apps/cli      "@accomplishedh/cli"
make_app apps/web      "@accomplishedh/web"
make_app apps/next-web "@accomplishedh/next-web"

# extension gets its own tsconfig (chrome types, DOM lib)
cat > apps/extension/package.json <<'EOF'
{
  "name": "@accomplishedh/extension",
  "private": true,
  "version": "0.1.0",
  "type": "module",
  "scripts": {
    "check": "tsc --noEmit -p tsconfig.json"
  },
  "devDependencies": {
    "@types/chrome": "^0.1.39"
  }
}
EOF

cat > apps/extension/tsconfig.json <<'EOF'
{
  "extends": ["../../tsconfig.base.json"],
  "compilerOptions": {
    "module": "ES2022",
    "moduleResolution": "Bundler",
    "lib": ["ES2023", "DOM"],
    "types": ["chrome"]
  },
  "include": ["src"]
}
EOF

echo "export {};" > apps/extension/src/index.ts

# ── bootstrap ─────────────────────────────────────────────────────────────────

pnpm install
pnpm -r check

echo
echo "Done: $REPO_NAME is ready. pnpm -r check passed."
