export const manifest = {
	appDir: "_app",
	assets: new Set(["favicon.png","robots.txt","svelte-welcome.png","svelte-welcome.webp"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain",".webp":"image/webp"},
	_: {
		entry: {"file":"_app/immutable/start-a54d0068.js","imports":["_app/immutable/start-a54d0068.js","_app/immutable/chunks/index-ae7b3527.js","_app/immutable/chunks/index-62f1562e.js"],"stylesheets":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/4.js')
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'endpoint',
				id: "todos.json",
				pattern: /^\/todos\.json$/,
				names: [],
				types: [],
				load: () => import('./entries/endpoints/todos/index.json.ts.js')
			},
			{
				type: 'endpoint',
				id: "contact.json",
				pattern: /^\/contact\.json$/,
				names: [],
				types: [],
				load: () => import('./entries/endpoints/contact/index.json.ts.js')
			},
			{
				type: 'page',
				id: "about",
				pattern: /^\/about\/?$/,
				names: [],
				types: [],
				path: "/about",
				shadow: null,
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				id: "todos",
				pattern: /^\/todos\/?$/,
				names: [],
				types: [],
				path: "/todos",
				shadow: null,
				a: [0,4],
				b: [1]
			},
			{
				type: 'endpoint',
				id: "todos/[uid].json",
				pattern: /^\/todos\/([^/]+?)\.json$/,
				names: ["uid"],
				types: [null],
				load: () => import('./entries/endpoints/todos/_uid_.json.ts.js')
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
