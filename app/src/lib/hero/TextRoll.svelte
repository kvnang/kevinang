<script lang="ts">
	import { fly } from 'svelte/transition';
	import { onMount } from 'svelte';
	export let pause: boolean;

	const words = ['full-stack dev', 'father of two', 'coffee enthusiast'];
	let current = 0;

	let timer: ReturnType<typeof setInterval>;

	function maybePlaySlider(pause: boolean) {
		if (!pause) {
			timer = setInterval(() => {
				current = current + 1 === words.length ? 0 : current + 1;
			}, 2500);
		} else {
			clearInterval(timer);
		}
	}

	onMount(() => {
		maybePlaySlider(pause);

		return () => {
			clearInterval(timer);
		};
	});
</script>

<span class="counter">
	<span class="counter-viewport">
		{#each words as word, i}
			{#if i === current}
				<strong
					class="words"
					in:fly|local={{ y: -30, duration: 500, delay: 500 }}
					out:fly|local={{ y: 30, duration: 500, delay: 500 }}>{word}</strong
				>
			{/if}
		{/each}
	</span>
</span>

<style lang="scss">
	.counter {
		display: inline-flex;
		vertical-align: baseline;
		height: 100%;
		max-width: 100%;
	}

	.words {
		height: 0;
		width: 0;
	}

	.counter-viewport {
		width: 13ch;
		max-width: 100%;
		height: 1.25em;
		display: block;
		overflow: hidden;
		text-align: left;
		position: relative;
	}

	.counter-viewport strong {
		font-weight: 600;
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
		/* font-weight: normal; */
		/* font-style: italic; */
	}

	/* .counter-digits {
		position: absolute;
		display: block;
		width: 100%;
		height: 100%;
	} */
</style>
