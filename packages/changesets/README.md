# @ijlee2-frontend-configs/changesets

The package provides a [`changesets`](https://github.com/changesets/changesets/) formatter for GitHub repos.

1. [Usage](#usage)
1. [License](#license)


## Usage

Install these packages as development dependencies:

- `@changesets/cli`
- `@ijlee2-frontend-configs/changesets`

Afterwards, create the file `.changeset/formatter.mjs`.

```js
import getFormatter from '@ijlee2-frontend-configs/changesets';

export default getFormatter('<your-github-handle>/<your-repo-name>');
```

Then, set the `changelog` key in your [`.changeset/config.json`. See [`changesets` documentation](https://changesets.dev/guide/config) for more information.

```json
{
  "access": "public",
  "changelog": "./formatter.mjs",
  "privatePackages": {
    "tag": false,
    "version": true
  }
}
```


## Contributing

See the [Contributing](../../CONTRIBUTING.md) guide for details.


## License

This project is licensed under the [MIT License](./LICENSE.md).
