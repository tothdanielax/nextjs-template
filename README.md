![GitHub License](https://img.shields.io/github/license/tothdanielax/nextjs-template)
[![codecov](https://codecov.io/gh/tothdanielax/nextjs-template/branch/main/graph/badge.svg?token=4SBWQ1C2QH)](https://codecov.io/gh/tothdanielax/nextjs-template)
[![CodeQL](https://github.com/tothdanielax/nextjs-template/actions/workflows/github-code-scanning/codeql/badge.svg?branch=main)](https://github.com/tothdanielax/nextjs-template/actions/workflows/github-code-scanning/codeql)
[![CI](https://github.com/tothdanielax/nextjs-template/actions/workflows/ci.yml/badge.svg)](https://github.com/tothdanielax/nextjs-template/actions/workflows/ci.yml)

## [API Documentation](docs/index.html)

### Table of Contents

- [Description](#description)
- [Setup](#setup)
  - [Development setup](#development-setup)
  - [Testing setup](#testing-setup)

---

# Description

## Template with Next.js, ShadcnUI, TypeScript, Storybook and more based on T3.

# Setup

## Development setup

- Install dependencies (preferred package manager is 'pnpm'):

```bash
pnpm install
```

- Create '.env' file based on '.env.example' file
- Start the development server:

```bash
pnpm run start:dev
```

---

## Testing setup

### Unit & integration tests (Vitest + React Testing Library):

```bash
pnpm test:unit
```

### End-to-end tests (Playwright):

```bash
# not necessary to start the server, but you can with 'pnpm start:dev'
pnpm test:e2e
```

---
