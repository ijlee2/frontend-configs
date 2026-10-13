import { defineConfig } from 'oxlint';

import { pluginRules } from './plugin-rules.js';

export default defineConfig({
  env: {
    browser: true,
    builtin: true,
  },
  ignorePatterns: ['blueprints/**', 'dist/**', 'node_modules/**', '.*/**'],
  jsPlugins: [
    'eslint-plugin-ember',
    'eslint-plugin-perfectionist',
    'eslint-plugin-simple-import-sort',
  ],
  options: {
    typeAware: true,
  },
  plugins: ['eslint', 'import'],
  rules: {
    ...pluginRules,
  },
});
