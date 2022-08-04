<script lang="ts">
	import { fly } from 'svelte/transition';
	import IntersectionObserver from '../IntersectionObserver.svelte';
	import Cube from './Cube.svelte';
	import js from './js.svg';
	import node from './node.svg';
	import php from './php.svg';
	import sass from './sass.svg';
	import typescript from './typescript.svg';
	import react from './react.svg';
	import svelte from './svelte.svg';
	import wordpress from './wordpress.svg';
	import gatsby from './gatsby.svg';
	import nextjs from './nextjs.svg';
	import mongodb from './mongodb.svg';
	import github from './github.svg';
	import workers from './workers.svg';
	import express from './express.svg';
	import shopify from './shopify.svg';
	// import auth0 from './auth0.svg';

	const delay = 3000;
	let intersecting = false;
</script>

<section class="container section-m-b">
	<h2 class="h1" style="text-align: center">My favorite stacks 🍔</h2>
	<h3 class="h4">
		{#if intersecting}
			<span
				style="display:inline-block;font-style:italic;"
				transition:fly={{
					y: -50,
					duration: 500,
					delay
				}}>and more ...</span
			>
		{:else}
			&nbsp;
		{/if}
	</h3>
	<div class="stacks">
		<IntersectionObserver bind:intersecting top={100} once={true}>
			{#if intersecting}
				<ul>
					<Cube bg={shopify} color="#fbf7ed" title="Shopify" top={0} left={-1} right={0} {delay} />
					<!-- <Cube bg={auth0} color="#000" title="Auth0" top={-1} left={-1} right={0} {delay} /> -->
					<!-- <Cube bg={shopify} color="#fbf7ed" title="Shopify" top={0} left={-1} right={-1} {delay} /> -->
					<Cube bg={wordpress} color="#21759b" title="WordPress" top={0} left={0} />
					<Cube bg={workers} color="#333333" title="Cloudflare Workers" top={-1} left={0} {delay} />
					<Cube bg={js} color="#F7DF1E" title="JavaScript" top={0} left={1} right={1} />
					<Cube bg={php} color="#8993BE" title="JavaScript" top={0} left={1} />
					<Cube bg={js} color="#F7DF1E" title="JavaScript" top={0} left={2} right={1} />
					<Cube bg={node} color="#fff" title="Node.js" top={0} left={2} />
					<!-- <Cube bg={sass} color="#CD6799" title="Sass" top={-1} left={1} /> -->
					<Cube bg={typescript} color="#3178c6" title="Typescript" top={-1} left={1} />
					<Cube bg={js} color="#F7DF1E" title="JavaScript" top={-1} left={2} />
					<Cube bg={react} color="#20232a" title="JavaScript" top={-2} left={2} />
					<Cube bg={sass} color="#bf4080" title="JavaScript" top={0} left={3} right={2} />
					<Cube bg={mongodb} color="#061621" title="JavaScript" top={0} left={3} right={1} />
					<Cube bg={gatsby} color="#663399" title="JavaScript" top={-1} left={3} right={1} />
					<Cube bg={svelte} color="#fff" title="JavaScript" top={-2} left={3} right={1} />
					<Cube bg={nextjs} color="#000" title="Next.js" top={0} left={4} right={2} />
					<Cube bg={github} color="#333333" title="Next.js" top={-1} left={4} right={2} />
					<Cube bg={express} color="#222" title="Express.js" top={0} left={5} right={2} {delay} />
				</ul>
			{/if}
		</IntersectionObserver>
	</div>
</section>

<style lang="scss">
	@import '../../styles/global-imports';

	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.stacks {
		position: relative;
		margin: 10rem 0 6rem;
		left: calc(var(--cube-size) * -3);

		@include breakpoint($laptop-sm) {
			margin-top: 14rem;
			margin-bottom: 8rem;
		}

		ul {
			list-style: none;
			padding: 0;
		}
	}
</style>
