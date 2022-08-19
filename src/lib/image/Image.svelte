<script lang="ts">
	import { dev } from '$app/env';
	import { config } from '$lib/config';
	import { removeLeadingSlash } from '$lib/utils';

	export let src: string | null | undefined;
	export let alt = '';
	export let srcset: string | null | undefined = null;
	export let sizes: string | null | undefined = null;

	if (!dev && src) {
		const { siteUrl } = config;
		const deviceSizes = [640, 750, 828, 1080, 1200, 1920, 2048, 3840];

		// Remove hostname
		if (siteUrl) {
			src = src?.replace(siteUrl, '');
		}

		src = removeLeadingSlash(src);

		srcset = deviceSizes
			.map(
				(size) =>
					`https://res.cloudinary.com/kevinang/image/upload/f_auto,w_${size}/ka/${src} ${size}w`
			)
			.join(', ');
		src = null;
		sizes = `(min-width: 1440px) 50vw, (min-width: 768px) 25vw, 100vw`;
	}
</script>

{#if src || srcset}
	<img {src} {srcset} {sizes} {alt} {...$$restProps} />
{/if}
