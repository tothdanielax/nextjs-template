![GitHub License](https://img.shields.io/github/license/tothdanielax/nextjs-template)
[![codecov](https://codecov.io/gh/tothdanielax/nextjs-template/branch/main/graph/badge.svg?token=4SBWQ1C2QH)](https://codecov.io/gh/tothdanielax/nextjs-template)
[![CodeQL](https://github.com/tothdanielax/nextjs-template/actions/workflows/github-code-scanning/codeql/badge.svg?branch=main)](https://github.com/tothdanielax/nextjs-template/actions/workflows/github-code-scanning/codeql)
[![CI](https://github.com/tothdanielax/nextjs-template/actions/workflows/ci.yml/badge.svg)](https://github.com/tothdanielax/nextjs-template/actions/workflows/ci.yml)

# Table of Contents

- [Description](#description)
- [Features](#features)
- [Setup](#setup)
- [Environment Variables](#environment-variables)
- [Comments](#comments)
- [License](#license)

---

# Description

An optimized, feature packed NextJS 14 template with TypeScript, Vitest, Playwright, ESLint, Prettier, Storybook, TailwindCSS, GitHub Actions CI/CD pipeline and more. Features can be tailored to your needs easily.

---

# Features

- 😊 **NextJS 14** (App Router) with TypeScript 5.
- 🚀 **Vitest** for unit and integration tests with **React Testing Library**.
- 🎭 **Playwright** for end-to-end tests.
- 🔍 Configured **ESLint** and **Prettier** for code linting and formatting.
- 📚 **Storybook** for component development.
- 🎨 **TailwindCSS** for utility-first CSS.
- 🖌️ **ShadcnUI** for UI components.
- 🛠️ **GitHub Actions** CI/CD pipeline with **CodeQL** and **Codecov** integration.
- 🔗 **Simple git hooks** and **Lint Staged** for pre-commit hooks to run linting and formatting without the need to manually run them or CI/CD pipeline.
- 🗄️ **Drizzle** for ORM. Configured for PostgreSQL.
- 🌐 **Next-Intl** for internationalization. Currently supports English and Hungarian.
- 📦 **pnpm** as the preferred package manager. Used for CI/CD pipeline as well to use its superior caching mechanism.
- 🐳 **Docker** for local containerization. Drizzle is configured in a way to work with Docker in local development, but use Vercel in production.
- 🔐 **Zod** for schema validation.
- 🗂️ **Zustand** for state management.
- 🌙 **Dark mode** support via **Next-Themes**. This is also configured to work well with Storybook.
- ...and more!

---

# Demo

The demo is deployed to Vercel. Available at: [https://nextjs-template-zq12.vercel.app/en](https://nextjs-template-zq12.vercel.app/en).

---

# Setup

- Clone the repository:

```bash
git clone https://github.com/tothdanielax/nextjs-template.git
```

- Navigate to the folder. It can be done via CLI with:

```bash
cd nextjs-template
```

- Install dependencies (preferred package manager is 'pnpm'):

```bash
pnpm install
```

- Create '.env' file based on '.env.example' file (see [Environment Variables](#Environment Variables))
- Start the development server:

```bash
pnpm start:dev # you can also run it with 'pnpm start:dev-https' to start the LOCAL server with HTTPS
```

- Open [http://localhost:PORT](http://localhost:PORT) with your browser to see the result (if you didn't change the port, it should be 3000). Change http to https if you started the server with HTTPS.

---

# Environment Variables

The environment variables are stored in a `.env` file. The `.env.example` file contains an example for this. You can copy the `.env.example` file and rename it to `.env` and change the values as you see fit.

The environment variables are validated via `zod` and the schema can be found in the `src/utils/env.ts` file (`@t3-oss/env-nextjs` package is used for this). The variables should be imported from `env.ts`, because it provides type safety.

The following environment variables are available:

| Variable            | Description                                                                                                                                                                                                                                                                                                                      | Default Value   |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| `ANALYZE`           | Enables analyze for the app. See `@next/bundle-analyzer`.                                                                                                                                                                                                                                                                        | `false`         |
| `DB_HOST`           | Database host. Used by Drizzle & Docker.                                                                                                                                                                                                                                                                                         | `0.0.0.0`       |
| `DB_PORT`           | Database port. Used by Drizzle & Docker.                                                                                                                                                                                                                                                                                         | `5432`          |
| `POSTGRES_USER`     | Postgres user. Used by Drizzle & Docker.                                                                                                                                                                                                                                                                                         | `postgres`      |
| `POSTGRES_PASSWORD` | Postgres password. Used by Drizzle & Docker. Read more about how Postgres handles password: [https://www.postgresql.org/docs/current/auth-password.html](https://www.postgresql.org/docs/current/auth-password.html).                                                                                                            | `postgres`      |
| `MIGRATIONS_DIR`    | Migrations directory. If you did not meet with the term before, check [https://www.liquibase.com/resources/guides/database-schema-migration](https://www.liquibase.com/resources/guides/database-schema-migration). Used by Drizzle (see [https://orm.drizzle.team/docs/migrations](https://orm.drizzle.team/docs/migrations)]). | `db/migrations` |

---

# Comments

- The template is configured to work with PostgreSQL. If you want to use another database, you need to change the `drizzle` configuration in the `src/db/index.ts` file. You can find more information about the configuration in the [Drizzle documentation](https://orm.drizzle.team/kit-docs/conf). You also need to change the `docker-compose.local.yml` file to use the correct database image. Environment variables and `src/env.ts` should be changed accordingly.
- Eslint v9 introduced flat configuration as the default one. The template will not support it until all of the plugins and configurations are updated to support it. <br>
  **Note:** Plugins should be updated carefully, because some of them transitioned to v9 with breaking changes/stopped supporting older versions. <br>
  **Note**: Before updating any rules check [Typescript Eslint - Performance](https://typescript-eslint.io/troubleshooting/typed-linting/performance/).
- The template uses `pnpm` as the package manager. I recommend to use it, because I find it super fast.:) The CI/CD pipeline is also configured to use `pnpm`. If you would like to change it, you need to update the `pnpm` commands in the `package.json` file and the `ci.yml` file in the `.github/workflows` directory. Also the `pnpm-lock.yaml` file should be removed.

---

# License

Licensed under the MIT License.
