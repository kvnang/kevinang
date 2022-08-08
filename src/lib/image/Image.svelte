<script lang="ts">
	import { dev } from '$app/env';

	export let src: string;
	export let alt: string;

	if (dev) {
		src = src;
	} else {
		src = `https://res.cloudinary.com/kevinang/image/upload/ka${src}`;
	}
</script>

{#if src}
	<img {src} {alt} {...$$restProps} />
{/if}
