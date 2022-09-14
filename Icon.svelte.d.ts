import type { SvelteComponentTyped } from 'svelte';

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

export default class Icon extends SvelteComponentTyped<SvelteIconProps> {}

