import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

import type { OxlintConfig } from 'oxlint';

type EslintConfig = {
  rules?: OxlintConfig['rules'];
  [key: string]: unknown;
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

const rules = {};

const projectRoot = process.cwd();

const rulesFile = `export const pluginRules = ${JSON.stringify(rules, null, 2)} as const;`;

writeFileSync(join(projectRoot, 'src/plugin-rules.ts'), rulesFile, 'utf8');
