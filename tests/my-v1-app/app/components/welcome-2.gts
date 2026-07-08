import type { TOC } from '@ember/component/template-only';
import { t } from 'ember-intl';

import styles from './welcome-2.css';

interface Welcome2Signature {
  Args: {};
}

const Welcome2Component: TOC<Welcome2Signature> = <template>
  <p>
    {{t
      "components.welcome-2.description-1"
      classForLink=styles.link
      htmlSafe=true
    }}
  </p>
</template>;

export default Welcome2Component;
