'use strict';

module.exports = {
  name: '@ijlee2-frontend-configs/ember-template-lint',
  configurations: {
    recommended: {
      plugins: ['ember-template-lint-plugin-prettier'],
      extends: [
        'recommended',
        'ember-template-lint-plugin-prettier:recommended',
      ],
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
      rules: {
        'attribute-order': true,
      },
    },
  },
  rules: {},
};
