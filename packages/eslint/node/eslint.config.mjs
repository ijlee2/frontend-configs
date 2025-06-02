import baseConfiguration from './javascript/index.mjs';

export default [
  ...baseConfiguration,
  {
    files: ['**/index.mjs'],
    rules: {
      'import-x/no-named-as-default-member': 'off',
    },
  },
];
