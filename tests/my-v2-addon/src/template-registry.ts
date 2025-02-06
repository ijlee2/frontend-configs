import type Welcome1V2Component from './components/welcome-1-v2.ts';
import type Welcome2V2Component from './components/welcome-2-v2.gts';

export default interface MyV2AddonRegistry {
  'Welcome-1-V2': typeof Welcome1V2Component;
  'Welcome-2-V2': typeof Welcome2V2Component;
  'welcome-1-v2': typeof Welcome1V2Component;
  'welcome-2-v2': typeof Welcome2V2Component;
}
