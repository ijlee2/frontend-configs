# @ijlee2-frontend-configs/eslint-config-node

The package provides a configuration for [`eslint`](https://eslint.org/docs/latest/rules/) (Node projects).

1. [Usage](#usage)
    - [Customization](#customization)
1. [License](#license)


## Usage

Install these packages as development dependencies:

- `@ijlee2-frontend-configs/eslint-config-node`
- `eslint`
- `prettier`
- `typescript` (optional)

Afterwards, create the file `eslint.config.mjs`.

```js
// For a JavaScript project
export { default } from '@ijlee2-frontend-configs/eslint-config-node/javascript';

// For a TypeScript project
export { default } from '@ijlee2-frontend-configs/eslint-config-node/typescript';
```


### Customization

Import the configuration, then export the modified object. See [`eslint` documentation](https://eslint.org/docs/latest/use/configure/configuration-files#configuration-objects) for more information.

```js
import baseConfiguration from '@ijlee2-frontend-configs/eslint-config-node/typescript';

export default [
  ...baseConfiguration,
  {
    files: ['**/*.ts'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
];
```


## License

This project is licensed under the [MIT License](../../../LICENSE.md).
