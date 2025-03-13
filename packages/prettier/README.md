# @ijlee2-frontend-configs/prettier

The package provides a configuration for [`prettier`](https://prettier.io/docs/options.html).

1. [Usage](#usage)
    - [Customization](#customization)
1. [License](#license)


## Usage

Install these packages as development dependencies:

- `@ijlee2-frontend-configs/prettier`
- `prettier`

Afterwards, create the file `.prettierrc.mjs` or `prettier.config.mjs`.

```js
export { default } from '@ijlee2-frontend-configs/prettier';
```

<details>

<summary>Use CommonJS?</summary>

Create the file `.prettierrc.cjs` or `prettier.config.cjs` instead.

```js
'use strict';

module.exports = require('@ijlee2-frontend-configs/prettier');
```

</details>


### Customization

Import the configuration, then export the modified object. See [`prettier` documentation](https://prettier.io/docs/sharing-configurations#extending-a-sharable-config) for more information.

```js
import baseConfiguration from '@ijlee2-frontend-configs/prettier';

export default {
  ...baseConfiguration,
  overrides: [
    ...baseConfiguration.overrides,
    {
      files: '*.hbs',
      options: {
        printWidth: 80,
        singleQuote: false,
      },
    },
  ],
};
```


## License

This project is licensed under the [MIT License](./LICENSE.md).
