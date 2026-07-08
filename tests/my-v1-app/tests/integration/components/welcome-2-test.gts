import { render } from '@ember/test-helpers';
import { setupIntl } from 'ember-intl/test-support';
import Welcome2 from 'my-v1-app/components/welcome-2';
import { setupRenderingTest } from 'my-v1-app/tests/helpers';
import { module, test } from 'qunit';

module('Integration | Component | welcome-2', function (hooks) {
  setupRenderingTest(hooks);
  setupIntl(hooks, 'en-us');

  test('it renders', async function (assert) {
    await render(<template><Welcome2 /></template>);

    assert.dom().hasText('Visit /tests to run tests.');
  });
});
