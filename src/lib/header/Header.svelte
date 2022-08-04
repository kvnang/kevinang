<script lang="ts">
	import { page } from '$app/stores';
	import logo from './logo.svg';
</script>

<header>
	<div class="container">
		<div class="corner">
			<a href="/" class="logo">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 180"
					><path
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

		<!-- <nav>
			<svg viewBox="0 0 2 3" aria-hidden="true">
				<path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
			</svg>
			<ul>
				<li class:active={$page.path === '/'}><a sveltekit:prefetch href="/">Home</a></li>
				<li class:active={$page.path === '/about'}>
					<a sveltekit:prefetch href="/about">About</a>
				</li>
				<li class:active={$page.path === '/todos'}>
					<a sveltekit:prefetch href="/todos">Todos</a>
				</li>
			</ul>
			<svg viewBox="0 0 2 3" aria-hidden="true">
				<path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
			</svg>
		</nav> -->

		<div class="links">
			<ul>
				<li>
					<a href="https://github.com/kvnang" target="_blank" rel="noopener noreferrer">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32.58 31.77" width="33" height="32"
							><path
								fill="#fff"
								fill-rule="evenodd"
								d="M16.29 0a16.29 16.29 0 0 0-5.15 31.75c.82.15 1.11-.36 1.11-.79v-2.77C7.7 29.18 6.74 26 6.74 26a4.36 4.36 0 0 0-1.81-2.39c-1.47-1 .12-1 .12-1a3.43 3.43 0 0 1 2.49 1.68 3.48 3.48 0 0 0 4.74 1.36 3.46 3.46 0 0 1 1-2.18c-3.62-.41-7.42-1.81-7.42-8a6.3 6.3 0 0 1 1.67-4.37 5.94 5.94 0 0 1 .16-4.31s1.37-.44 4.48 1.67a15.41 15.41 0 0 1 8.16 0c3.11-2.11 4.47-1.67 4.47-1.67a5.91 5.91 0 0 1 .2 4.28 6.3 6.3 0 0 1 1.67 4.37c0 6.26-3.81 7.63-7.44 8a3.85 3.85 0 0 1 1.11 3v4.47c0 .53.29.94 1.12.78A16.29 16.29 0 0 0 16.29 0Z"
							/></svg
						>
					</a>
				</li>
			</ul>
		</div>
	</div>
</header>

<style lang="scss">
	.container {
		display: flex;
		justify-content: space-between;
		padding-top: 1.5rem;
		padding-bottom: 1.5rem;
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.logo {
		svg {
			height: 2rem;
			width: auto;

			path {
				transition: var(--transition);
			}
		}
		&:hover {
			path {
				&:first-child {
					fill: var(--color-accent);
				}
				&:last-child {
					opacity: 1;
				}
			}
		}
	}

	.links {
		ul {
			list-style: none;
			display: flex;
			margin: -0.625rem;

			li {
				padding: 0.625rem;
			}
		}
		svg {
			height: 1.5rem;
			width: auto;
		}

		a {
			opacity: 0.75;
			transition: opacity var(--transition);

			&:hover {
				opacity: 1;
			}
		}
	}

	a:hover {
		color: var(--accent-color);
	}
</style>
