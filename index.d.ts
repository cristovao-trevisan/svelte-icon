declare module "svelte-icon" {
  export interface SvelteIconProps {
    data: string
    viewBox?: string
    
    size?: string
    width?: string
    height?: string

    color?: string
    stroke?: string
    fill?: string

    [key: string]: unknown
  }

  export default class {
    $$prop_def: SvelteIconProps
  }
}
