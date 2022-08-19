<script lang="ts">
	import Header from '$lib/header/Header.svelte';
	import Footer from '$lib/footer/Footer.svelte';
	import Toast from '$lib/toast/Toast.svelte';
	import '../styles/app.scss';
	import { onMount } from 'svelte';

	// Accessibility Features
	// Let the document know when the mouse is being used
	const mousedownListener = () => {
		document.body.classList.add('is-mouse');
		document.body.classList.remove('is-keyboard');
	};

	// Re-enable focus styling when Tab is pressed
	const keydownListener = (e: KeyboardEvent) => {
		if (e.key === 'Tab') {
			document.body.classList.remove('is-mouse');
			document.body.classList.add('is-keyboard');
		}
	};

	onMount(() => {
		document.body.addEventListener('mousedown', mousedownListener);
		document.body.addEventListener('touchstart', mousedownListener);
		document.body.addEventListener('keydown', keydownListener, true);

		return () => {
			document.body.removeEventListener('mousedown', mousedownListener);
			document.body.removeEventListener('touchstart', mousedownListener);
			document.body.removeEventListener('keydown', keydownListener, true);
		};
	});
</script>

<svelte:head />

<div class="site-content">
	<Header />
	<main>
		<slot />
	</main>
	<Footer />
	<Toast />
</div>

<style lang="scss">
	.site-content {
		flex: 1;
		display: flex;
		flex-direction: column;
		overflow-x: hidden;
	}
</style>
