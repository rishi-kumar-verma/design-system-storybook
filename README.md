# Design System Monorepo

[![CI](https://github.com/OWNER/REPO/actions/workflows/ci.yml/badge.svg)](https://github.com/OWNER/REPO/actions/workflows/ci.yml) [![Package Manager](https://badgen.net/badge/package-manager/pnpm/blue)](https://pnpm.io/) [![Storybook](https://img.shields.io/badge/storybook-dev-orange)](#)

This repository contains a Turborepo-based design system and a Storybook app used for developing and previewing UI components.

**Quick links**
- Packages: `packages/components`, `packages/tokens`
- Storybook app: `apps/storybook`

**Table of contents**
- Prerequisites
- Setup (install)
- Build (packages + static)
- Run Storybook (local dev)
- Troubleshooting & tips

## Prerequisites

- Node.js: use an LTS version (recommended: 18.x or 20.x). Verify with:

```bash
node -v
```
- pnpm: this repo uses pnpm workspaces. Install pnpm globally if you don't have it:

```bash
npm install -g pnpm
```
- Git (for cloning and submodule operations if used).

Notes for Windows users:
- Avoid running the repo from a deeply nested OneDrive-synced path if you encounter strange file-locking or path-length issues. If you see intermittent file permission errors, try moving the workspace to a local folder (e.g., `C:\code`).

## Setup

From the repository root, install dependencies for the workspace:

```bash
pnpm install -w
```

If you want to install only for the Storybook app (faster iteration), run inside that package:

```bash
cd apps/storybook
pnpm install
```

## Build

To build all packages in the monorepo (recommended before a full test or CI run):

```bash
pnpm -w -r build
```

This runs build scripts across packages (see each package's `package.json` for details).

To produce a static Storybook build (output goes to `apps/storybook/storybook-static`):

```bash
cd apps/storybook
pnpm run build-storybook
```

Or from repo root (using pnpm workspace filter):

```bash
pnpm --filter ./apps/storybook... build-storybook
```

## Run Storybook (development)

The Storybook app is located at `apps/storybook`. To run the development server from the repo root:

```bash
pnpm --filter ./apps/storybook... dev
```

Or inside the app folder:

```bash
cd apps/storybook
pnpm dev
```

If a package script `npm run storybook` exists, you can also run that from `apps/storybook`.

When Storybook starts successfully it will print a local URL (usually `http://localhost:6006`).

## Common commands summary

```bash
# install for whole monorepo
pnpm install -w

# build packages
pnpm -w -r build

# start Storybook (dev)
pnpm --filter ./apps/storybook... dev

# build Storybook (static)
pnpm --filter ./apps/storybook... build-storybook
```

## Troubleshooting

- If you see errors about duplicate dependencies or resolution issues, delete `node_modules` and pnpm store, then reinstall:

```bash
pnpm store prune
rm -rf node_modules
pnpm install -w
```

- If Storybook fails to start with cryptic errors, try running it from inside `apps/storybook` to get package-local logs.
- On Windows, OneDrive path syncing can cause unexpected file locks. Move the repo to a non-synced local folder if builds fail intermittently.
- If you get TypeScript or path errors, ensure your IDE is using the workspace TypeScript version (see `tsconfig.base.json`).

## Contributing notes

- Add stories under `apps/storybook/stories` following the existing structure (atoms, molecules, organisms).
- Keep package `package.json` scripts small and documented.

## Where to look next

- Storybook app: [apps/storybook](apps/storybook)
- Components package: [packages/components](packages/components)
- Tokens package: [packages/tokens](packages/tokens)

If you'd like, I can also add a simple `docs/DEVELOPMENT.md` with expanded troubleshooting logs and a `Makefile`/task that wraps common commands. Want me to add that?



Next steps for you

Ensure the secret PACKAGE_PUBLISH_TOKEN exists in the repository Secrets (has write:packages scope).
Merge a release PR (or run the release workflow) — npx changeset version will create tags and npx changeset publish will publish with the token.
If you want to trigger the standalone publish workflow (manual), open Actions → Publish Package → Run workflow and provide a tag or create a vX.Y.Z tag to auto-run it.

npx changeset version

pnpm install --frozen-lockfile
pnpm build
npx changeset version
git tag -a v0.3.1 -m "test publish tag"
git show-ref --tags

git push origin v0.3.1