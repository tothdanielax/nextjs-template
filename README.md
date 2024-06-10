![GitHub License](https://img.shields.io/github/license/tothdanielax/nextjs-template)

## [API Documentation](docs/index.html)

### Table of Contents
- [Description](#description)
- [Setup](#setup)
  - [Development setup](#development-setup)
  - [Production setup](#production-setup)
  - [Testing setup](#testing-setup)
- [License](#license)
- [Resources](#resources)

---
# Description

This is a template repository for a TypeScript [Next.js](https://nextjs.org) project based on [T3 Stack](https://github.com/t3-oss/create-t3-app) with the following features:
- Pre-configured TypeScript, ESLint, and Prettier
- Pre-configured pnpm as package manager
- React components and hooks library: [Mantine](https://mantine.dev/)
- Unit and integration testing: [Vitest](https://vitest.dev/) + [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- End-to-end testing: [Playwright](https://playwright.dev/docs/intro)
- SEO: [Next SEO]()
- Linting: [ESLint](https://eslint.org/)
- Formatting: [Prettier](https://prettier.io/)
- Animation: [Framer Motion](https://www.framer.com/motion/)
- State management: [Zustand](https://zustand.surge.sh/)
---
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
## Production setup

1. Install dependencies (preferred package manager is 'pnpm'):

```bash
pnpm install
```

2. Create '.env' file based on '.env.example' file
3. Build the project:

```bash
pnpm build
```

4. Start the production server:

```bash
pnpm start:prod
```

---
## Testing setup

'.env.test' file is used for testing. If you want to run the tests, you need to create this file based on '.env.example' file.

#### Unit & integration tests (Vitest + React Testing Library):

```bash
pnpm test:unit
```

#### End-to-end tests (Playwright):

```bash
# not necessary to start the server, but you can with 'pnpm start:test'
pnpm test:e2e
```

---
## License

License under [MIT License](LICENSE).

---

## Resources

- [Mantine - Getting started](https://mantine.dev/getting-started/)
- [Vitest - Getting started](https://vitest.dev/guide)
- [React Testing Library - Docs](https://testing-library.com/docs/react-testing-library/intro/)
- [Playwright - Docs](https://playwright.dev/docs/intro)
- [tRPC - Docs](https://trpc.io/docs/quickstart)
