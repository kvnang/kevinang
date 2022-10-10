<script lang="ts">
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';

	export let once = false;
	export let top = 0;
	export let bottom = 0;
	export let left = 0;
	export let right = 0;

	export let intersecting = false;
	let container: HTMLDivElement;

	const scrollHandler = () => {
		if (typeof IntersectionObserver === 'undefined') {
			const bcr = container.getBoundingClientRect();
			intersecting =
				bcr.bottom + bottom > 0 &&
				bcr.right + right > 0 &&
				bcr.top - top < window.innerHeight &&
				bcr.left - left < window.innerWidth;

			if (intersecting && once) {
				window.removeEventListener('scroll', scrollHandler);
			}
		}
	};

	onMount(() => {
		if (!browser) {
			intersecting = true;
			return;
		}

		let observer: IntersectionObserver | null = null;

		if (typeof IntersectionObserver !== 'undefined') {
			const rootMargin = `${bottom}px ${left}px ${top}px ${right}px`;

			observer = new IntersectionObserver(
				(entries) => {
					intersecting = entries[0].isIntersecting;
					if (intersecting && once) {
						observer.unobserve(container);
					}
				},
				{
					rootMargin
				}
			);

			observer.observe(container);
		} else {
			const bcr = container.getBoundingClientRect();
			intersecting =
				bcr.bottom + bottom > 0 &&
				bcr.right + right > 0 &&
				bcr.top - top < window.innerHeight &&
				bcr.left - left < window.innerWidth;

			if (intersecting && once) {
				window.removeEventListener('scroll', scrollHandler);
			}
		}

		return () => {
			if (!browser) return;

			if (observer) {
				observer.unobserve(container);
			}

			window.removeEventListener('scroll', scrollHandler);
		};
	});
</script>

<div bind:this={container}>
	<slot {intersecting} />
</div>

<style>
	div {
		width: 100%;
		height: 100%;
	}
</style>
