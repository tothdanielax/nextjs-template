// @ts-check

/**
 * ESLint's configuration for TypeScript projects.
 * @type {import("eslint").Linter.Config}
 */
const config = {
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: './tsconfig.json',
	},

	ignorePatterns: [
		'node_modules',
		'docs',
		'dist',
		'database',
		'test-results',
		'coverage',
		'playwright-report',
		'.next',
	],

	settings: {
		'import/resolver': {
			typescript: {
				alwaysTryTypes: true,
				projects: ['./tsconfig.json'],
			},
		},
	},

	/**
	 *  Required to include plugins that are not included in 'extends' property, but are used in the rules.
	 */
	plugins: ['unused-imports'],

	/**
	 * Preset of rules (configs) that are used in the project.
	 */
	extends: ['plugin:@typescript-eslint/recommended-type-checked',
		'plugin:@typescript-eslint/stylistic-type-checked', 'plugin:import/recommended', 'plugin:import/typescript', 'plugin:security/recommended-legacy', 'plugin:sonarjs/recommended-legacy', 'plugin:jsdoc/recommended-typescript', 'plugin:unicorn/recommended', 'airbnb', 'airbnb-typescript', 'next/core-web-vitals', 'prettier', 'plugin:storybook/recommended'],

	rules: {
		/**
		 * ' and " are used across app when quoting text.
		 * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unescaped-entities.md
		 */
		'react/no-unescaped-entities': 'off',

		/**
		 * @see https://typescript-eslint.io/rules/no-unused-vars/
		 */
		'@typescript-eslint/no-unused-vars': [
			'error',
			{
				args: 'all',
				argsIgnorePattern: '^_',
				caughtErrors: 'all',
				caughtErrorsIgnorePattern: '^_',
				destructuredArrayIgnorePattern: '^_',
				varsIgnorePattern: '^_',
				ignoreRestSiblings: true,
			},
		],

		/**
		 * use effect cleanups
		 */
		'consistent-return': 'off',
		'class-methods-use-this': 'off',
		'import/extensions': 'off',
		'import/no-extraneous-dependencies': 'off',
		'import/order': 'off',
		'unicorn/no-null': 'off',
		'no-void': 'off',
		'no-plusplus': 'off',
		'@typescript-eslint/unbound-method': 'off',

		// Js config files
		'jsdoc/check-tag-names': 'off',

		// The project different naming conventions as it is a full stack project, with 3rd party libraries.
		// - PascalCase: components
		// - camelCase: hooks
		// - kebab-case: utils, 3rd party libraries
		// - snake_case: database/3rd party libraries
		// @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/filename-case.md
		'unicorn/filename-case': 'off',

		// Common abbreviation are known and also used across different 3rd party libraries (e.g. 'Props' in React, Mantine).
		'unicorn/prevent-abbreviations': 'off',

		// hoc
		'react/jsx-props-no-spreading': 'off',

		/**
		 * Mark async function explicitly as void when the returned promise is not used.
		 * In conflict with @typescript-eslint/no-misused-promises ({@link https://typescript-eslint.io/rules/no-misused-promises/}).
		 * @see https://eslint.org/docs/latest/rules/no-void
		 */
		//'no-void': 'off',

		'@typescript-eslint/no-misused-promises': [
			'error',
			{
				checksVoidReturn: {
					attributes: false,
				},
			},
		],

		'unicorn/no-await-expression-member': 'off',

		/**
		 * This rule is disabled because we use a functional approach. It will also be deprecated in the future.
		 * @see https://github.com/airbnb/javascript/issues/2890
		 * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/require-default-props.md
		 */
		'react/require-default-props': 'off',

		/**
		 * Destructed properties are not required to be documented as they should be defined in the type definition.
		 * @see https://github.com/gajus/eslint-plugin-jsdoc/blob/main/.README/rules/require-param.md
		 */
		'jsdoc/require-param': [
			'error',
			{
				checkDestructuredRoots: false,
				checkDestructured: false,
			},
		],

		'no-restricted-imports': [
			'error',
			{
				name: 'next/link',
				message: 'Please import from `#/navigation` instead.'
			},
			{
				name: 'next/navigation',
				importNames: ['redirect', 'permanentRedirect', 'useRouter', 'usePathname'],
				message: 'Please import from `#/navigation` instead.'
			}
		],

		/**
		 * Use named exports instead of default exports, as it is:
		 * - Easier to refactor
		 * - Easier to debug
		 * - IDE support
		 * - Has zero chance of wrong naming on import
		 * @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/prefer-default-export.md
		 * @see https://github.com/airbnb/javascript/issues/1365
		 */
		'import/prefer-default-export': 'off',

		/**
		 * This need to be set to something to mark the rule as enabled (auto-fixable).
		 * @see https://github.com/sweepline/eslint-plugin-unused-imports/blob/master/docs/rules/no-unused-imports.md
		 */
		'unused-imports/no-unused-imports': 'error',

		/**
		 * Use types generally instead of interfaces, because of interface merging could be a source of bugs.
		 * By default, the rule uses "interface", so we need to override it to "type".
		 * @see https://typescript-eslint.io/rules/consistent-type-definitions/
		 */
		'@typescript-eslint/consistent-type-definitions': ['warn', 'type'],
	},
	overrides: [
		{
			files: ['e2e/**/*.ts'],
			extends: ['plugin:playwright/recommended'],
			rules: {
				// there are tests for only redirects, waitForURL, waitForNavigation
				'playwright/expect-expect': 'off',
			},
		},
		{
			files: ['tests/**/*.ts'],
			plugins: ['testing-library', 'vitest'],
			extends: ['plugin:vitest/legacy-recommended', 'plugin:testing-library/react'],
			settings: {
				vitest: {
					typecheck: true,
				},
			},
			rules: {
				// inaccurate
				'testing-library/no-await-sync-queries': 'off',
				/**
				 * It is supported by Vitest.
				 * @see https://github.com/vitest-dev/vitest/issues/703
				 */
				'vitest/valid-describe-callback': 'off',
			},
		},
	],
};

module.exports = config;
