import sortClassMembers from './sort-class-members.mjs';

export default {
  rules: {
    curly: 'error',
    'import-x/no-duplicates': 'error',
    'import-x/no-unresolved': 'off',
    'max-depth': ['error', 4],
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'sort-class-members/sort-class-members': sortClassMembers,
  },
};
