<script lang="ts">
	import { onMount, onDestroy } from 'svelte';

	let string = `👋 My name is Kevin Ang`;
	let container: HTMLSpanElement;

	let i = 0;
	let speed = 50;

	let blinker = true;
	let blinkerBlink = true;

	let timeout: ReturnType<typeof setTimeout>;
	let timeout2: ReturnType<typeof setTimeout>;

	function typeWriter() {
		const stringArray = [...string];

		if (i < stringArray.length) {
			blinkerBlink = false;
			container.innerHTML += stringArray[i];
			i++;
			timeout = setTimeout(typeWriter, speed);
		} else {
			blinkerBlink = true;

			timeout2 = setTimeout(() => {
				blinker = false;
			}, 5000);
		}
	}

	onMount(() => {
		timeout = setTimeout(typeWriter, 1000);
	});

	onDestroy(() => {
		clearTimeout(timeout);
		clearTimeout(timeout2);
	});
</script>

<span
	class="{blinker ? 'blinker' : ''} {blinker && blinkerBlink ? 'blinker--on' : ''}"
	aria-label={string}
	aria-hidden="true"
	bind:this={container}
>
	<span class="intro">✗&nbsp;</span>
</span>

<style lang="scss">
	.intro {
		color: var(--color-accent);
	}
	.blinker {
		&::after {
			content: '\2009';
			background-color: var(--color-accent);
			display: inline-block;
		}

		&--on {
			&::after {
				animation: blink 1s infinite;
			}
		}

		@keyframes blink {
			0% {
				opacity: 1;
			}
			40% {
				opacity: 1;
			}
			50% {
				opacity: 0;
			}
			100% {
				opacity: 0;
			}
		}
	}
</style>
