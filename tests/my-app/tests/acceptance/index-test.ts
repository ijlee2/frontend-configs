import { currentURL, visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'my-app/tests/helpers';
import { module, test } from 'qunit';

module('Acceptance | index', function (hooks) {
  setupApplicationTest(hooks);

  test('We can visit the page', async function (assert) {
    await visit('/');

    assert.strictEqual(currentURL(), '/');
  });
});
