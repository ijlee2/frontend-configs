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

    'declaration-block-no-duplicate-properties': [
      true,
      {
        ignoreProperties: ['composes'],
      },
    ],

    'declaration-block-no-redundant-longhand-properties': [
      true,
      {
        ignoreShorthands: ['gap', 'grid-template'],
      },
    ],

    'order/properties-order': [
      ['composes'],
      {
        unspecified: 'bottomAlphabetical',
      },
    ],

    'property-no-unknown': [
      true,
      {
        ignoreProperties: ['composes'],
      },
    ],

    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global'],
      },
    ],
  },
};
