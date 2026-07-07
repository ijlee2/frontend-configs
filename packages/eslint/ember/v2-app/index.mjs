import babelEslintParser from '@babel/eslint-parser';
import eslint from '@eslint/js';
import { defineConfig, globalIgnores } from 'eslint/config';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginEmberTemplateLint from 'eslint-plugin-ember/configs/template-lint-migration';
import eslintPluginEmber from 'eslint-plugin-ember/recommended';
import eslintPluginImportX from 'eslint-plugin-import-x';
import eslintPluginN from 'eslint-plugin-n';
import eslintPluginPerfectionist from 'eslint-plugin-perfectionist';
import eslintPluginQunit from 'eslint-plugin-qunit';
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
  eslintPluginEmber.configs.base,
  eslintPluginEmber.configs.gjs,
  eslintPluginEmberTemplateLint,
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

  // Ember files
  {
    files: ['**/*.js'],
    languageOptions: {
      parser: babelEslintParser,
    },
  },
  {
    files: ['**/*.{gjs,js}'],
    languageOptions: {
      globals: globals.browser,
      parserOptions: parserOptionsJs,
    },
    rules: {
      'ember/template-require-input-type': 'error',
      'ember/template-sort-invocations': 'error',
    },
    settings: {
      'import-x/resolver': {
        node: {
          extensions: ['.gjs', '.gts', '.js', '.ts'],
        },
      },
    },
  },
  {
    extends: [
      tseslint.configs.recommendedTypeChecked,
      eslintPluginEmber.configs.gts,
      eslintPluginImportX.flatConfigs.typescript,
    ],
    files: ['**/*.{gts,ts}'],
    languageOptions: {
      globals: globals.browser,
      parser: eslintPluginEmber.parser,
      parserOptions: parserOptionsTs,
    },
    rules: {
      '@typescript-eslint/array-type': 'error',
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/explicit-function-return-type': 'error',
      '@typescript-eslint/method-signature-style': ['error', 'property'],
      '@typescript-eslint/no-empty-object-type': [
        'error',
        {
          allowInterfaces: 'always',
          allowObjectTypes: 'always',
        },
      ],
      '@typescript-eslint/no-import-type-side-effects': 'error',
      'ember/no-unused-services': 'error',
      'ember/template-require-input-type': 'error',
      'ember/template-sort-invocations': 'error',
      'perfectionist/sort-enums': ['error', { ignoreCase: false }],
      'perfectionist/sort-interfaces': ['error', { ignoreCase: false }],
      'perfectionist/sort-union-types': ['error', { ignoreCase: false }],
    },
    settings: {
      'import-x/resolver': {
        node: {
          extensions: ['.gjs', '.gts', '.js', '.ts'],
        },
        typescript: true,
      },
    },
  },

  // Test files
  {
    ...eslintPluginQunit.configs.recommended,
    files: ['tests/**/*-test.{gjs,gts,js,ts}'],
    plugins: {
      qunit: eslintPluginQunit,
    },
    rules: {
      '@typescript-eslint/no-this-alias': 'off',
    },
  },

  // Configuration files
  {
    ...eslintPluginN.configs['flat/recommended-script'],
    files: [
      '**/*.cjs',
      'config/**/*.js',
      '.prettierrc.js',
      '.stylelintrc.js',
      '.template-lintrc.js',
      'ember-cli-build.js',
      'postcss.config.js',
      'testem.js',
    ],
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
