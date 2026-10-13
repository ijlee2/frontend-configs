import type { ConfigObject } from 'eslint/config';

export const customRules = {
  recommended: {
    rules: {
      curly: 'error',
      'import-x/no-duplicates': 'error',
      'import-x/no-unresolved': 'off',
      'max-depth': ['error', 4],
      'perfectionist/sort-classes': [
        'error',
        {
          groups: [
            'property',
            'get-method',
            'set-method',
            'constructor',
            'method',
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
      '@typescript-eslint/no-import-type-side-effects': 'error',
      'perfectionist/sort-enums': ['error', { ignoreCase: false }],
      'perfectionist/sort-interfaces': ['error', { ignoreCase: false }],
      'perfectionist/sort-object-types': [
        'error',
        { groups: ['index-signature', 'unknown'], ignoreCase: false },
      ],
      'perfectionist/sort-union-types': ['error', { ignoreCase: false }],
    },
  } satisfies ConfigObject,
};
