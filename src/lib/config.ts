import { browser } from '$app/env';
import { removeTrailingSlash } from './utils';

export const config = {
	siteUrl: removeTrailingSlash(browser ? import.meta.env.URL : process.env.URL)
};