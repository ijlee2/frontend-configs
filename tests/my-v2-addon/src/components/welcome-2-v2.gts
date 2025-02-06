import type { TOC } from '@ember/component/template-only';

import styles from './welcome-2-v2.css';

interface Welcome2V2Signature {
  Args: {};
}

const Welcome2V2Component: TOC<Welcome2V2Signature> = <template>
  <p>
    Visit
    <a class={{styles.link}} href="/tests?hidepassed&nolint">/tests</a>
    to run tests.
  </p>
</template>;

export default Welcome2V2Component;
