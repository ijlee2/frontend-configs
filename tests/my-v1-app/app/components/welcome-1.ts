import templateOnlyComponent from '@ember/component/template-only';

interface Welcome1Signature {
  Args: {};
}

const Welcome1Component = templateOnlyComponent<Welcome1Signature>();

export default Welcome1Component;

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    'Welcome-1': typeof Welcome1Component;
    'welcome-1': typeof Welcome1Component;
  }
}
