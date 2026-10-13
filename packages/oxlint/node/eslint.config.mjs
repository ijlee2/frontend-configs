import baseConfiguration from '@ijlee2-frontend-configs/eslint-config-node/typescript';

export default [
  ...baseConfiguration,
  {
    ignores: ['scripts/**/*.js'],
  },
  {
    files: ['scripts/extract-plugin-rules.ts'],
    rules: {
      'import-x/no-named-as-default-member': 'off',
    },
  },
];
