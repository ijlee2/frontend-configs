import type { IntlService } from 'ember-intl';

declare module '@ember/service' {
  interface Registry {
    intl: IntlService;
  }
}
