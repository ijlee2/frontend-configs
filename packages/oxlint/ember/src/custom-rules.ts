import type { OxlintConfig } from 'oxlint';

export const customRules = {
  recommended: {
    'ember/template-require-input-type': 'error',
    'ember/template-sort-invocations': 'error',
    'eslint/curly': 'error',
    'eslint/max-depth': ['error', 4],
    'import/no-duplicates': 'error',
    // 'import/no-unresolved': 'off',
    'perfectionist/sort-classes': [
      'error',
      {
        customGroups: [
          {
            decoratorNamePattern: 'action',
            groupName: 'ember-action',
            selector: 'method',
          },
          {
            elementNamePattern: 'model',
            groupName: 'ember-controller-model',
            selector: 'property',
          },
          {
            elementNamePattern: 'queryParams',
            groupName: 'ember-controller-queryParams',
            selector: 'property',
          },
          {
            decoratorNamePattern: 'attr',
            groupName: 'ember-data-model-attr',
            selector: 'property',
          },
          {
            decoratorNamePattern: 'belongsTo',
            groupName: 'ember-data-model-belongsTo',
            selector: 'property',
          },
          {
            decoratorNamePattern: 'hasMany',
            groupName: 'ember-data-model-hasMany',
            selector: 'property',
          },
          {
            elementNamePattern: 'Type',
            groupName: 'ember-data-model-type',
            selector: 'property',
          },
          {
            decoratorNamePattern: 'service',
            groupName: 'ember-service',
            selector: 'property',
          },
          {
            decoratorNamePattern: 'tracked',
            groupName: 'ember-tracked-property',
            selector: 'property',
          },
        ],
        groups: [
          'ember-data-model-type',
          'ember-data-model-belongsTo',
          'ember-data-model-hasMany',
          'ember-data-model-attr',
          'ember-controller-model',
          'ember-controller-queryParams',
          'ember-service',
          'ember-tracked-property',
          'property',
          'get-method',
          'set-method',
          'constructor',
          'method',
          'ember-action',
        ],
        type: 'alphabetical',
      },
    ],
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
  } satisfies OxlintConfig['rules'],

  typescript: {
    'ember/no-unused-services': 'error',
    'perfectionist/sort-enums': ['error', { ignoreCase: false }],
    'perfectionist/sort-interfaces': ['error', { ignoreCase: false }],
    'perfectionist/sort-object-types': [
      'error',
      { groups: ['index-signature', 'unknown'], ignoreCase: false },
    ],
    'perfectionist/sort-union-types': ['error', { ignoreCase: false }],
    'typescript/array-type': 'error',
    'typescript/consistent-type-imports': 'error',
    'typescript/explicit-function-return-type': 'error',
    'typescript/method-signature-style': ['error', 'property'],
    'typescript/no-empty-object-type': [
      'error',
      {
        allowInterfaces: 'always',
        allowObjectTypes: 'always',
      },
    ],
    'typescript/no-import-type-side-effects': 'error',
    'typescript/require-array-sort-compare': 'off',
  } satisfies OxlintConfig['rules'],
};
