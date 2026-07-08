export const customRules = {
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
};
