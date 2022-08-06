export const removeTrailingSlash = (path?: string) => {
	return path?.replace(/\/$/, '');
};
