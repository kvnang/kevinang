import { api } from './_api';
import type { RequestHandler } from '@sveltejs/kit';

export const POST: RequestHandler = async ({ request }) => {
	const formData = await request.formData();

	try {
		const res = await api(formData);

		return new Response('{}', {
			headers: {
				'Content-Type': 'application/json; charset=utf-8'
			},
			status: res ? res.status : 500
		});
	} catch (err) {
		console.error(err);
		return new Response((err as Error).message, { status: 500 });
	}
};
