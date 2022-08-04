<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import Hero from '$lib/hero/Hero.svelte';
	import Stacks from '$lib/stacks/Stacks.svelte';
	// import Projects from '$lib/projects/Projects.svelte';
	import Contact from '$lib/contact/Contact.svelte';
</script>

<svelte:head>
	<title>Kevin Ang • JavaScript Web Developer</title>
	<meta
		name="description"
		content="I'm a full-stack web developer from Indonesia who enjoys tinkering with JS, IoT, and the edge."
	/>
</svelte:head>

<Hero />
<Stacks />
<!-- <Projects /> -->
<Contact />
