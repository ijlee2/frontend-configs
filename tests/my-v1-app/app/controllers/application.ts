import Controller from '@ember/controller';
import { action } from '@ember/object';
import { type Registry as Services, service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

import styles from './application.css';

type Locale = 'de-de' | 'en-us';

type Model = {};

export default class ApplicationController extends Controller {
  model: Model | null = null;

  queryParams = ['locale'];

  @service declare intl: Services['intl'];

  @tracked locale: Locale | null = null;

  styles = styles;

  get todaysDate(): string {
    if (this.intl.primaryLocale === 'de-de') {
      return '30.06.2025';
    }

    return '06/30/2025';
  }

  @action doSomething(): void {
    // TODO
  }

  @action logTodaysDate(): void {
    this.log(this.todaysDate);
  }

  // eslint-disable-next-line sort-class-members/sort-class-members
  private log(message: string): void {
    console.log(message);
  }
}
