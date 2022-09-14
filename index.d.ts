import type { SvelteComponentTyped } from 'svelte';
import type { SvelteIconProps } from './Icon.svelte';

declare module "svelte-icon" {

  export default class Icon extends SvelteComponentTyped<SvelteIconProps> {}
}
