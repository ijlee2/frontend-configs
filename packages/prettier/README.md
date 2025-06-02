# @ijlee2-frontend-configs/prettier

The package provides a configuration for [`prettier`](https://prettier.io/docs/options.html).

1. [Usage](#usage)
    - [Customization](#customization)
1. [License](#license)


## Usage

Install these packages as development dependencies:

- `@ijlee2-frontend-configs/prettier`
- `prettier`

Afterwards, create the file `prettier.config.mjs`.

```js
// For an Ember project
export { default } from '@ijlee2-frontend-configs/prettier/ember';

// For a Node project
export { default } from '@ijlee2-frontend-configs/prettier/node';
```


### Customization

Import the configuration, then export the modified object. See [`prettier` documentation](https://prettier.io/docs/sharing-configurations#extending-a-sharable-config) for more information.

```js
import baseConfiguration from '@ijlee2-frontend-configs/prettier/ember';

export default {
  ...baseConfiguration,
  overrides: [
    ...baseConfiguration.overrides,
    {
      files: ['*.scss'],
      options: {
        singleQuote: false,
      },
    },
  ],
};
```


## License

This project is licensed under the [MIT License](./LICENSE.md).
