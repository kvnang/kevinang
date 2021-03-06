<script context="module" lang="ts">
	import { enhance } from '$lib/form';
	import type { Load } from '@sveltejs/kit';

	// see https://kit.svelte.dev/docs#loading
	export const load: Load = async ({ fetch }) => {
		const res = await fetch('/todos.json');

		if (res.ok) {
			const todos = await res.json();

			return {
				props: { todos }
			};
		}

		const { message } = await res.json();

		return {
			error: new Error(message)
		};
	};
</script>

<section class="container section-m-b">
	<div class="inner">
		<div class="text">
			<h2 class="h1">Contact</h2>
			<p>Feel free to reach out to me!</p>
			<div class="email">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					height="24px"
					viewBox="0 0 24 24"
					width="24px"
					fill="currentColor"
					><path d="M0 0h24v24H0z" fill="none" /><path
						d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
					/></svg
				>
				<a href="mailto:ka@kevinang.com" target="_blank" rel="noopener noreferrer" class="h5"
					>ka@kevinang.com</a
				>
			</div>
		</div>
		<div class="form">
			<form
				class="new"
				action="/contact.json"
				method="POST"
				use:enhance={{
					result: async (res, form) => {
						const submitted = await res.json();
						form.reset();
						Array.from(form.elements).forEach((el) => el.classList.remove('has-value'));
					}
				}}
			>
				<div class="form-fields">
					<div class="form-field form-field--half">
						<label for="contactname">
							<input
								id="contactname"
								name="text"
								autocomplete="name"
								on:change={(e) =>
									e.currentTarget.value
										? e.currentTarget.classList.add('has-value')
										: e.currentTarget.classList.remove('has-value')}
							/>
							<span class="label">Name</span>
							<div class="underline" />
						</label>
					</div>
					<div class="form-field form-field--half">
						<label for="contactemail">
							<input
								id="contactemail"
								name="email"
								autocomplete="email"
								on:change={(e) =>
									e.currentTarget.value
										? e.currentTarget.classList.add('has-value')
										: e.currentTarget.classList.remove('has-value')}
							/>
							<span class="label">Email</span>
							<div class="underline" />
						</label>
					</div>
					<div class="form-field">
						<label for="contactmessage">
							<textarea
								id="contactmessage"
								name="message"
								on:change={(e) =>
									e.currentTarget.value
										? e.currentTarget.classList.add('has-value')
										: e.currentTarget.classList.remove('has-value')}
							/>
							<span class="label">Message</span>
							<div class="underline" />
						</label>
					</div>
					<div class="form-field form-field--submit">
						<button type="submit">
							<span class="button-text">Send</span>
							<div class="button-icon">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									height="24px"
									viewBox="0 0 24 24"
									width="24px"
									fill="currentcolor"
									><path d="M0 0h24v24H0z" fill="none" /><path
										d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"
									/></svg
								>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									height="24px"
									viewBox="0 0 24 24"
									width="24px"
									fill="currentcolor"
									><path d="M0 0h24v24H0z" fill="none" /><path
										d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"
									/></svg
								>
							</div>
						</button>
					</div>
				</div>
			</form>
		</div>
	</div>
</section>

<style lang="scss">
	@import '../../styles/global-imports';

	.inner {
		display: flex;
		flex-flow: wrap;

		.text {
			flex: 0 0 100%;
			max-width: 100%;
			margin-bottom: var(--section-spacing);

			@include breakpoint($tablet-sm) {
				flex: 0 0 50%;
				max-width: 50%;
			}

			@include breakpoint($laptop-sm) {
				flex: 0 0 40%;
				max-width: 40%;
			}
		}

		.form {
			flex: 0 0 100%;
			max-width: 100%;

			@include breakpoint($tablet-sm) {
				flex: 0 0 50%;
				max-width: 50%;
			}

			@include breakpoint($laptop-sm) {
				flex: 0 0 60%;
				max-width: 60%;
			}
		}
	}

	.email {
		display: flex;
		align-items: center;

		svg {
			height: 1.25rem;
			width: auto;
			margin-right: 1rem;
		}
	}

	button[type='submit'] {
		color: var(--color-p);
		display: inline-flex;
		align-items: stretch;
		font-weight: 700;
		transition: color var(--transition);
		border: 1px solid currentColor;
		padding: 0.75rem 1.5rem;
		border-radius: 1.5rem;

		.button-icon {
			margin-left: 1rem;
			width: 1.25rem;
			position: relative;
			height: inherit;

			svg {
				height: 1.25rem;
				width: 100%;
				position: absolute;
				top: 50%;
				left: 0;
				transform: translate(var(--translateX), -50%);
				transition: var(--transition);

				&:first-of-type {
					opacity: 1;
					color: var(--color-p);
					--translateX: 0;
					transition-delay: 0.25s;
				}

				&:last-of-type {
					opacity: 0;
					color: var(--color-accent);
					--translateX: -100%;
				}
			}
		}

		&:hover {
			color: var(--color-accent);

			.button-icon {
				svg {
					&:first-of-type {
						opacity: 0;
						--translateX: 100%;
						transition-delay: 0s;
					}
					&:last-of-type {
						opacity: 1;
						--translateX: 0;
						transition-delay: 0.25s;
					}
				}
			}
		}
	}
</style>
