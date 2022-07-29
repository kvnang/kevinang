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
				I'm a full-stack dev from <span role="img" aria-label="Indonesia">🇮🇩</span>, currently
				working at
				<a href="https://www.longbeard.com" target="_blank" rel="noopener noreferrer">Longbeard</a>,
				a web design agency serving clients across the Americas and Europe. I've been here since
				2019 and loving it.
			</p>
			<p>I love experimenting with new web technologies, but anything JS is my current forte.</p>
			<p>Spending quality time with my wife and kids makes me a happy man. 😊</p>
		</div>
	</div>
</section>

<style lang="scss">
	@import '../../styles/global-imports';

	.wrapper {
		position: relative;
	}
	.container {
		display: flex;
		flex-direction: column;
	}

	h1 {
		display: inline-flex;
		flex-flow: wrap;
		span {
			display: inline-block;
		}
	}

	.hero {
		opacity: 0.35;
		position: absolute;
		width: 55%;
		right: 0;
		top: -6rem;
		transform: translateX(5%);
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
		}

		img {
			width: 100%;
			height: auto;
		}
	}

	.desc {
		max-inline-size: 60ch;
	}
</style>
