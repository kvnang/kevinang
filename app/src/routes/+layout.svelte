<script lang="ts">
	import NProgress from 'nprogress';
	import Header from '$lib/header/Header.svelte';
	import Footer from '$lib/footer/Footer.svelte';
	import Toast from '$lib/toast/Toast.svelte';
	import { onDestroy, onMount } from 'svelte';
	import '@fontsource/jetbrains-mono/400.css';
	import '@fontsource/bitter/variable.css';
	import 'normalize.css';
	import 'nprogress/nprogress.css';
	import '../styles/app.scss';
	import { browser } from '$app/environment';
	import { navigating } from '$app/stores';
	// import { afterNavigate, beforeNavigate } from '$app/navigation';

	NProgress.configure({
		// Full list: https://github.com/rstacruz/nprogress#configuration
		minimum: 0.16
	});

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
		if (browser) {
			document.body.addEventListener('mousedown', mousedownListener);
			document.body.addEventListener('touchstart', mousedownListener);
			document.body.addEventListener('keydown', keydownListener, true);
		}
	});

	onDestroy(() => {
		if (browser) {
			document.body.removeEventListener('mousedown', mousedownListener);
			document.body.removeEventListener('touchstart', mousedownListener);
			document.body.removeEventListener('keydown', keydownListener, true);
		}
	});

	// beforeNavigate((navigation) => {
	// 	console.log('before', navigation);
	// 	NProgress.start();
	// });

	// afterNavigate((navigation) => {
	// 	console.log('after', navigation);

	// 	NProgress.done();
	// });
</script>

<svelte:head />

<div class="site-content">
	<Header />
	<main>
		<slot />
	</main>
	<Footer />
</div>
<Toast />

<style lang="scss">
	.site-content {
		flex: 1;
		display: flex;
		flex-direction: column;
		overflow-x: hidden;
	}
</style>
