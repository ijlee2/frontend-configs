import type { OxlintConfig } from 'oxlint';

export const customRules = {
  recommended: {
    'eslint/curly': 'error',
    'eslint/max-depth': ['error', 4],
    'import/no-duplicates': 'error',
    // 'import/no-unresolved': 'off',
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
  } satisfies OxlintConfig['rules'],

  typescript: {
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
    'typescript/no-import-type-side-effects': 'error',
    'typescript/require-array-sort-compare': 'off',
  } satisfies OxlintConfig['rules'],
};
