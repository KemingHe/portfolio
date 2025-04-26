import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [tsconfigPaths(), react()],

  // Default test configuration, can be overridden by cli flags
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['**/*.test.?(c|m)[jt]s?(x)'],

    // Ensures consistent behavior in CI and routine runs
    watch: false,

    // Enables test environment setup and global mocks
    setupFiles: ['vitest.setup.ts'],

    // Prevents CI failures when no tests exist
    passWithNoTests: true,

    coverage: {
      provider: 'v8',
    },
  },
});
