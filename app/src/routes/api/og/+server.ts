// @ts-expect-error satori/wasm is not typed
import satori, { init } from 'satori/wasm';
import initYoga from 'yoga-wasm-web';
import camelCase from 'just-camel-case';
import { Parser } from 'htmlparser2';
import { DomHandler } from 'domhandler';
import { config } from '$lib/config';
import type { RequestHandler } from '@sveltejs/kit';
import type { ReactElementLikeProps, TransformNode } from './types';
import { Resvg, initWasm } from '@resvg/resvg-wasm';
import resvgWasm from '../../../../static/wasm/index_bg.wasm?module';
import yogaWasm from '../../../../static/wasm/yoga.wasm?module';

console.log(yogaWasm);

const { siteUrl } = config;

const bitterFont = fetch(`${siteUrl}/fonts/Bitter-Medium.ttf`).then((res) => res.arrayBuffer());
const sfProFont = fetch(`${siteUrl}/fonts/SF-Pro-Text-Regular.otf`).then((res) =>
	res.arrayBuffer()
);

/**
 * Convert the DOM tree into a React element
 */
const transformNode: TransformNode = (node) => {
	if (
		node.type === 'comment' ||
		node.type === 'directive' ||
		node.type === 'cdata' ||
		node.type === 'root'
	) {
		return;
	}

	if (node.type === 'text') {
		return node.data;
	}

	const props: ReactElementLikeProps = {};

	const children = 'children' in node ? node.children : null;
	const attribs = 'attribs' in node ? node.attribs : null;

	if (children) {
		props['children'] = children.map(transformNode);
	}

	if (attribs) {
		for (const [key, value] of Object.entries(attribs)) {
			if (key === 'style') {
				const cleanStyle = value.replace(/\n/g, '').replace(/\s\s+/g, ' ');

				props['style'] = cleanStyle.split(';').reduce((acc, cur) => {
					const [k, v] = cur.split(':');
					if (k && v) {
						const camelCaseKey = camelCase(k.trim());
						acc[camelCaseKey] = v.trim();
					}
					return acc;
				}, {});
			} else {
				props[key] = value;
			}
		}
	}

	return {
		type: node.name,
		props
	};
};

export const GET: RequestHandler = async ({ url }) => {
	// Init resvg wasm
	try {
		// wrap this on a try/catch block as sometimes wasm has been initialized, and initWasm can't be called again
		console.log('init resvg wasm');
		// await initWasm(fetch(`${siteUrl}/wasm/index_bg.wasm`).then((res) => res.arrayBuffer()));
		await initWasm(resvgWasm as WebAssembly.Module);
		console.log('done resvg wasm');
	} catch (err) {
		console.error(err);
	}

	// Init yoga wasm
	try {
		// console.log('fetching yoga');
		// const yogaWasmBuffer = await fetch(`${siteUrl}/wasm/yoga.wasm`).then((res) =>
		// 	res.arrayBuffer()
		// );

		console.log('init yoga');
		// await initYoga(yogaWasmBuffer).then(async (yoga) => {
		// 	console.log;
		// 	await init(yoga);
		// });
		await initYoga(yogaWasm as WebAssembly.Module).then(async (yoga) => {
			console.log('done yoga, init satori');
			await init(yoga);
			console.log('done satori');
		});
	} catch (err) {
		console.error(err);
	}

	const title = url.searchParams.get('title') || '';

	const html = `
  <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh; width: 100vw; font-family: sans-serif; background: #160f29">
		<div style="display: flex; width: 100vw; padding: 40px; color: white;">
    	<h1 style="font-size: 60px; font-weight: 600; margin: 0; font-family: 'Bitter', font-weight: 500">${title}</h1>
  	</div>
  </div>
  `;

	// remove whitespace from html
	const cleanHtml = html.replace(/<!--(.*?)-->|\s\B/gm, ' ').trim();

	// parse html into a DOM tree
	const handler = new DomHandler();
	const parser = new Parser(handler);
	parser.parseComplete(cleanHtml);

	// convert DOM tree into a React element-like object
	const tree = handler.dom.map((node) => {
		const transformed = transformNode(node);
		return transformed;
	});

	// render the React element-like object into an SVG
	// here we assume that there's only one parent element...
	const svg = await satori(tree[0], {
		width: 1200,
		height: 600,
		fonts: [
			{
				name: 'Bitter',
				data: await bitterFont,
				weight: 500,
				style: 'normal'
			},
			{
				name: 'SF Pro Text',
				data: await sfProFont,
				weight: 400,
				style: 'normal'
			}
		]
	});

	// convert the SVG into a PNG
	const opts = {
		background: 'rgba(238, 235, 230, .9)',
		fitTo: {
			mode: 'width' as const,
			value: 1200
		},
		font: {
			loadSystemFonts: false // It will be faster to disable loading system fonts.
		}
	};
	const resvg = new Resvg(svg, opts);
	const pngData = resvg.render();
	const pngBuffer = pngData.asPng();

	return new Response(pngBuffer, {
		headers: {
			'Content-Type': 'image/png'
		}
	});
};
