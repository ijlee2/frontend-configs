import baseConfiguration from './dist/typescript.js';

export default [
  ...baseConfiguration,
  {
    files: ['src/**/*.ts'],
    rules: {
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      'import-x/no-named-as-default-member': 'off',
    },
  },
];
