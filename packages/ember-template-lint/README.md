# @ijlee2-frontend-configs/ember-template-lint

The package provides a configuration for [`ember-template-lint`](https://github.com/ember-template-lint/ember-template-lint#rules).

1. [Usage](#usage)
    - [Customization](#customization)
1. [License](#license)


## Usage

Install these packages as development dependencies:

- `@ijlee2-frontend-configs/ember-template-lint`
- `ember-template-lint`

Afterwards, create the file `.template-lintrc.cjs`.

```js
'use strict';

module.exports = require('@ijlee2-frontend-configs/ember-template-lint');
```


### Customization

Import the configuration, then export the modified object. See [`ember-template-lint` documentation](https://github.com/ember-template-lint/ember-template-lint?tab=readme-ov-file#rules) for more information.

```js
'use strict';

const baseConfiguration = require('@ijlee2-frontend-configs/ember-template-lint');

module.exports = {
  ...baseConfiguration,
  rules: {
    ...baseConfiguration.rules,
    'no-bare-strings': true,
  },
};
```


## Contributing

See the [Contributing](../../CONTRIBUTING.md) guide for details.


## License

This project is licensed under the [MIT License](./LICENSE.md).
