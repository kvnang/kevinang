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
</script>

<section class="container section-m-t--lg section-m-b">
	<h2 class="h1" style="text-align: center">My favorite stacks 🍪</h2>
	<h3 class="h5">And more ...</h3>
	<div class="stacks">
		<Cube bg={wordpress} color="#21759b" title="WordPress" top={0} left={0} />
		<Cube bg={js} color="#F7DF1E" title="JavaScript" top={0} left={1} right={1} />
		<Cube bg={php} color="#8993BE" title="JavaScript" top={0} left={1} />
		<Cube bg={js} color="#F7DF1E" title="JavaScript" top={0} left={2} right={1} />
		<Cube bg={node} color="#fff" title="Node.js" top={0} left={2} />
		<Cube bg={sass} color="#CD6799" title="Sass" top={-1} left={1} />
		<Cube bg={js} color="#F7DF1E" title="JavaScript" top={-1} left={2} />
		<Cube bg={react} color="#20232a" title="JavaScript" top={-2} left={2} />
		<Cube bg={js} color="#F7DF1E" title="JavaScript" top={0} left={3} right={2} />
		<Cube bg={mongodb} color="#061621" title="JavaScript" top={0} left={3} right={1} />
		<Cube bg={gatsby} color="#663399" title="JavaScript" top={-1} left={3} right={1} />
		<Cube bg={svelte} color="#fff" title="JavaScript" top={-2} left={3} right={1} />
		<Cube bg={nextjs} color="#000" title="Next.js" top={0} left={4} right={2} />
		<Cube bg={workers} color="#333333" title="Next.js" top={-1} left={4} right={2} />
	</div>
</section>

<style lang="scss">
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.stacks {
		position: relative;
		margin: 15rem 0;
		left: -15rem;
	}
</style>
