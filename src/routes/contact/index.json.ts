import { api } from './_api';
import type { RequestHandler } from '@sveltejs/kit';
import type { Locals } from '$lib/types';

// POST /todos.json
export const post: RequestHandler<Locals, FormData> = async (request) => {
	// const response = await api(request, `todos/${request.locals.userid}`, {
	// 	// because index.svelte posts a FormData object,
	// 	// request.body is _also_ a (readonly) FormData
	// 	// object, which allows us to get form data
	// 	// with the `body.get(key)` method
	// 	text: request.body.get('text')
	// });

	// return response;

	console.log(request.body);
	return { ok: true };
};
