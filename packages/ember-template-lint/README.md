# @ijlee2-frontend-configs/ember-template-lint

The package provides a configuration for [`ember-template-lint`](https://github.com/ember-template-lint/ember-template-lint#rules).

1. [Usage](#usage)
    - [Customization](#customization)
1. [License](#license)


## Usage

Install these packages as development dependencies:

- `@ijlee2-frontend-configs/ember-template-lint`
- `ember-template-lint`
- `prettier`

Afterwards, create the file `.template-lintrc.cjs`.

```js
'use strict';

module.exports = {
  plugins: ['@ijlee2-frontend-configs/ember-template-lint'],
  extends: ['@ijlee2-frontend-configs/ember-template-lint:recommended'],
};
```


### Customization

Use [`overrides`](https://github.com/ember-template-lint/ember-template-lint/blob/master/docs/configuration.md#configuration-properties) to change rules.

```js
'use strict';

module.exports = {
  plugins: ['@ijlee2-frontend-configs/ember-template-lint'],
  extends: ['@ijlee2-frontend-configs/ember-template-lint:recommended'],
  overrides: [
    {
      files: ['tests/**/*-test.{js,ts}'],
      rules: {
        prettier: true,
      },
    },
  ],
};
```


## License

This project is licensed under the [MIT License](../../LICENSE.md).
