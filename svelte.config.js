import preprocess from 'svelte-preprocess';
// import adapter from '@sveltejs/adapter-netlify';
import { mdsvex } from 'mdsvex';
import svelteMdsvexImage from './plugins/svelteMdsvexImage.js';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess(),
		mdsvex({
			extensions: ['.md'],
			remarkPlugins: [svelteMdsvexImage]
		})
	],

	kit: {
		// adapter: adapter(),
		// hydrate the <div id="svelte"> element in src/app.html
		// target: '#svelte'
		prerender: {
			crawl: true,
			enabled: true,
			onError: 'continue',
			entries: ['*']
		}
	}
};

export default config;
