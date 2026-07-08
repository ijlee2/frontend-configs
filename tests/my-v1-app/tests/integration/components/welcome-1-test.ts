import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { setupIntl } from 'ember-intl/test-support';
import { setupRenderingTest } from 'my-v1-app/tests/helpers';
import { module, test } from 'qunit';

module('Integration | Component | welcome-1', function (hooks) {
  setupRenderingTest(hooks);
  setupIntl(hooks, 'en-us');

  test('it renders', async function (assert) {
    await render(
      hbs`
        <Welcome-1 />
      `,
    );

    assert
      .dom()
      .hasText(
        'Thanks for trying out create-v2-addon-repo. You can use my-v1-app to document your packages.',
      );
  });
});
