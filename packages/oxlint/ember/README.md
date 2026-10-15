# @ijlee2-frontend-configs/oxlint-ember

The package provides a configuration for [`oxlint`](https://oxc.rs/docs/guide/usage/linter/rules.html) (Ember projects).

1. [Usage](#usage)
    - [Customization](#customization)
1. [License](#license)


## Usage

Install these packages as development dependencies:

- `@ijlee2-frontend-configs/oxlint-ember`
- `oxlint`
- `oxlint-tsgolint` (optional)

Afterwards, create the file `oxlint.config.{mjs,mts}`.

```js
// For a v1 app (classic, or Embroider + Webpack)
export { default } from '@ijlee2-frontend-configs/oxlint-ember/v1-app';

// For a v2 app (Embroider + Vite)
export { default } from '@ijlee2-frontend-configs/oxlint-ember/v2-app';

// For a v1 addon
export { default } from '@ijlee2-frontend-configs/oxlint-ember/v1-addon';

// For a v2 addon
export { default } from '@ijlee2-frontend-configs/oxlint-ember/v2-addon';
```


### Customization

Import the configuration, then export the modified object. See [`oxlint` documentation](https://oxc.rs/docs/guide/usage/linter/config-file-reference.html) for more information.

```js
import baseConfiguration from '@ijlee2-frontend-configs/oxlint-ember/v2-app';

export default {
  ...baseConfiguration,
  overrides: [
    ...baseConfiguration.overrides,
    {
      files: ['**/*.{gts,ts}'],
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
