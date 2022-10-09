<script lang="ts">
	import { fly } from 'svelte/transition';

	export let bg: string;
	export let color = 'var(--color-bg)';
	export let title: string;
	export let top: number;
	export let left: number;
	export let right = 0;
	export let delay = 0;
</script>

<li
	class="cube"
	style="--top:{top};--right:{right};--left:{left}"
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
			<img src={bg} alt={title} width="67" height="67" />
		</div>
	</div>
</li>

<style lang="scss">
	.cube {
		position: absolute;
		top: calc(
			(var(--top) * var(--cube-size)) + (var(--left) * var(--cube-size) / 3) +
				(var(--right) * -42px)
		);
		left: calc(var(--left) * var(--cube-size) + var(--right) * 44px);
	}

	.inner {
		width: var(--cube-size);
		height: var(--cube-size);
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
		transform: translateZ(calc(var(--cube-size) * -1));
		background: var(--color-bg-tint-2);
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
		width: var(--cube-size);
		transform: translateZ(0) rotateY(90deg);
		transform-origin: left;
		background: var(--color-bg-tint);
	}

	.back {
		transform: translateY(-80%) rotateX(90deg);
		transform-origin: bottom;
		overflow: hidden;
		background-color: var(--color-bg);
	}
</style>
