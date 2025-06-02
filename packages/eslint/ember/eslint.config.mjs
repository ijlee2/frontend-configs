import baseConfiguration from '@ijlee2-frontend-configs/eslint-config-node/javascript';

export default [
  ...baseConfiguration,
  {
    files: ['**/index.mjs'],
    rules: {
      'import-x/no-named-as-default-member': 'off',
    },
  },
];
