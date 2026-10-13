import babelEslintParser from '@babel/eslint-parser';
import eslint from '@eslint/js';
import { defineConfig, globalIgnores } from 'eslint/config';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginImportX from 'eslint-plugin-import-x';
import eslintPluginN from 'eslint-plugin-n';
import eslintPluginPerfectionist from 'eslint-plugin-perfectionist';
import eslintPluginSimpleImportSort from 'eslint-plugin-simple-import-sort';
import globals from 'globals';

import { customRules } from './custom-rules.js';

const parserOptionsJs = {
  ecmaFeatures: {
    modules: true,
  },
  ecmaVersion: 'latest',
  requireConfigFile: false,
};

export default defineConfig([
  globalIgnores(['dist/', 'node_modules/', '.*/']),
  {
    linterOptions: {
      reportUnusedDisableDirectives: 'error',
    },
    plugins: {
      perfectionist: eslintPluginPerfectionist,
      'simple-import-sort': eslintPluginSimpleImportSort,
    },
  },

  eslint.configs.recommended,
  eslintPluginImportX.flatConfigs.recommended,
  eslintConfigPrettier,
  customRules.recommended,

  // JavaScript files
  {
    files: ['**/*.{js,mjs}'],
    languageOptions: {
      parser: babelEslintParser,
      parserOptions: parserOptionsJs,
    },
  },

  // Configuration files
  {
    ...eslintPluginN.configs['flat/recommended-script'],
    files: ['**/*.cjs'],
    languageOptions: {
      ecmaVersion: 'latest',
      globals: globals.node,
      sourceType: 'script',
    },
    plugins: {
      n: eslintPluginN,
    },
  },
  {
    ...eslintPluginN.configs['flat/recommended-module'],
    files: ['*.mjs'],
    languageOptions: {
      ecmaVersion: 'latest',
      globals: globals.node,
      sourceType: 'module',
    },
    plugins: {
      n: eslintPluginN,
    },
  },
]);
