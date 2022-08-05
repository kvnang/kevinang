import { api } from './_api';
import type { RequestHandler } from '@sveltejs/kit';

export const POST: RequestHandler = async ({ request }) => {
	const formData = await request.formData();

	try {
		const res = await api(formData);

		return res || {};
	} catch (err) {
		return {
			status: 500,
			body: (err as Error).message
		};
	}
};
