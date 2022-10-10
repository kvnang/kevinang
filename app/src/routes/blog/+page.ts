import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const fetchMarkdownPosts = async () => {
	const allPostFiles = import.meta.glob('/src/posts/**/*.md');
	const iterablePostFiles = Object.entries(allPostFiles);

	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			const { metadata } = (await resolver()) as { metadata: any };

			const filename = path.split('/').pop();
			let slug = filename.split('.').shift();

			if (slug === 'index') {
				slug = path.split('/').slice(-2, -1)[0];
			}

			return {
				metadata,
				slug
			};
		})
	);

	const publishedPosts = allPosts.filter((post) => post.metadata.status === 'published');

	return publishedPosts;
};

export const load: PageLoad = async () => {
	try {
		const posts = await fetchMarkdownPosts();

		if (!posts?.length) {
			return error(404, 'Not found');
		}

		return {
			props: { posts }
		};
	} catch (err) {
		console.error(err);
		return error(404, 'Not found');
	}
};
