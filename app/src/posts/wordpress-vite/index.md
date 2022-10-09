---
title: Developing WordPress Theme with Vite
date: 2022-09-12
status: draft
---

With the rise of the latest-and-greatest frameworks such as Next.js and SvelteKit, one may understandably despise developing in WordPress — not that it is obselete or inherently flawed, but the current state of WordPress developer experience (DX) is poor.

I especially miss the hot-reload feature that is a standard with the other frameworks. Yes, there have been examples on how to achieve this with Webpack + Browsersync, but they seem too complicated and outdated from the get-go. So I chose a modern build tool, Vite, and went down the rabbit hole to try to fit it into my WordPress development workflow.

And it did work, for the most part!

## The Gist

So, how should this work?

Vite has a capability to set up a `localhost:3000` server and hot-reload assets from there, so any CSS / JS file compiled by Vite will be hot-reloaded.

A local WordPress server, running on a different port, will enqueue CSS / JS assets from `localhost:3000` on development mode, thus benefitting from hot-reloading.

_But there is a catch here._ I still don't see how it would be possible to hot-reload changes on PHP files, as Vite doesn't import these. So, I thought a _live-reload_ (not hot) would be a decent compromise. We would just refresh the browser whenever a change in PHP file is detected.

So far, everything seems plausible, doesn't it?

## The Nitty Gritty

First, let's install Vite on our theme. This assumes you already have Node & NPM installed, but if not, you can follow [Node.JS website](https://nodejs.org/en/download/) and follow the installation guide there. Also, make sure you have an updated version of Node as Vite might require it.

```bash
# Go to WordPress theme folder
cd my-theme-folder

# Install packages
npm i --save vite vite-plugin-live-reload cross-env
```

We are also installing `vite-plugin-live-reload` here, which handles the PHP-triggered reloading.

If you want to use SASS/SCSS, feel free to install that as well as [Vite requires installing it](https://vitejs.dev/guide/features.html#css-pre-processors).

If everything installs successfully, you will see `package.json` file on the current directory. Here, I recommend a couple of scripts to run Vite easily:

```json
// package.json
{
	// etc ...
	"scripts": {
		"dev": "cross-env APP_ENV=development vite",
		"build": "cross-env APP_ENV=production vite build",
		"watch": "cross-env APP_ENV=development vite build --watch"
	}
	// etc ...
}
```

- `npm run dev` is to run _development_ mode, where assets are hot-reloaded and PHP changes are live-reloaded.
- `npm run build` is to build the assets for production.
- `npm run watch` is to run the build command while watching for changes, rebuilding on every change made. This is especially useful when not developing locally where access to `localhost` is limited / difficult.

### Vite Config & Entrypoints

Before we're able to run these scripts, we need to configure Vite. Create a `vite.config.ts` file on the project's root directory.

```ts
// View your website at your own local server
// for example http://vite-php-setup.test

// http://localhost:3000 is serving Vite on development
// but accessing it directly will be empty

import { defineConfig } from 'vite';
import liveReload from 'vite-plugin-live-reload';
import path from 'path';
import fs from 'fs';

const scriptsDir = './src/scripts';

/**
 * Returns top-level .ts / .js files within the scriptsDir directory
 */
function getTopLevelFiles(): Record<string, string> {
	const topLevelFiles = fs.readdirSync(path.resolve(__dirname, scriptsDir));
	const files: { [key: string]: string } = {};

	topLevelFiles.forEach((file) => {
		const isFile = fs.lstatSync(path.resolve(scriptsDir, file)).isFile();
		if (
			isFile &&
			!file.includes('.d.ts') &&
			(path.extname(file) === '.ts' || path.extname(file) === '.js')
		) {
			const chunkName = file.slice(0, file.lastIndexOf('.'));
			files[chunkName] = path.resolve(scriptsDir, file);
		}
	});

	return files;
}

const config = {
	plugins: [
		liveReload([
			// edit live reload paths according to your source code
			// so that editing these files will trigger browser reload
			`${__dirname}/**/*.php`
		])
	],

	root: scriptsDir,
	base: process.env.APP_ENV === 'development' ? '/' : '/dist/',

	build: {
		// output dir for production build
		outDir: path.resolve(__dirname, './dist'),
		emptyOutDir: true,

		// create manifest so PHP can find the hashed files
		manifest: true,

		// our entrypoint
		rollupOptions: {
			input: getTopLevelFiles(__dirname)
		}
	},

	server: {
		// required to load scripts from custom host
		cors: true,

		// we need a strict port to match on PHP side
		// change freely, but update on PHP to match the same port
		strictPort: true,
		port: 3000,

		hmr: {
			port: 3000,
			host: 'localhost',
			protocol: 'ws'
		}
	}
};

export default config;
```

### The Vite PHP Class

### Enqueuing based on Environment

### Some GIFs of Hot Reload

<!-- ![Lorem ipsum](./test.jpeg) -->

Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

## Lorem ipsum dolor sit amet

Consectetur adipiscing elit sed do eiusmod
