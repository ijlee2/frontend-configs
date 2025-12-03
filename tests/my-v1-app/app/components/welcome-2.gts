import type { TOC } from '@ember/component/template-only';

import styles from './welcome-2.css';

interface Welcome2Signature {
  Args: {};
}

const Welcome2Component: TOC<Welcome2Signature> = <template>
  <p>
    Visit
    <a class={{styles.link}} href="/tests?hidepassed&nolint">/tests</a>
    to run tests.
  </p>
</template>;

export default Welcome2Component;
