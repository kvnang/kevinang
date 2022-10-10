<script>
	import Seo from '$lib/seo/Seo.svelte';

	export let data;

	const {
		props: { post }
	} = data;

	const frontmatter = post.metadata;
	const content = post.default;

	const { title, date, excerpt } = frontmatter;
	const dateString = new Date(date).toLocaleString('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	});
	const dateYmd = new Date(date).toISOString().slice(0, 10);
</script>

<Seo {title} description={excerpt} />
<article>
	<section class="section section-m-t--sm section-m-b">
		<div class="wrapper">
			<div class="inner">
				<div class="meta">
					<time datetime={dateYmd}><code>{dateString}</code></time>
				</div>
				<h1 class="title mt-0">{title}</h1>
				<div class="content">
					<svelte:component this={content} />
				</div>
			</div>
		</div>
	</section>
</article>

<style lang="scss">
	.wrapper {
		grid-column: standard;

		.inner {
			max-width: 48rem;
			margin: 0 auto;
		}
	}

	.meta {
		margin-bottom: 1rem;

		code {
			color: var(--color-p-0);
		}
	}

	/* .title {
		em {
			color: var(--color-accent);
		}
	} */

	.content {
		:global {
			strong {
				color: var(--color-h);
			}
			img {
				@include breakpoint($laptop-sm) {
					margin-left: -4rem;
					margin-right: -4rem;
					max-width: calc(100% + 8rem);
					width: calc(100% + 8rem);
				}
			}

			ol {
				counter-reset: item;

				> li {
					&::before {
						content: counter(item) '.';
						counter-increment: item;
					}

					ol {
						li::before {
							content: counter(item, lower-latin) '.';
						}
					}
				}
			}

			ul {
				> li {
					&::before {
						content: '•';
						color: var(--color-accent);
					}

					> ul {
						> li {
							&::before {
								content: '–';
								color: var(--color-accent);
							}
						}
					}
				}
			}

			ol,
			ul {
				list-style: none;
				margin-top: var(--p-break);
				margin-bottom: var(--p-break);

				&:first-child {
					margin-top: 0;
				}

				&:last-child {
					margin-bottom: 0;
				}

				> li {
					position: relative;
					padding-left: 1.5em;
					margin-bottom: var(--li-break);

					&::before {
						width: 1em;
						text-align: left;
						position: absolute;
						left: 0.25em;
					}

					&:last-of-type {
						margin-bottom: 0;
					}

					> ol,
					> ul {
						margin-top: var(--li-break);
					}
				}

				&.no-bullets {
					> li {
						padding-left: 0;

						&::before {
							content: none;
						}
					}
				}
			}

			code {
				background-color: var(--color-bg-tint);
				padding: 0.25rem 0.5rem;
				font-size: var(--font-size-sm);
				border-radius: 0.25rem;
			}

			pre {
				background-color: var(--color-bg-tint);
				box-shadow: none;
				border-radius: 0.5rem;
				padding: 1rem;
				margin-bottom: 1.5rem;
				tab-size: 2rem;

				&:last-child {
					margin-bottom: 0;
				}

				code {
					background-color: transparent;
					border-radius: none;
				}

				.token {
					&.class-name {
						color: var(--color-accent);
					}
					&.keyword,
					&.number,
					&.boolean {
						color: #93c5fd;
					}
					&.function {
						color: #c084fc;
					}
					&.builtin {
						color: #fcd34d;
					}
					&.operator {
						color: #f87171;
					}
					&.comment,
					&.punctuation {
						color: #64748b;
					}
					&.string {
						color: #86efac;
					}
				}

				&.language-yaml {
					color: #86efac;
					.token {
						&.key,
						&.punctuation {
							color: #f87171;
						}
					}
				}
			}
		}
	}
</style>
