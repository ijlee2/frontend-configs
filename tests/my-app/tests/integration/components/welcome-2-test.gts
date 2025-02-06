import { render } from '@ember/test-helpers';
import Welcome2 from 'my-app/components/welcome-2';
import { setupRenderingTest } from 'my-app/tests/helpers';
import { module, test } from 'qunit';

module('Integration | Component | welcome-2', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(<template><Welcome2 /></template>);

    assert.dom().hasText('Visit /tests to run tests.');
  });
});
