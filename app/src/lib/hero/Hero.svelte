<script lang="ts">
	import TextRoll from './TextRoll.svelte';
	import Typed from './Typed.svelte';
	import Image from '$lib/image/Image.svelte';
	import heroSquare from './hero-square.jpg';

	let pause = false;
</script>

<section class="wrapper section-m-b">
	<div class="container">
		<div class="hero">
			<div class="hero__inner">
				<div class="hero__row">
					<div class="hero-img">
						<div class="hero-img__inner">
							<div class="hero-img__frame">
								<Image src={heroSquare} alt="Kevin Ang" width="160" height="160" loading="eager" />
							</div>
						</div>
					</div>
					<div class="hero-text">
						<div class="hero-text__inner">
							<h1 class="h5" style="margin-bottom: 0.5rem"><code><Typed /></code></h1>
							<h1
								class="mt-0"
								on:mouseover={() => (pause = true)}
								on:focus={() => (pause = true)}
								on:mouseout={() => (pause = false)}
								on:blur={() => (pause = false)}
							>
								<span>I'm a</span>&nbsp;<TextRoll {pause} />
							</h1>
							<div class="desc">
								<p>
									I'm a full-stack dev from <strong>Indonesia</strong>, working at
									<a href="https://www.longbeard.com" target="_blank" rel="noopener noreferrer"
										>Longbeard</a
									>.
								</p>
								<p>
									I love tinkering with frontend development, IoT, and edge computing, but anything
									JS is my current forte.
								</p>
								<p>Spending quality time with my wife and kids makes my day.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	@import '../../styles/global-imports';

	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	.wrapper {
		position: relative;

		&::before {
			content: '';
			width: 100%;
			height: 400%;
			position: absolute;
			z-index: -2;
			bottom: -200%;
			left: 0;
			background: linear-gradient(to bottom, transparent 50%, var(--color-bg) 50%),
				radial-gradient(circle closest-side, hsl(256, 46%, 20%), var(--color-bg) 150%);
			animation: fadeIn 3s ease-in-out;

			@include breakpoint($laptop-sm) {
				background: linear-gradient(to bottom, transparent 50%, var(--color-bg) 50%),
					radial-gradient(circle closest-side, hsl(256, 46%, 20%), var(--color-bg) 90%);
			}
		}
	}

	.hero {
		border-bottom: 2px solid var(--color-bg-tint);

		@include breakpoint($laptop-sm) {
			margin-left: 8.333%;
			margin-right: 8.333%;
		}

		&__inner {
			display: flex;
			flex-flow: wrap;
			padding-top: calc(var(--section-spacing-lg) - 3rem);
			padding-bottom: calc(var(--section-spacing-lg) * 1);

			@include breakpoint($tablet-sm) {
				flex-flow: wrap row-reverse;
			}

			@include breakpoint($laptop-sm) {
				margin: 0 10%;
			}
		}

		&__row {
			flex: 1;
			display: flex;
			flex-flow: wrap;
			margin: 0 -0.5rem;

			@include breakpoint($tablet-sm) {
				flex-flow: wrap row-reverse;
			}
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
			flex: 1;
			max-width: 100%;
		}

		&__inner {
			display: flex;
			flex-direction: column;

			@include breakpoint($laptop-sm) {
				padding-right: 4.5rem;
			}
		}

		h1 {
			display: inline-flex;
			flex-flow: wrap;
			span {
				display: inline-block;
				font-weight: 400;
			}
		}
	}

	.hero-img {
		flex: 0 0 100%;
		max-width: 100%;
		position: relative;
		z-index: 0;
		padding: 0 0.5rem;
		margin-bottom: 1.5rem;

		@include breakpoint($tablet-sm) {
			display: flex;
			justify-content: flex-end;
			align-items: flex-end;
			flex: 0 0 33.333%;
			max-width: 33.333%;
			margin-bottom: 0;
		}

		@include breakpoint($laptop-sm) {
			flex: initial;
		}

		&__inner {
			--image-border-offset: 0.5rem;
			--image-border-size: 2px;
			--image-size: 6rem;

			position: relative;
			height: var(--image-size);
			width: var(--image-size);

			@include breakpoint($tablet-sm) {
				--image-border-offset: 1rem;
				--image-border-size: 4px;
				--image-size: 8rem;
			}

			@include breakpoint($laptop-sm) {
				--image-size: 10rem;
			}

			&::before {
				content: '';
				position: absolute;
				top: calc(var(--image-border-offset) * -1 - calc(var(--image-border-size) * 0.5));
				right: calc(var(--image-border-offset) * -1 - calc(var(--image-border-size) * 0.5));
				height: calc(100% + var(--image-border-offset) * 2);
				width: calc(100% + var(--image-border-offset) * 2);
				border-radius: 50%;
				border-top: var(--image-border-size) solid hsl(256, 46%, 33%);
				border-right: var(--image-border-size) solid hsl(256, 46%, 33%);
				animation: fadeIn 3s ease-in-out;
			}
		}
		&__frame {
			position: relative;
			aspect-ratio: 1;
			border-radius: 50%;
			overflow: hidden;
			height: 100%;
			width: 100%;
		}

		:global(img) {
			width: 100%;
			height: 100%;
			position: absolute;
			top: 0;
			left: 0;
			object-fit: cover;
			object-position: center center;
			filter: grayscale(100%);
			transition: filter var(--transition);
			transition-duration: 3s;
			user-select: none;
			-webkit-user-drag: none;
		}
	}

	.desc {
		max-inline-size: 60ch;
	}
</style>
