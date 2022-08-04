import { api } from './_api';
import type { RequestHandler } from '@sveltejs/kit';

export const POST: RequestHandler = async ({ request }) => {
	const formData = await request.formData();

	// formData.forEach((value, key) => {
	// 	console.log(`${key} = ${value}`);
	// });

	const res = await api(formData);

	return res || {};
};
