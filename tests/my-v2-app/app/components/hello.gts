import type { TOC } from '@ember/component/template-only';
import { local } from 'embroider-css-modules';

import styles from './hello.module.css';

interface HelloSignature {
  Args: {
    name: string;
  };
}

const Hello: TOC<HelloSignature> = <template>
  <div class={{local styles "message" "emphasize"}} data-test-hello>
    Hello
    {{@name}}!
  </div>
</template>;

export default Hello;
