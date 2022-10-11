import { sveltekit } from '@sveltejs/kit/vite';
// import wasm from 'vite-plugin-wasm';
// import topLevelAwait from 'vite-plugin-top-level-await';
import { copy } from 'vite-plugin-copy';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [
		sveltekit(),
		// wasm(),
		// topLevelAwait(),
		copy([{ src: './node_modules/@resvg/resvg-wasm/index_bg.wasm', dest: 'static/wasm/' }])
	]
};

export default config;
