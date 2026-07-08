import type Owner from '@ember/owner';
import Route from '@ember/routing/route';
import { type Registry as Services, service } from '@ember/service';

export default class ApplicationRoute extends Route {
  @service declare intl: Services['intl'];

  constructor(owner: Owner) {
    super(owner);
  }

  beforeModel(): void {
    this.setupIntl();
  }

  private setupIntl(): void {
    this.intl.setLocale(['en-us']);
  }
}
