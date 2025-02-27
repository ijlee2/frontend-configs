import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { setupRenderingTest } from 'my-v1-app/tests/helpers';
import { module, test } from 'qunit';

module('Integration | Component | welcome-1', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`<Welcome-1 />`);

    assert
      .dom()
      .hasText(
        'Thanks for trying out create-v2-addon-repo. You can use my-v1-app to document your packages.',
      );
  });
});
