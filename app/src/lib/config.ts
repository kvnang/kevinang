import { removeTrailingSlash } from './utils';

export const config = {
	/**
	 * Site URL without trailing slash
	 */
	siteUrl: removeTrailingSlash(import.meta.env.VITE_SITE_URL)
};
