import { defineConfig } from 'oxlint';

import { customRules } from './custom-rules.js';
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
    ...pluginRules.eslint.recommended,
    ...pluginRules.ember.recommended,
    ...pluginRules.import.recommended,
    ...customRules.recommended,
  },
  overrides: [
    // Ember files
    {
      files: ['**/*.{gjs,js,mjs}'],
    },
    {
      files: ['**/*.{gts,mts,ts}'],
      plugins: ['typescript'],
      rules: {
        ...pluginRules.typescript,
        ...pluginRules.ember.typescript,
        ...pluginRules.import.typescript,
        ...customRules.typescript,
      },
    },

    // Test files
    {
      files: ['tests/**/*-test.{gjs,gts,js,ts}'],
      jsPlugins: ['eslint-plugin-qunit'],
      rules: {
        ...pluginRules.qunit,
        'typescript/no-this-alias': 'off',
      },
    },

    // Configuration files
    {
      env: {
        browser: false,
        commonjs: true,
        node: true,
      },
      files: [
        '**/*.cjs',
        'config/**/*.js',
        'tests/dummy/config/**/*.js',
        '.prettierrc.js',
        '.stylelintrc.js',
        '.template-lintrc.js',
        'ember-cli-build.js',
        'index.js',
        'testem.js',
      ],
      plugins: ['node'],
      rules: {
        ...pluginRules.node.cjs,
      },
    },
    {
      env: {
        browser: false,
        node: true,
      },
      files: ['*.{mjs,mts}'],
      plugins: ['node'],
      rules: {
        ...pluginRules.node.mjs,
      },
    },
  ],
});
