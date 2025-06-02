export default {
  plugins: [
    'prettier-plugin-ember-hbs-tag',
    'prettier-plugin-ember-template-tag',
  ],
  overrides: [
    {
      files: ['*.css.d.ts'],
      options: {
        quoteProps: 'preserve',
      },
    },
    {
      files: ['*.{cjs,cts,js,mjs,mts,ts}'],
      options: {
        singleQuote: true,
      },
    },
    {
      files: ['tests/**/*-test.{js,ts}'],
      options: {
        parser: 'ember-hbs-tag',
        singleQuote: true,
        templateSingleQuote: false,
      },
    },
    {
      files: ['*.{gjs,gts}'],
      options: {
        singleQuote: true,
        templateSingleQuote: false,
      },
    },
    {
      files: ['*.hbs'],
      options: {
        printWidth: 64,
        singleQuote: false,
      },
    },
  ],
};
