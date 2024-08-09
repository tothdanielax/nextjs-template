import { ESLint } from 'eslint';
import path from 'node:path';

/**
 * @returns {Promise<string[]>}
 * @see https://github.com/lint-staged/lint-staged?tab=readme-ov-file#eslint--7-1
 */
const removeIgnoredFiles = async (/** @type {string[]} */ files) => {
  const eslint = new ESLint();
  const isIgnored = await Promise.all(
    files.map((file) => eslint.isPathIgnored(file)),
  );
  return files.filter((_, i) => !isIgnored[i]);
};

/**
 *
 * @param filenames
 * @returns {Promise<string>}
 */
const buildEslintCommand = async (/** @type {string[]} */ filenames) => {
  const filteredFiles = await removeIgnoredFiles(filenames);
  return `next lint --fix --file ${filteredFiles.map((f) => path.relative(process.cwd(), f)).join(' --file ')}`;
};

export default {
  '*.{js,jsx,ts,tsx}': async (/** @type {string[]} */ filenames) => [await buildEslintCommand(filenames)],
  '*': 'prettier --write --ignore-unknown',
};
