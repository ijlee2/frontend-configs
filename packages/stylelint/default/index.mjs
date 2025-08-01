export default {
  extends: ['stylelint-config-standard'],
  plugins: ['stylelint-order'],
  rules: {
    'at-rule-empty-line-before': [
      'always',
      {
        except: ['first-nested'],
        ignore: ['after-comment'],
      },
    ],

    'declaration-block-no-redundant-longhand-properties': [
      true,
      {
        ignoreShorthands: ['gap', 'grid-template'],
      },
    ],

    'order/properties-order': [
      [],
      {
        unspecified: 'bottomAlphabetical',
      },
    ],
  },
};
