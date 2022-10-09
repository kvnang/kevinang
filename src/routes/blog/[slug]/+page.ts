import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	const { slug } = params;

	try {
		const post = await import(`../../../posts/${slug}/index.md`);

		if (post.metadata.status !== 'published') {
			return error(404, 'Not found');
		}

		return {
			props: { post }
		};
	} catch (err) {
		console.error(err);
		return error(404, 'Not found');
	}
};
