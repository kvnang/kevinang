<script lang="ts">
	import { page } from '$app/stores';

	let menuOpen = false;
</script>

<header class="section">
	<div class="inner">
		<div class="left">
			<a href="/" class="logo">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 200 180"
					width="36"
					height="32"
					aria-labelledby="header-logo-title"
				>
					<title id="header-logo-title">Kevin Ang</title>
					<path
						d="m76.52 57.48 38.82-46a29.15 29.15 0 0 1 21.73-9.62h.87V0H92.25v1.78h1.92c5.51 0 8.1 5 4.74 9.47L45.2 78V14.38A12.75 12.75 0 0 1 58 2h2.51V0H0v2h2.57a12.74 12.74 0 0 1 12.74 12.42v110.39a12.76 12.76 0 0 1-12.76 12.51H0v2h9.86Z"
						fill="#fff"
					/><path
						d="M199.77 171c-24.58-1.25-42.8-14-65.34-43.63l-50.76-63-18 21.9 25.43 31.17H40l-3.87 4.7h58.8l14.49 17.78c30.92 38.59 60 48.67 90.58 33Z"
						fill="#fff"
						opacity="0.67"
					/></svg
				>
			</a>
		</div>

		<div class="center" class:active={menuOpen}>
			<nav>
				<ul>
					<li class:active={$page.url.pathname === '/blog'}>
						<a data-sveltekit-prefetch href="/blog" class="h6">Blog</a>
					</li>
					<li>
						<a data-sveltekit-prefetch href="/#contact" class="h6">Contact</a>
					</li>
					<li class:active={$page.url.pathname === '/projects'}>
						<span class="h6 coming-soon">
							Projects
							<span class="coming-soon__label">Soon</span>
						</span>
					</li>
				</ul>
			</nav>
		</div>

		<div class="right">
			<div class="links">
				<ul>
					<li>
						<a href="https://github.com/kvnang" target="_blank" rel="noopener noreferrer">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 32.58 31.77"
								width="33"
								height="32"
								aria-labelledby="github-logo"
							>
								<title id="github-logo">View My GitHub Profile</title>
								<path
									fill="#fff"
									fill-rule="evenodd"
									d="M16.29 0a16.29 16.29 0 0 0-5.15 31.75c.82.15 1.11-.36 1.11-.79v-2.77C7.7 29.18 6.74 26 6.74 26a4.36 4.36 0 0 0-1.81-2.39c-1.47-1 .12-1 .12-1a3.43 3.43 0 0 1 2.49 1.68 3.48 3.48 0 0 0 4.74 1.36 3.46 3.46 0 0 1 1-2.18c-3.62-.41-7.42-1.81-7.42-8a6.3 6.3 0 0 1 1.67-4.37 5.94 5.94 0 0 1 .16-4.31s1.37-.44 4.48 1.67a15.41 15.41 0 0 1 8.16 0c3.11-2.11 4.47-1.67 4.47-1.67a5.91 5.91 0 0 1 .2 4.28 6.3 6.3 0 0 1 1.67 4.37c0 6.26-3.81 7.63-7.44 8a3.85 3.85 0 0 1 1.11 3v4.47c0 .53.29.94 1.12.78A16.29 16.29 0 0 0 16.29 0Z"
								/></svg
							>
						</a>
					</li>
				</ul>
			</div>

			<div class="mobile-menu">
				<button class="h6" on:click={() => (menuOpen = !menuOpen)}>
					{menuOpen ? 'Close' : 'Menu'}
				</button>
			</div>
		</div>
	</div>
</header>

<style lang="scss">
	.section {
		.inner {
			grid-column: wide;
			display: flex;
			justify-content: space-between;
			padding-top: 1rem;
			padding-bottom: 1rem;

			@include breakpoint($tablet-sm) {
				padding-top: 1.5rem;
				padding-bottom: 1.5rem;
			}
		}
	}

	.left {
		.logo {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 100%;
			height: 100%;

			svg {
				height: 1.5rem;
				width: auto;

				@include breakpoint($tablet-sm) {
					height: 2rem;
				}

				path {
					transition: fill var(--transition), opacity var(--transition);
				}
			}
			&:hover {
				path {
					&:first-of-type {
						fill: var(--color-accent);
					}
					&:last-of-type {
						fill: var(--color-accent-2);
						opacity: 1;
					}
				}
			}
		}
	}

	.center {
		@include breakpoint(mobile-only) {
			position: absolute;
			background-color: var(--color-bg-tint);
			top: 0;
			right: 0;
			width: 100%;
			padding: 3rem 1rem;
			z-index: 20;
			opacity: 0;
			transform: translate(0, -1rem);
			pointer-events: none;
			transition: opacity var(--transition), transform var(--transition);

			&.active {
				pointer-events: initial;
				opacity: 1;
				transform: translate(0, 0);
			}

			nav {
				background-color: none;
				ul {
					flex-direction: column;
					margin: -1rem;

					li {
						padding: 1rem;
					}
				}
			}
		}
	}

	.right {
		display: flex;
		align-items: center;
	}

	.links {
		ul {
			display: flex;
			align-items: center;
			margin: -0.5rem -0.75rem;

			li {
				padding: 0.5rem 0.75rem;
			}
		}
		svg {
			height: 1.5rem;
			width: auto;
		}

		a {
			display: flex;
			align-items: center;
			opacity: 0.75;
			transition: opacity var(--transition);

			&:hover {
				opacity: 1;
			}
		}
	}

	nav {
		background-color: var(--color-bg-tint);
		padding: 0.5rem;
		border-radius: 1.75rem;

		ul {
			display: flex;
			align-items: center;
			flex-flow: wrap;
			gap: 0.25rem;

			@include breakpoint($tablet-sm) {
				gap: 0.5rem;
			}

			li {
				&.active {
					a {
						&::before {
							transform: scale(1);
							opacity: 1;
						}
					}
				}
			}

			.h6 {
				display: inline-flex;
				padding: 0.5rem 1rem;
				position: relative;
				z-index: 0;
			}

			a {
				text-decoration: none;
				color: var(--white);
				border-radius: 1.75rem;

				&::before {
					content: '';
					position: absolute;
					z-index: -1;
					border-radius: 1.75rem;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
					background-color: var(--color-bg);
					transform: scale(0.9);
					opacity: 0;
					transition: transform var(--transition), opacity var(--transition);
				}

				&:hover {
					color: var(--white);
					&::before {
						transform: scale(1);
						opacity: 0.5;
					}
				}
			}

			.coming-soon {
				color: hsl(var(--color-p-hsl) / 50%);

				&__label {
					position: absolute;
					font-size: 0.67em;
					padding: 0.25rem 0.5rem;
					background-color: var(--color-accent);
					color: var(--color-bg);
					font-weight: 700;
					border-radius: 1rem;
					bottom: 100%;
					left: 50%;
					transform: translate(-50%, 0);
					letter-spacing: 0.1em;
				}
			}
		}
	}

	.mobile-menu {
		z-index: 40;
		margin-left: 1.5rem;

		@include breakpoint($tablet-sm) {
			display: none;
		}
	}
</style>
