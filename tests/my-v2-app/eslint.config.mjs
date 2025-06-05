import baseConfiguration from '@ijlee2-frontend-configs/eslint-config-ember/v2-app';

export default [
  ...baseConfiguration,
  // Cannot find module '/node_modules/.pnpm/@embroider+macros@1.18.0_@glint+template@1.5.2/node_modules/@embroider/macros/src/glimmer/ast-transform.js'
  {
    ignores: [
      'config/environment.js',
      'config/targets.js',
      'ember-cli-build.js',
    ],
  },
];
