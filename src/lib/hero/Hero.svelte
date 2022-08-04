<script lang="ts">
	import TextRoll from './TextRoll.svelte';
	import img from './hero.jpg';
	let pause = false;
</script>

<section class="wrapper section-m-b">
	<div class="container">
		<div class="hero">
			<div class="hero-text">
				<div class="hero-banner">
					<div class="hero-chevron" />
				</div>
				<div class="hero-text__inner">
					<h1 class="h5" style="margin-bottom: 0.5rem"><code>> 👋 I'm Kevin Ang</code></h1>
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
							<a href="https://www.longbeard.com" target="_blank" rel="noopener noreferrer"
								>Longbeard</a
							>, a web design agency serving clients across the Americas and Europe. I've been here
							since 2019 and loving it.
						</p>
						<p>
							I love tinkering with frontend development, IoT, and edge computing, but anything JS
							is my current forte.
						</p>
						<p>Spending quality time with my wife and kids makes my day.</p>
					</div>
				</div>
			</div>
			<div class="hero-img">
				<div class="hero-chevron" />
				<div class="hero-img__inner">
					<img src={img} alt="Kevin Ang" width="700" height="962" loading="eager" />
				</div>
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	@import '../../styles/global-imports';

	.wrapper {
		position: relative;
		margin-top: calc(var(--section-spacing) - 1.5rem);
	}
	.container {
		position: relative;
	}

	.hero {
		display: flex;
		flex-flow: wrap;
		margin: 0 -0.5rem;
	}

	.hero-chevron {
		position: absolute;
		height: calc(100% + 2px);
		width: 10rem;

		&::before,
		&::after {
			content: '';
			position: absolute;
			z-index: -1;
			top: -1px;
			right: -3rem;
			height: calc(50% + 1px);
			width: 6rem;
			background-color: var(--color-bg);
			transform-origin: top left;
		}

		&::before {
			transform: skewX(15deg);
		}

		&::after {
			transform-origin: bottom left;
			transform: skewX(-15deg);
			top: auto;
			bottom: -1px;
		}
	}

	.hero-text {
		flex: 0 0 100%;
		max-width: 100%;
		padding: 0 0.5rem;
		position: relative;
		z-index: 1;

		@include breakpoint($tablet-sm) {
			flex: 0 0 66.667%;
			max-width: 66.667%;
		}

		@include breakpoint($laptop-sm) {
			flex: 0 0 58.333%;
			max-width: 58.333%;
			margin-left: 8.333%;
		}

		@include breakpoint($laptop) {
			flex: 0 0 50%;
			max-width: 50%;
		}

		&__inner {
			display: flex;
			flex-direction: column;
			padding: 0 0 var(--section-spacing);

			@include breakpoint($tablet-sm) {
				padding: 3rem 0;
			}

			@include breakpoint($laptop-lg) {
				padding: 5rem 0;
			}
		}

		h1 {
			display: inline-flex;
			flex-flow: wrap;
			span {
				display: inline-block;
			}
		}

		.hero-banner {
			position: absolute;
			height: 100%;
			width: 100%;
			right: calc(100%);
			top: 0;
			z-index: -1;

			&::before {
				content: '';
				position: absolute;
				height: 100%;
				width: 100%;
				right: 3rem;
				background-color: var(--color-accent);
			}

			.hero-chevron {
				top: 0;
				right: 0;
				z-index: 1;
				transform: rotate(180deg) translateX(-100%);
				display: none;

				@include breakpoint($tablet-sm) {
					display: block;
				}
			}
		}
	}

	.hero-img {
		flex: 0 0 100%;
		max-width: 100%;
		padding: 0 0.5rem;
		position: relative;
		z-index: 0;

		@include breakpoint($tablet-sm) {
			flex: 0 0 33.333%;
			max-width: 33.333%;
		}

		@include breakpoint($laptop) {
			flex: 0 0 41.667%;
			max-width: 41.667%;
		}

		.hero-chevron {
			top: 0;
			right: -0.5rem;
			z-index: 1;

			@include breakpoint($tablet-sm) {
				left: -10rem;
				right: auto;
			}
		}

		&__inner {
			position: relative;
			aspect-ratio: 16 / 9;
			margin-left: -1rem;
			margin-right: -1rem;

			@include breakpoint($tablet-sm) {
				aspect-ratio: initial;
				margin-left: 2rem;
				margin-right: -50%;
				height: 100%;
			}
		}

		img {
			width: 100%;
			height: 100%;
			position: absolute;
			top: 0;
			left: 0;
			object-fit: cover;
			object-position: 20% 50%;
			filter: grayscale(50%);
			transition: filter var(--transition);
			transition-duration: 3s;
		}
	}

	.wrapper:hover {
		.hero-img img {
			filter: none;
		}
	}

	.desc {
		max-inline-size: 60ch;
	}
</style>
