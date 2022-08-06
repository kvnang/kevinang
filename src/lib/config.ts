import { browser } from '$app/env';

export const config = {
	siteUrl: browser ? import.meta.env.URL : process.env.URL
};
