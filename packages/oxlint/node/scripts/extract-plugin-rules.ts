import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

import eslint from '@eslint/js';
import eslintPluginImportX from 'eslint-plugin-import-x';
import eslintPluginN from 'eslint-plugin-n';
import type { OxlintConfig } from 'oxlint';
import tseslint from 'typescript-eslint';

type EslintConfig = {
  [key: string]: unknown;
  rules?: OxlintConfig['rules'];
};

type Options = {
  namespace?: string;
  rulesToRemove?: string[];
};

function extractRules(
  eslintConfig: EslintConfig,
  options?: Options,
): OxlintConfig['rules'] {
  const { rules } = eslintConfig;

  if (rules === undefined) {
    throw new Error('rules not found');
  }

  if (options === undefined) {
    return rules;
  }

  const oxlintRules: OxlintConfig['rules'] = {};
  const rulesToRemove = new Set(options?.rulesToRemove ?? []);

  for (const [rule, ruleOptions] of Object.entries(rules)) {
    let ruleNew = rule;

    if (rulesToRemove.has(ruleNew)) {
      continue;
    }

    const { namespace } = options;

    if (namespace) {
      if (rule.includes('/')) {
        ruleNew = rule.replace(/^(.+\/)/, `${namespace}/`);
      } else {
        ruleNew = `${namespace}/${rule}`;
      }
    }

    oxlintRules[ruleNew] = ruleOptions;
  }

  return oxlintRules;
}

const rules = {
  eslint: {
    recommended: extractRules(eslint.configs.recommended, {
      namespace: 'eslint',
      rulesToRemove: ['no-dupe-args', 'no-octal'],
    }),
  },

  import: {
    // @ts-expect-error: Incorrect type
    recommended: extractRules(eslintPluginImportX.flatConfigs.recommended, {
      namespace: 'import',
      rulesToRemove: ['import-x/no-unresolved'],
    }),
    // @ts-expect-error: Incorrect type
    typescript: extractRules(eslintPluginImportX.flatConfigs.typescript, {
      namespace: 'import',
      rulesToRemove: ['import-x/no-unresolved'],
    }),
  },

  node: {
    // @ts-expect-error: Incorrect type
    cjs: extractRules(eslintPluginN.configs['flat/recommended-script'], {
      namespace: 'node',
      rulesToRemove: [
        'n/hashbang',
        'n/no-deprecated-api',
        'n/no-extraneous-import',
        'n/no-extraneous-require',
        'n/no-missing-import',
        'n/no-missing-require',
        'n/no-process-exit',
        'n/no-unpublished-import',
        'n/no-unpublished-require',
        'n/no-unsupported-features/es-builtins',
        'n/no-unsupported-features/es-syntax',
        'n/no-unsupported-features/node-builtins',
        'n/process-exit-as-throw',
      ],
    }),
    // @ts-expect-error: Incorrect type
    mjs: extractRules(eslintPluginN.configs['flat/recommended-module'], {
      namespace: 'node',
      rulesToRemove: [
        'n/hashbang',
        'n/no-deprecated-api',
        'n/no-extraneous-import',
        'n/no-extraneous-require',
        'n/no-missing-import',
        'n/no-missing-require',
        'n/no-process-exit',
        'n/no-unpublished-import',
        'n/no-unpublished-require',
        'n/no-unsupported-features/es-builtins',
        'n/no-unsupported-features/es-syntax',
        'n/no-unsupported-features/node-builtins',
        'n/process-exit-as-throw',
      ],
    }),
  },

  // @ts-expect-error: Incorrect type
  typescript: extractRules(tseslint.configs.recommendedTypeChecked[2]),
};

const projectRoot = process.cwd();

const rulesFile = `export const pluginRules = ${JSON.stringify(rules, null, 2)} as const;`;

writeFileSync(join(projectRoot, 'src/plugin-rules.ts'), rulesFile, 'utf8');
