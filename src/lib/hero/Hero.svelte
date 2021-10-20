<script lang="ts">
	import TextRoll from './TextRoll.svelte';
	import img from './hero.jpg';
	let pause = false;
</script>

<section class="wrapper section-m-t section-m-b--lg">
	<div class="container">
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
			<span>I'm a</span>&nbsp;<TextRoll {pause} />
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
	</div>
</section>

<style lang="scss">
	@import '../../styles/global-imports';

	h1 {
		display: inline-flex;
		flex-flow: wrap;
		span {
			display: inline-block;
		}
	}

	.hero {
		opacity: 0.25;
		position: absolute;
		width: 55%;
		right: -1rem;
		top: -6rem;
		z-index: -1;

		@include breakpoint($tablet-sm) {
			width: 50%;
			top: -8rem;
		}

		@include breakpoint($laptop-sm) {
			width: 45%;
			top: -10rem;
		}

		@include breakpoint($laptop) {
			top: -15rem;
			width: 45%;
		}

		@include breakpoint($laptop-lg) {
			width: 40%;
			right: -5rem;
		}

		img {
			width: 100%;
			height: auto;
		}
	}

	.desc {
		max-width: 35em;

		@include breakpoint($laptop-sm) {
			max-width: 40em;
		}

		@include breakpoint($laptop-lg) {
			max-width: 45em;
		}
	}
</style>
