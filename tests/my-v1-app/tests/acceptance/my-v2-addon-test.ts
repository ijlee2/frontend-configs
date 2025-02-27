import { currentURL, visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'my-v1-app/tests/helpers';
import { module, test } from 'qunit';

module('Acceptance | my-v2-addon', function (hooks) {
  setupApplicationTest(hooks);

  test('We can visit the page', async function (assert) {
    await visit('/my-v2-addon');

    assert.strictEqual(currentURL(), '/my-v2-addon');
  });
});
