<script lang="ts">
	import TextRoll from './TextRoll.svelte';
	import img from './hero-3.jpg';
	let pause = false;
</script>

<section class="wrapper section-m-t section-m-b--lg">
	<div class="container">
		<div class="hero">
			<div class="hero-text">
				<div class="hero-text__inner">
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
			</div>
			<div class="hero-img">
				<div class="hero-img__inner">
					<img src={img} alt="Kevin Ang" width="700" height="962" />
				</div>
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	@import '../../styles/global-imports';

	.wrapper {
		position: relative;
	}
	.container {
		position: relative;

		&::before {
			content: '';
			position: absolute;	
			height: 100%;
			width: 100%;
			right: 100%;
			top: 0;
			background-color: var(--color-accent);;
		}
		
	}

	.hero {
		display: flex;
		flex-flow: wrap;
		margin: 0 -0.5rem;
	}

	.hero-text {
		flex: 0 0 58.335%;
		max-width: 58.335%;
		padding: 0 0.5rem;
		position: relative;
		z-index: 1;

		&::before,
		&::after {
			content: '';
			position: absolute;
			z-index: -1;
			top: 0;
			right: -5rem;;
			height: 50%;
			width: 10rem;
			background-color: var(--color-bg);
		}

		&::before {
			transform: skewX(10deg);
		}

		&::after {
			transform: skewX(-10deg);
			top: 50%;
		}
		
		&__inner {
			display: flex;
			flex-direction: column;
			padding: 3rem 0;
		}

		h1 {
			display: inline-flex;
			flex-flow: wrap;
			span {
				display: inline-block;
			}
		}
	}

	.hero-img {
		flex: 0 0 41.665%;
		max-width: 41.665%;
		padding: 0 0.5rem;
		position: relative;
		z-index: 0;

		&__inner {
			margin-right: -50%;
			height: 100%;
			position: relative;
			margin-left: 2rem;
		}

		img {
			width: 100%;
			height: 100%;
			position: absolute;
			top: 0;
			left: 0;
			object-fit: cover;
			object-position: 20% 50%;;
		}
	}

	.desc {
		max-inline-size: 60ch;
	}
</style>
