import babelEslintParser from '@babel/eslint-parser';
import eslint from '@eslint/js';
import { defineConfig, globalIgnores } from 'eslint/config';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginImportX from 'eslint-plugin-import-x';
import eslintPluginN from 'eslint-plugin-n';
import eslintPluginPerfectionist from 'eslint-plugin-perfectionist';
import eslintPluginSimpleImportSort from 'eslint-plugin-simple-import-sort';
import eslintPluginSortClassMembers from 'eslint-plugin-sort-class-members';
import globals from 'globals';
import tseslint from 'typescript-eslint';

import { customRules } from '../shared/index.mjs';

const parserOptionsJs = {
  ecmaFeatures: {
    modules: true,
  },
  ecmaVersion: 'latest',
  requireConfigFile: false,
};

const parserOptionsTs = {
  projectService: true,
};

export default defineConfig([
  globalIgnores(['dist/', 'node_modules/', '.*/']),
  {
    linterOptions: {
      reportUnusedDisableDirectives: 'error',
    },
  },

  eslint.configs.recommended,
  eslintPluginImportX.flatConfigs.recommended,
  eslintPluginSortClassMembers.configs['flat/recommended'],
  eslintConfigPrettier,
  {
    plugins: {
      perfectionist: eslintPluginPerfectionist,
      'simple-import-sort': eslintPluginSimpleImportSort,
    },
  },
  customRules,

  // JavaScript files
  {
    files: ['**/*.js'],
    languageOptions: {
      parser: babelEslintParser,
      parserOptions: parserOptionsJs,
    },
  },

  // TypeScript files
  {
    extends: [
      tseslint.configs.recommendedTypeChecked,
      eslintPluginImportX.flatConfigs.typescript,
    ],
    files: ['**/*.ts'],
    languageOptions: {
      parserOptions: parserOptionsTs,
    },
    rules: {
      '@typescript-eslint/array-type': 'error',
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/explicit-function-return-type': 'error',
      '@typescript-eslint/method-signature-style': ['error', 'property'],
      '@typescript-eslint/no-import-type-side-effects': 'error',
      'perfectionist/sort-enums': ['error', { ignoreCase: false }],
      'perfectionist/sort-interfaces': ['error', { ignoreCase: false }],
      'perfectionist/sort-union-types': ['error', { ignoreCase: false }],
    },
    settings: {
      'import-x/resolver': {
        node: true,
        typescript: true,
      },
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
    files: ['**/*.mjs'],
    languageOptions: {
      ecmaVersion: 'latest',
      globals: globals.node,
      parserOptions: parserOptionsJs,
      sourceType: 'module',
    },
    plugins: {
      n: eslintPluginN,
    },
  },
]);
