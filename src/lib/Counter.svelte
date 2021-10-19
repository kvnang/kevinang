<script lang="ts">
	import { onMount, beforeUpdate } from 'svelte';
	import { spring } from 'svelte/motion';
	export let pause: boolean;

	let count = 0;

	const text = ['full-stack web dev', 'father of two', 'coffee enthusiast'];

	const displayed_count = spring();
	$: displayed_count.set(count);
	$: offset = modulo($displayed_count, 1);

	function modulo(n: number, m: number) {
		// handle negative numbers
		return ((n % m) + m) % m;
	}

	function nextSlide() {
		// if (!pause) {
		// 	setTimeout(nextSlide, 1000);
		// }
		return $displayed_count < text.length - 1 ? (count += 1) : (count = 0);
	}

	// setTimeout(nextSlide, 1000);

	let timer: ReturnType<typeof setTimeout>;

	function maybePlaySlider(pause: boolean, count) {
		if (!pause) {
			timer = setTimeout(nextSlide, 5000);
		} else {
			clearTimeout(timer);
		}
	}

	$: maybePlaySlider(pause, count);
</script>

<span class="counter">
	<span class="counter-viewport">
		<span class="counter-digits" style="transform: translate(0, -{100 * offset}%)">
			<strong style="top: 100%; opacity: {offset};" aria-hidden="true"
				>{text[Math.floor($displayed_count + 1)] || text[1]}.</strong
			>
			<strong style="opacity: {1 - offset}">{text[Math.floor($displayed_count)] || text[0]}.</strong
			>
		</span>
	</span>
</span>

<style lang="scss">
	.counter {
		display: inline-flex;
		vertical-align: baseline;
		height: 100%;
	}

	.counter-viewport {
		width: 9em;
		height: 1.25em;
		display: block;
		overflow: hidden;
		text-align: center;
		position: relative;
	}

	.counter-viewport strong {
		position: absolute;
		display: flex;
		width: 100%;
		height: 100%;
		/* font-weight: 400; */
		/* color: var(--accent-color); */
		/* font-size: 4rem; */
		align-items: center;
		justify-content: flex-start;
		white-space: nowrap;
		color: var(--color-accent);
	}

	.counter-digits {
		position: absolute;
		display: block;
		width: 100%;
		height: 100%;
	}
</style>
