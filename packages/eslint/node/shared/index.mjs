export const customRules = {
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
          getters: [
            {
              kind: 'get',
              sort: 'alphabetical',
              type: 'method',
            },
          ],
          methods: [
            {
              sort: 'alphabetical',
              type: 'method',
            },
          ],
          properties: [
            {
              sort: 'alphabetical',
              type: 'property',
            },
          ],
          setters: [
            {
              kind: 'set',
              sort: 'alphabetical',
              type: 'method',
            },
          ],
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
};
