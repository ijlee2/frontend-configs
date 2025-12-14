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

Then, provide the relative path to this file in `.changeset/config.json`.

```json
{
  "$schema": "https://unpkg.com/@changesets/config/schema.json",
  "changelog": "./formatter.mjs",
  "commit": false,
  "fixed": [],
  "linked": [],
  "access": "public",
  "baseBranch": "main",
  "updateInternalDependencies": "patch",
  "ignore": []
}
```


## Contributing

See the [Contributing](../../CONTRIBUTING.md) guide for details.


## License

This project is licensed under the [MIT License](./LICENSE.md).
