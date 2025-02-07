# @ijlee2-frontend-configs/eslint-config-ember

The package provides a configuration for [`eslint`](https://eslint.org/docs/latest/rules/) (Ember projects).

1. [Usage](#usage)
    - [Customization](#customization)
1. [License](#license)


## Usage

Install these packages as development dependencies:

- `@ijlee2-frontend-configs/eslint-config-ember`
- `eslint`
- `prettier`
- `typescript` (optional)

Afterwards, create the file `eslint.config.mjs`.

```js
// For an app
export { default } from '@ijlee2-frontend-configs/eslint-config-ember/app';

// For a v1 addon
export { default } from '@ijlee2-frontend-configs/eslint-config-ember/v1-addon';

// For a v2 addon
export { default } from '@ijlee2-frontend-configs/eslint-config-ember/v2-addon';
```


### Customization

Import the configuration, then export the modified object. See [`eslint` documentation](https://eslint.org/docs/latest/use/configure/configuration-files#configuration-objects) for more information.

```js
import baseConfiguration from '@ijlee2-frontend-configs/eslint-config-ember/app';

export default [
  ...baseConfiguration,
  {
    files: ['**/*.{gts,ts}'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
];
```


## License

This project is licensed under the [MIT License](../../../LICENSE.md).
