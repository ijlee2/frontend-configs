# @ijlee2-frontend-configs/typescript

The package provides a configuration for [`typescript`](https://www.typescriptlang.org/tsconfig/).

1. [Usage](#usage)
    - [Customization](#customization)
1. [License](#license)


## Usage

Install these packages as development dependencies:

- `@ijlee2-frontend-configs/typescript`
- `typescript`

Afterwards, create the file `tsconfig.json`.

```json5
// For an Ember project
{
  "extends": "@ijlee2-frontend-configs/typescript/ember"
}

// For a Node project
{
  "extends": "@ijlee2-frontend-configs/typescript/node24"
}
```


### Customization

See [`typescript` documentation](https://www.typescriptlang.org/tsconfig/) for more information.

```json5
{
  "extends": "@ijlee2-frontend-configs/typescript/ember"
  "compilerOptions": {
    // ...
  },
  "include": [
    // ...
  ]
}
```


## Contributing

See the [Contributing](../../CONTRIBUTING.md) guide for details.


## License

This project is licensed under the [MIT License](./LICENSE.md).
