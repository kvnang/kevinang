<script lang="ts">
	import { fly } from 'svelte/transition';

	export let bg: string;
	export let color: string = 'var(--color-bg)';
	export let title: string;
	export let top: number;
	export let left: number;
	export let right: number = 0;
	export let delay: number = 0;
</script>

<div
	class="cube"
	style="top: {top * 80 + (left * 80) / 3 + right * -42}px; left: {left * 80 + right * 44}px; "
	transition:fly={{
		y: -100,
		duration: 1000,
		delay: Math.floor(Math.random() * 1000) + delay
	}}
>
	<div class="inner">
		<div class="side back" />
		<div class="side top" />
		<div class="side right" />
		<div class="side front" style="background-color: {color}">
			<img src={bg} alt={title} />
		</div>
	</div>
</div>

<style lang="scss">
	.cube {
		position: absolute;
	}

	.inner {
		width: 80px;
		height: 80px;
		transform-style: preserve-3d;
		transform: rotateX(240deg) rotateY(0deg) rotateZ(-210deg);
	}

	.side {
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		position: absolute;
		border-radius: 15%;
	}

	.top {
		transform: translateZ(-80px);
		background: hsl(256, 46%, 30%);
	}

	.front {
		transform: rotateX(90deg);
		transform-origin: bottom;
		overflow: hidden;
		padding: 10px;
		display: flex;
		align-items: center;
		justify-content: center;

		img {
			transform: scaleX(-1);
			height: 100%;
			width: 100%;
			/* transform-origin: center; */
		}
	}

	.right {
		width: 80px;
		transform: translateZ(0) rotateY(90deg);
		transform-origin: left;
		background: hsl(256, 46%, 20%);
	}

	.back {
		transform: translateY(-80%) rotateX(90deg);
		transform-origin: bottom;
		overflow: hidden;
		background-color: var(--color-bg);
	}
</style>
