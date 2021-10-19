<script lang="ts">
	import Header from '$lib/header/Header.svelte';
	import Footer from '$lib/footer/Footer.svelte';
	import '../app.scss';
</script>

<div class="site-content">
	<Header />

	<main>
		<slot />
	</main>

	<Footer />
</div>

<style>
	.site-content {
		flex: 1;
		display: flex;
		flex-direction: column;
		overflow-x: hidden;
	}
</style>
