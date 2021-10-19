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

		<div class="corner">
			<!-- TODO put something else here? github link? -->
		</div>
	</div>
</header>

<style lang="scss">
	.container {
		display: flex;
		justify-content: space-between;
	}

	.corner {
		/* width: 3em;
		height: 3em; */
		padding: 1rem 0;
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.corner img {
		width: auto;
		height: 2em;
		/* object-fit: contain; */
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

	nav {
		display: flex;
		justify-content: center;
		--background: rgba(255, 255, 255, 0.7);
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	li.active::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--accent-color);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 1em;
		color: var(--heading-color);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--accent-color);
	}
</style>
