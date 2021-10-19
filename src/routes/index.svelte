<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import Counter from '$lib/Counter.svelte';
	import Cube from '$lib/Cube.svelte';

	import img from '/hero.jpg';

	import js from '/stack/js.svg';
	import node from '/stack/node.svg';
	import php from '/stack/php.svg';
	import sass from '/stack/sass.svg';
	import react from '/stack/react.svg';
	import svelte from '/stack/svelte.svg';
	import wordpress from '/stack/wordpress.svg';
	import gatsby from '/stack/gatsby.svg';
	import nextjs from '/stack/nextjs.svg';
	import mongodb from '/stack/mongodb.svg';
	import workers from '/stack/workers.svg';

	let pause = false;
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section class="container section-m-t--lg section-m-b--lg">
	<div class="hero">
		<img src={img} alt="Kevin Ang" width="700" height="962" />
	</div>
	<h1 class="h5" style="margin-bottom: 1.5rem">👋&nbsp;&nbsp;Kevin's here!</h1>
	<h1
		on:mouseover={() => (pause = true)}
		on:focus={() => (pause = true)}
		on:mouseout={() => (pause = false)}
		on:blur={() => (pause = false)}
	>
		<span>I'm a</span>&nbsp;<Counter {pause} />
	</h1>
	<div class="desc">
		<p>
			Currently, I'm working as a developer at <a
				href="https://www.longbeard.com"
				target="_blank"
				rel="noopener noreferrer">Longbeard</a
			>, a web design agency serving clients across the Americas and Europe. I've been here since
			2019 and loving it.
		</p>
		<p>I love experimenting with new web technologies, but JS and PHP are my best pals so far.</p>
		<p>Spending quality time with my wife and kids makes me a happy man. 😊</p>
	</div>
</section>

<section class="container section-m-t--lg section-m-b" style="align-items: center;">
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
	section {
		display: flex;
		flex-direction: column;
		position: relative;
	}

	h1 {
		display: inline-flex;
	}

	.hero {
		opacity: 0.25;
		position: absolute;
		width: 45%;
		right: -7rem;
		top: -15rem;

		img {
			width: 100%;
			height: auto;
		}
	}

	.desc {
		max-width: 45em;
	}

	.stacks {
		position: relative;
		margin: 15rem 0;
		left: -15rem;
	}
</style>
