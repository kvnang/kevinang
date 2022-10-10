import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-vercel';
import { mdsvex } from 'mdsvex';
import svelteMdsvexImage from './plugins/svelteMdsvexImage.js';
import path from 'path';
import { fileURLToPath } from 'url';
import rehypeExternalLinks from 'rehype-external-links';

const filePath = path.dirname(fileURLToPath(import.meta.url));
const sassPath = `${filePath}/src/styles`;

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			scss: {
				prependData: `@import '${sassPath}/_global-imports.scss';`
			}
		}),
		mdsvex({
			extensions: ['.md'],
			remarkPlugins: [svelteMdsvexImage],
			rehypePlugins: [
				[
					rehypeExternalLinks,
					{
						target: (node) => {
							if (node.tagName === 'a') {
								const href = node.properties.href;
								if (href.startsWith('/')) {
									return '_self';
								}

								return '_blank';
							}
						}
					}
				]
			]
		})
	],

	kit: {
		adapter: adapter({ edge: true }),
		inlineStyleThreshold: 1024,
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
