/**
 * ESLint's configuration for TypeScript projects.
 * @type {import("eslint").Linter.Config}
 */
const config = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    projectService: './tsconfig.json',
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        projects: ['./tsconfig.json'],
      },
    },
  },

  ignorePatterns: [
    '/node_modules',
    '/src/components/ui/**/*.tsx', // shadcn.ui components, should not be touched,
  ],

  plugins: ['@typescript-eslint', 'import', 'unicorn', 'drizzle', 'unused-imports'],

  /**
   * Preset of rules (configs) that are used in the project.
   */
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:unicorn/recommended',
    'plugin:drizzle/recommended',
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'next/core-web-vitals',
    'prettier',
  ],

  rules: {
    /* start unused-imports */
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
    /* end unused-imports */

    /* start import */
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-extraneous-dependencies.md
    'import/no-extraneous-dependencies': 'off',

    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/prefer-default-export.md
    'import/prefer-default-export': 'off',

    // ts optimization: https://typescript-eslint.io/troubleshooting/typed-linting/performance#wide-includes-in-your-eslint-options
    'import/named': 'off',
    'import/namespace': 'off',
    'import/default': 'off',
    'import/no-named-as-default-member': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',

    /* end import */

    /* start unicorn */
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-array-reduce.md
    'unicorn/no-array-reduce': 'off',
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-null.md
    'unicorn/no-null': 'off',
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/filename-case.md
    'unicorn/filename-case': 'off',
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prevent-abbreviations.md
    'unicorn/prevent-abbreviations': 'off',
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-await-expression-member.md
    'unicorn/no-await-expression-member': 'off',
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-abusive-eslint-disable.md
    'unicorn/no-abusive-eslint-disable': 'off',

    'unicorn/no-empty-file': 'off',
    /* end unicorn */

    /* start @typescript-eslint */
    // https://typescript-eslint.io/rules/restrict-template-expressions/
    '@typescript-eslint/restrict-template-expressions': 'off',
    // https://typescript-eslint.io/rules/unbound-method/
    '@typescript-eslint/unbound-method': 'off',

    /**
     * Use types instead of interfaces, because interface merging could be a source of bugs.
     * @see https://typescript-eslint.io/rules/consistent-type-definitions/
     */
    '@typescript-eslint/consistent-type-definitions': ['warn', 'type'],
    // https://typescript-eslint.io/rules/no-misused-promises/
    '@typescript-eslint/no-misused-promises': [
      'error',
      {
        checksVoidReturn: {
          attributes: false,
        },
      },
    ],
    // https://typescript-eslint.io/rules/naming-convention/
    '@typescript-eslint/naming-convention': 'off',
    // https://eslint.org/docs/latest/rules/lines-between-class-members
    '@typescript-eslint/lines-between-class-members': 'off',
    // https://eslint.org/docs/latest/rules/no-throw-literal
    '@typescript-eslint/no-throw-literal': 'off',
    /* end @typescript-eslint */

    /* start react */
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-spreading.md
    'react/jsx-props-no-spreading': 'off',
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/require-default-props.md
    'react/require-default-props': 'off',
    /* end react */

    /**
     * Next internalization helpers are in '@/navigation'.
     * @see https://eslint.org/docs/latest/rules/no-restricted-imports
     */
    'no-restricted-imports': [
      'error',
      {
        name: 'next/link',
        message: 'Please import from `@/navigation` instead.',
      },
      {
        name: 'next/navigation',
        importNames: ['redirect', 'permanentRedirect', 'useRouter', 'usePathname', 'getPathname'],
        message: 'Please import from `@/navigation` instead.',
      },
    ],
  },

  overrides: [
    {
      files: ['tests/e2e/**/*.test.{ts,tsx}'],
      plugins: ['playwright'],
      extends: ['plugin:playwright/recommended'],
    },
    {
      files: ['tests/unit/**/*.test.{ts,tsx}'],
      plugins: ['testing-library', 'vitest'],
      extends: ['plugin:testing-library/react', 'plugin:vitest/legacy-recommended'],
    },
    {
      files: ['stories/**/*.stories.{ts,tsx}'],
      plugins: ['storybook'],
      extends: ['plugin:storybook/recommended'],
    },
  ],
};

module.exports = config;
