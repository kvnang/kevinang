<script lang="ts">
	import Header from '$lib/header/Header.svelte';
	import Footer from '$lib/footer/Footer.svelte';
	import '../app.scss';
</script>

<Header />

<main>
	<slot />
</main>

<Footer />

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
	}
</style>
