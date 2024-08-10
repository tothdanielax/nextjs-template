import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

/**
 * Vitest configuration.
 * @see https://vitest.dev/config/
 */
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    coverage: {
      provider: 'v8',
      include: ['src/**/*'],
      exclude: ['src/styles', 'src/types', 'src/app', 'src/components/ui'],
      extension: ['.ts', '.tsx'],
      ignoreEmptyLines: true,
      reporter: ['html', 'json'],
    },
    environment: 'happy-dom',
    globals: true,
    include: ['./tests/unit/**/*.test.{ts,tsx}'],
    setupFiles: './tests/unit/test-utils/vitest.setup.ts',
    mockReset: true,
  },
});
