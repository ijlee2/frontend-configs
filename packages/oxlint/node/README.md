# @ijlee2-frontend-configs/oxlint-node

The package provides a configuration for [`oxlint`](https://oxc.rs/docs/guide/usage/linter/rules.html) (Node projects).

1. [Usage](#usage)
    - [Customization](#customization)
1. [License](#license)


## Usage

Install these packages as development dependencies:

- `@ijlee2-frontend-configs/oxlint-node`
- `oxlint`
- `oxlint-tsgolint` (optional)

Afterwards, create the file `oxlint.config.mjs`.

```js
// For a JavaScript project
export { default } from '@ijlee2-frontend-configs/oxlint-node/javascript';

// For a TypeScript project
export { default } from '@ijlee2-frontend-configs/oxlint-node/typescript';
```


### Customization

Import the configuration, then export the modified object. See [`oxlint` documentation](https://oxc.rs/docs/guide/usage/linter/config-file-reference.html) for more information.

```js
import baseConfiguration from '@ijlee2-frontend-configs/oxlint-node/typescript';

export default {
  ...baseConfiguration,
  overrides: [
    ...baseConfiguration.overrides,
    {
      files: ['**/*.ts'],
      plugins: ['typescript'],
      rules: {
        'typescript/no-explicit-any': 'off',
      },
    },
  ],
};
```


## Contributing

See the [Contributing](../../../CONTRIBUTING.md) guide for details.


## License

This project is licensed under the [MIT License](./LICENSE.md).
