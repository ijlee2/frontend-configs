import babelEslintParser from '@babel/eslint-parser';
import eslint from '@eslint/js';
import eslintPluginEmber from 'eslint-plugin-ember/recommended';
import eslintPluginImportX from 'eslint-plugin-import-x';
import eslintPluginN from 'eslint-plugin-n';
import eslintPluginPrettier from 'eslint-plugin-prettier/recommended';
import eslintPluginQunit from 'eslint-plugin-qunit';
import eslintPluginSimpleImportSort from 'eslint-plugin-simple-import-sort';
import eslintPluginSortClassMembers from 'eslint-plugin-sort-class-members';
import eslintPluginTypescriptSortKeys from 'eslint-plugin-typescript-sort-keys';
import globals from 'globals';
import tseslint from 'typescript-eslint';

const parserOptionsJs = {
  babelOptions: {
    plugins: [
      [
        '@babel/plugin-proposal-decorators',
        {
          decoratorsBeforeExport: true,
        },
      ],
    ],
  },
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
    ignores: ['blueprints/', 'dist/', 'node_modules/', '.*/'],
  },
  {
    linterOptions: {
      reportUnusedDisableDirectives: 'error',
    },
  },

  eslint.configs.recommended,
  eslintPluginEmber.configs.base,
  eslintPluginEmber.configs.gjs,
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
            'ember-actions': [
              {
                groupByDecorator: 'action',
                sort: 'alphabetical',
                type: 'method',
              },
            ],
            'ember-data-decorators': [
              {
                groupByDecorator: 'belongsTo',
                sort: 'alphabetical',
                type: 'property',
              },
              {
                groupByDecorator: 'hasMany',
                sort: 'alphabetical',
                type: 'property',
              },
              {
                groupByDecorator: 'attr',
                sort: 'alphabetical',
                type: 'property',
              },
            ],
            'ember-controller-model': [{ name: 'model', type: 'property' }],
            'ember-controller-queryParams': [
              { name: 'queryParams', type: 'property' },
            ],
            'ember-services': [
              {
                groupByDecorator: 'service',
                sort: 'alphabetical',
                type: 'property',
              },
            ],
            'ember-tracked-properties': [
              {
                groupByDecorator: 'tracked',
                sort: 'alphabetical',
                type: 'property',
              },
            ],
            getters: [{ kind: 'get', sort: 'alphabetical' }],
            methods: [{ sort: 'alphabetical', type: 'method' }],
            properties: [{ sort: 'alphabetical', type: 'property' }],
            setters: [{ kind: 'set', sort: 'alphabetical' }],
          },
          order: [
            '[ember-data-decorators]',
            '[ember-services]',
            '[ember-controller-model]',
            '[ember-controller-queryParams]',
            '[properties]',
            '[ember-tracked-properties]',
            '[getters]',
            '[setters]',
            'constructor',
            '[methods]',
            '[ember-actions]',
          ],
        },
      ],
    },
  },

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
      parser: eslintPluginEmber.parser,
      parserOptions: parserOptionsTs,
    },
    plugins: {
      'typescript-sort-keys': eslintPluginTypescriptSortKeys,
    },
    rules: {
      '@typescript-eslint/array-type': 'error',
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/method-signature-style': ['error', 'property'],
      '@typescript-eslint/no-empty-object-type': [
        'error',
        {
          allowInterfaces: 'always',
          allowObjectTypes: 'always',
        },
      ],
      '@typescript-eslint/no-import-type-side-effects': 'error',
      'typescript-sort-keys/interface': 'error',
      'typescript-sort-keys/string-enum': 'error',
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
    files: ['tests/**/*-test.{gjs,gts,js,ts}'],
    plugins: {
      qunit: eslintPluginQunit,
    },
  },

  // Configuration files
  {
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
