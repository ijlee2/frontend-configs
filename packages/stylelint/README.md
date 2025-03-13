# @ijlee2-frontend-configs/stylelint

The package provides a configuration for [`stylelint`](https://stylelint.io/user-guide/rules/).

1. [Usage](#usage)
    - [Customization](#customization)
1. [License](#license)


## Usage

Install these packages as development dependencies:

- `@ijlee2-frontend-configs/prettier`
- `@ijlee2-frontend-configs/stylelint`
- `prettier`
- `stylelint`

Afterwards, create the file `.stylelintrc.mjs`.

```js
// Default
export { default } from '@ijlee2-frontend-configs/stylelint';

// For CSS modules
export { default } from '@ijlee2-frontend-configs/stylelint/css-modules';
```

<details>

<summary>Use CommonJS?</summary>

Create the file `.stylelintrc.cjs`.

```js
'use strict';

module.exports = require('@ijlee2-frontend-configs/stylelint');
```

</details>


### Customization

Use [`extends`](https://stylelint.io/user-guide/configure/#extends) and `rules` to change rules.

```js
export default {
  extends: '@ijlee2-frontend-configs/stylelint',
  rules: {
    'max-nesting-depth': 0,
  },
};
```


## License

This project is licensed under the [MIT License](./LICENSE.md).
