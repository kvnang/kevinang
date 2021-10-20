<script lang="ts">
	import Cube from '$lib/Cube.svelte';
	import js from './js.svg';
	import node from './node.svg';
	import php from './php.svg';
	import sass from './sass.svg';
	import react from './react.svg';
	import svelte from './svelte.svg';
	import wordpress from './wordpress.svg';
	import gatsby from './gatsby.svg';
	import nextjs from './nextjs.svg';
	import mongodb from './mongodb.svg';
	import workers from './workers.svg';

	export let delay;
	let showMore = false;

	setTimeout(() => {
		showMore = true;
	}, delay);
</script>

{#if showMore}
	<Cube bg={workers} color="#333333" title="Next.js" top={0} left={5} right={2} />
{/if}
