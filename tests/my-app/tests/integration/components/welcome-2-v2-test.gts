import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'my-app/tests/helpers';
import { Welcome2V2 } from 'my-v2-addon';
import { module, test } from 'qunit';

module('Integration | Component | welcome-2-v2', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(<template><Welcome2V2 /></template>);

    assert.dom().hasText('Visit /tests to run tests.');
  });
});
