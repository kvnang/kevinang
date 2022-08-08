<script lang="ts">
	import { onMount } from 'svelte';

	let string = `👋 I'm Kevin Ang`;
	let container: HTMLSpanElement;

	let i = 0;
	let speed = 100;

	let blinker = true;
	let blinkerBlink = true;

	function typeWriter() {
		const stringArray = [...string];

		if (i < stringArray.length) {
			blinkerBlink = false;
			container.innerHTML += stringArray[i];
			i++;
			setTimeout(typeWriter, speed);
		} else {
			blinkerBlink = true;

			setTimeout(() => {
				blinker = false;
			}, 5000);
		}
	}

	onMount(() => {
		setTimeout(typeWriter, 1000);
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
