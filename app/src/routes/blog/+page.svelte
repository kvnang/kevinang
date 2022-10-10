<script lang="ts">
	import PostEntry from '$lib/posts/PostEntry.svelte';
	import Seo from '$lib/seo/Seo.svelte';

	export let data;

	const {
		props: { posts }
	} = data;
</script>

<Seo title="Blog" description="Explore contents on web development, hacks, and life." />
<section class="section section-m-t section-m-b header">
	<div class="inner">
		<h1>Blog</h1>
		<p>Explore contents on web development, hacks, and life.</p>
	</div>
</section>
<section class="section section-m-b--lg">
	<div class="inner">
		<ul>
			{#each posts as post}
				<li>
					<PostEntry {post} />
				</li>
			{/each}
		</ul>
	</div>
</section>

<style lang="scss">
	.inner {
		grid-column: narrow;
	}

	.header {
		text-align: center;

		.inner {
			border-bottom: 2px solid var(--color-bg-tint);
			padding-bottom: var(--section-spacing);
		}
	}
</style>
