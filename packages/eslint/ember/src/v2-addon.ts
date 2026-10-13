import babelEslintParser from '@babel/eslint-parser';
import eslint from '@eslint/js';
import { defineConfig, globalIgnores } from 'eslint/config';
import eslintConfigPrettier from 'eslint-config-prettier';
// @ts-expect-error: Incorrect type
import eslintPluginEmberTemplateLint from 'eslint-plugin-ember/configs/template-lint-migration';
// @ts-expect-error: Incorrect type
import eslintPluginEmber from 'eslint-plugin-ember/recommended';
import eslintPluginImportX from 'eslint-plugin-import-x';
import eslintPluginN from 'eslint-plugin-n';
import eslintPluginPerfectionist from 'eslint-plugin-perfectionist';
import eslintPluginSimpleImportSort from 'eslint-plugin-simple-import-sort';
import globals from 'globals';
import tseslint from 'typescript-eslint';

import { customRules } from './custom-rules.js';

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
  globalIgnores(['declarations/', 'dist/', 'node_modules/', '.*/']),
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
  eslintPluginEmber.configs.base,
  eslintPluginEmber.configs.gjs,
  eslintPluginEmberTemplateLint,
  eslintPluginImportX.flatConfigs.recommended,
  eslintConfigPrettier,
  customRules.recommended,

  // Ember files
  {
    files: ['**/*.js'],
    languageOptions: {
      parser: babelEslintParser,
    },
  },
  {
    files: ['**/*.{gjs,js,mjs}'],
    languageOptions: {
      globals: globals.browser,
      parserOptions: parserOptionsJs,
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
      customRules.typescript,
    ],
    files: ['**/*.{gts,mts,ts}'],
    languageOptions: {
      globals: globals.browser,
      parser: eslintPluginEmber.parser,
      parserOptions: parserOptionsTs,
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
  {
    files: ['src/**/*.{gjs,gts,js,ts}'],
    rules: {
      'import-x/extensions': ['error', 'always', { ignorePackages: true }],
    },
  },

  // Configuration files
  {
    ...eslintPluginN.configs['flat/recommended-script'],
    files: [
      '**/*.cjs',
      '.prettierrc.js',
      '.stylelintrc.js',
      '.template-lintrc.js',
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
    files: ['*.{mjs,mts}'],
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
