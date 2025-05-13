'use strict';

module.exports = {
  plugins: ['ember-template-lint-plugin-prettier'],
  extends: ['recommended', 'ember-template-lint-plugin-prettier:recommended'],
  rules: {
    'sort-invocations': true,
  },
  overrides: [
    {
      files: ['**/*.{gjs,gts}'],
      rules: {
        'no-implicit-this': 'off',
        prettier: 'off',
      },
    },
    {
      files: ['tests/**/*-test.{js,ts}'],
      rules: {
        prettier: 'off',
      },
    },
  ],
};
