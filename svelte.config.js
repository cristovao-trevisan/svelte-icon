import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

const dev = process.argv.includes('dev');

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
    paths: {
      base: dev ? '' : '/svelte-icon',
    },
		adapter: adapter({ pages: 'docs' })
	}
};

export default config;
