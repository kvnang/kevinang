import satori from 'satori';
import camelCase from 'just-camel-case';
import { Parser } from 'htmlparser2';
import { DomHandler } from 'domhandler';
import { Resvg } from '@resvg/resvg-js';
import { config } from '$lib/config';
import type { RequestHandler } from '@sveltejs/kit';
import type { ReactElementLikeProps, TransformNode } from './types';

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