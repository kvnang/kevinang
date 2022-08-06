export const removeTrailingSlash = (path?: string) => {
	return path?.replace(/\/+$/, ''); // Also handles multiple slashes
};
