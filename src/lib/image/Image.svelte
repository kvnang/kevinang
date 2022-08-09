<script lang="ts">
	import { dev } from '$app/env';

	export let src: string;
	export let alt: string;
	export let srcset: string | null = null;
	export let sizes: string | null = null;

	if (!dev) {
		const deviceSizes = [640, 750, 828, 1080, 1200, 1920, 2048, 3840];
		// TODO: add Cloudinary params
		src = `https://res.cloudinary.com/kevinang/image/upload/f_auto/ka${src}`;
		srcset = deviceSizes
			.map(
				(size) =>
					`https://res.cloudinary.com/kevinang/image/upload/f_auto,w_${size}/ka${src} ${size}w`
			)
			.join(', ');
		sizes = `(min-width: 1440px) 50vw, (min-width: 768px) 25vw, 100vw`;
	}
</script>

{#if src}
	<img {src} {srcset} {sizes} {alt} {...$$restProps} />
{/if}
