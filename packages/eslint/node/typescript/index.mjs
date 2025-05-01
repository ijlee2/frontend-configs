import babelEslintParser from '@babel/eslint-parser';
import eslint from '@eslint/js';
import eslintPluginImportX from 'eslint-plugin-import-x';
import eslintPluginN from 'eslint-plugin-n';
import eslintPluginPrettier from 'eslint-plugin-prettier/recommended';
import eslintPluginSimpleImportSort from 'eslint-plugin-simple-import-sort';
import eslintPluginSortClassMembers from 'eslint-plugin-sort-class-members';
import eslintPluginTypescriptSortKeys from 'eslint-plugin-typescript-sort-keys';
import globals from 'globals';
import tseslint from 'typescript-eslint';

const parserOptionsJs = {
  ecmaFeatures: {
    modules: true,
  },
  ecmaVersion: 'latest',
  requireConfigFile: false,
};

const parserOptionsTs = {
  projectService: true,
  tsconfigRootDir: import.meta.dirname,
};

export default tseslint.config(
  {
    ignores: ['dist/', 'node_modules/', '.*/'],
  },
  {
    linterOptions: {
      reportUnusedDisableDirectives: 'error',
    },
  },

  eslint.configs.recommended,
  eslintPluginImportX.flatConfigs.recommended,
  eslintPluginSortClassMembers.configs['flat/recommended'],
  eslintPluginPrettier,
  {
    plugins: {
      'simple-import-sort': eslintPluginSimpleImportSort,
    },
    rules: {
      curly: 'error',
      'import-x/no-duplicates': 'error',
      'import-x/no-unresolved': 'off',
      'max-depth': ['error', 4],
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      'sort-class-members/sort-class-members': [
        2,
        {
          groups: {
            getters: [{ kind: 'get', sort: 'alphabetical' }],
            methods: [{ sort: 'alphabetical', type: 'method' }],
            properties: [{ sort: 'alphabetical', type: 'property' }],
            setters: [{ kind: 'set', sort: 'alphabetical' }],
          },
          order: [
            '[properties]',
            '[getters]',
            '[setters]',
            'constructor',
            '[methods]',
          ],
        },
      ],
    },
  },

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
    plugins: {
      'typescript-sort-keys': eslintPluginTypescriptSortKeys,
    },
    rules: {
      '@typescript-eslint/array-type': 'error',
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/method-signature-style': ['error', 'property'],
      '@typescript-eslint/no-import-type-side-effects': 'error',
      'typescript-sort-keys/interface': 'error',
      'typescript-sort-keys/string-enum': 'error',
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
);
