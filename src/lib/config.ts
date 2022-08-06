import { browser } from '$app/env';
import { removeTrailingSlash } from './utils';

export const config = {
	siteUrl: browser ? removeTrailingSlash(import.meta.env.URL) : removeTrailingSlash(process.env.URL)
};
