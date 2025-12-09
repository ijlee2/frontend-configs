import { getInfo } from '@changesets/get-github-info';

async function extractInformation({ changeset, repo }) {
  const { links: info } = await getInfo({
    commit: changeset.commit,
    repo,
  });

  const contributor = info.user ? `(${info.user})` : undefined;
  const link = info.pull ?? info.commit ?? undefined;
  const summary = (changeset.summary ?? '').split(/\r?\n/)[0].trim();

  return {
    contributor,
    link,
    summary,
  };
}

function getDependencyReleaseLine() {
  return () => '';
}

function getReleaseLine(repo) {
  return async (changeset) => {
    try {
      const { contributor, link, summary } = await extractInformation({
        changeset,
        repo,
      });

      const line = [link, summary, contributor].filter(Boolean).join(' ');

      return `- ${line}`;
    } catch (error) {
      console.error(`ERROR: getReleaseLine (${error.message})`);

      return '';
    }
  };
}

/**
 * Creates an object with format functions for changesets.
 *
 * @param repo
 *
 * A string identifier that consists of your GitHub handle and
 * the repo's name (separated by `/`).
 *
 * @returns
 *
 * A formatter object.
 *
 * @example
 *
 * ```ts
 * import getFormatter from '@ijlee2-frontend-configs/changesets';
 *
 * export default getFormatter('ijlee2/frontend-configs');
 * ```
 */
export default function getFormatter(repo) {
  return {
    getDependencyReleaseLine: getDependencyReleaseLine(),
    getReleaseLine: getReleaseLine(repo),
  };
}
