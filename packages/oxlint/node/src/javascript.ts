import { defineConfig } from 'oxlint';

import { pluginRules } from './plugin-rules.js';

export default defineConfig({
  env: {
    builtin: true,
    node: true,
  },
  ignorePatterns: ['dist/**', 'node_modules/**', '.*/**'],
  jsPlugins: [
    'eslint-plugin-perfectionist',
    'eslint-plugin-simple-import-sort',
  ],
  plugins: ['eslint', 'import', 'node'],
  rules: {
    ...pluginRules,
  },
});
