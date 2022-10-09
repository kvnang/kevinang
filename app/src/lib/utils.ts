export const removeTrailingSlash = (path?: string) => {
	return path?.replace(/\/+$/, ''); // Also handles multiple slashes
};

export const removeLeadingSlash = (path?: string) => {
	return path?.replace(/^\/+/, '');
};
