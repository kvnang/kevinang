<script lang="ts">
	export let post;

	const { metadata: frontmatter, slug } = post;

	const { title, date, excerpt } = frontmatter;
	const dateString = new Date(date).toLocaleString('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	});
	const dateYmd = new Date(date).toISOString().slice(0, 10);
</script>

<article>
	<div class="wrapper">
		<div class="inner">
			<span class="date font-mono"><time datetime={dateYmd}>{dateString}</time></span>
			<h4 class="title">
				<a href={`/blog/${slug}`}>
					{title}
				</a>
			</h4>
			<p>{excerpt}</p>
		</div>
	</div>
</article>

<style lang="scss">
	article {
		text-align: center;
		display: flex;
		justify-content: center;
	}

	.wrapper {
		position: relative;
		z-index: 0;
		padding: 1.5rem 3rem;
		margin: 0 -3rem;

		@include breakpoint($tablet-sm) {
			padding: 1.5em;
			margin: 0;
		}

		&::before {
			content: '';
			position: absolute;
			z-index: -1;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background-color: var(--color-bg-tint);
			opacity: 0;
			transform: scale(0.98);
			transition: opacity var(--transition), transform var(--transition);
			border-radius: 1rem;
		}

		&:hover {
			&::before {
				opacity: 1;
				transform: scale(1);
			}
		}
	}

	.inner {
		max-inline-size: var(--size-content-3);
	}

	.date {
		font-size: var(--font-size-h6);
		color: var(--color-p-0);
	}

	.title {
		margin-top: 0.5rem;
	}

	a {
		--color-link: var(--white);

		&::before {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
		}
	}
</style>
