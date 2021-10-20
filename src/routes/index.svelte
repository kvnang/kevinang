<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import Hero from '$lib/hero/Hero.svelte';
	import Stacks from '$lib/stacks/Stacks.svelte';
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<Hero />
<Stacks />
