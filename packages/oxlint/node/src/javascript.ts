import { defineConfig } from 'oxlint';

import { customRules } from './custom-rules.js';
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
    ...pluginRules.eslint.recommended,
    ...pluginRules.import.recommended,
    ...customRules.recommended,
  },
  overrides: [
    // JavaScript files
    {
      files: ['**/*.{js,mjs}'],
    },

    // Configuration files
    {
      env: {
        commonjs: true,
      },
      files: ['**/*.cjs'],
      rules: {
        ...pluginRules.node.cjs,
      },
    },
    {
      files: ['*.mjs'],
      rules: {
        ...pluginRules.node.mjs,
      },
    },
  ],
});
