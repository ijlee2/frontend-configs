import { type Registry as Services, service } from '@ember/service';
import Model, {
  type AsyncHasMany,
  attr,
  belongsTo,
  hasMany,
  // @ts-expect-error: Dependency not installed
} from '@ember-data/model';
import { cached } from '@glimmer/tracking';
// @ts-expect-error: Dependency not installed
import type { Type } from '@warp-drive/core-types/symbols';

export default class User extends Model {
  declare [Type]: 'user';

  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @belongsTo('user', { async: false, inverse: null })
  declare bestFriend: null | User;

  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @hasMany('user', { async: true, inverse: null })
  declare friends: AsyncHasMany<User>;

  @attr declare firstName: string;

  @attr declare lastName: string;

  @service declare intl: Services['intl'];

  @cached get fullName(): string {
    return this.firstName + ' ' + this.lastName;
  }

  get greeting(): string {
    if (this.intl.primaryLocale === 'de-de') {
      return `Hallo, ${this.firstName}!`;
    }

    return `Hello, ${this.firstName}!`;
  }

  sayHi(): void {
    alert(this.greeting);
  }
}
