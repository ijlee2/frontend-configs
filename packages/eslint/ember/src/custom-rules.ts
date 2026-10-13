import type { ConfigObject } from 'eslint/config';

export const customRules = {
  recommended: {
    rules: {
      curly: 'error',
      'ember/template-require-input-type': 'error',
      'ember/template-sort-invocations': 'error',
      'import-x/no-duplicates': 'error',
      'import-x/no-unresolved': 'off',
      'max-depth': ['error', 4],
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
    },
  } satisfies ConfigObject,

  typescript: {
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
      'perfectionist/sort-enums': ['error', { ignoreCase: false }],
      'perfectionist/sort-interfaces': ['error', { ignoreCase: false }],
      'perfectionist/sort-union-types': ['error', { ignoreCase: false }],
    },
  } satisfies ConfigObject,
};
