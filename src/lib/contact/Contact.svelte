<script context="module" lang="ts">
	import { enhance } from '$lib/form';
	import { notifications } from '../toast/notifications';
</script>

<section class="container section-m-b">
	<div class="inner">
		<div class="text">
			<h2 class="h2">Contact</h2>
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
				action="/contact"
				method="POST"
				enctype="application/x-www-form-urlencoded"
				name="contact"
				data-netlify="true"
				netlify-honeypot="company"
				use:enhance={{
					pending: ({ form }) => {
						const { elements } = form;

						for (let i = 0; i < elements.length; i++) {
							const element = elements.item(i);
							if (!element) continue;
							element.setAttribute('disabled', 'true');
						}
					},
					error: async ({ form, error, response }) => {
						const { elements } = form;

						for (let i = 0; i < elements.length; i++) {
							const element = elements.item(i);
							if (!element) continue;
							element.removeAttribute('disabled');
						}

						notifications.error(
							'There has been an error sending your message.',
							`Error: ${error?.message || (await response?.text()) || 'Unknown error'}`,
							6000
						);
					},
					result: async ({ form }) => {
						const { elements } = form;

						for (let i = 0; i < elements.length; i++) {
							const element = elements.item(i);
							if (!element) continue;
							element.classList.remove('has-value');
							element.removeAttribute('disabled');
						}

						form.reset();

						notifications.success(
							'Your message has been sent!',
							`Please don't expect instant reply, but will get back to you as soon as I can.`,
							6000
						);
					}
				}}
			>
				<input type="hidden" name="form-name" value="contact" />
				<div style="display:none;">
					<label>
						Don’t fill this out if you’re human: <input name="company" type="text" />
					</label>
				</div>
				<div class="form-fields">
					<div class="form-field form-field--half">
						<label for="name">
							<input
								type="text"
								id="name"
								name="name"
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
						<label for="email">
							<input
								type="email"
								id="email"
								name="email"
								autocomplete="email"
								required
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
						<label for="message">
							<textarea
								id="message"
								name="message"
								required
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
							<span class="button-text h6">Send</span>
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
		background-color: var(--color-bg-tint-0);
		padding: 1.5rem;
		margin: 0 -1.5rem;

		@include breakpoint($tablet-sm) {
			padding: 2rem;
			margin: 0 -2rem;
		}

		@include breakpoint($laptop-sm) {
			padding: 4rem;
			margin: 0;
		}

		.text {
			flex: 0 0 100%;
			max-width: 100%;
			margin-bottom: var(--section-spacing);

			@include breakpoint($tablet-sm) {
				flex: 0 0 50%;
				max-width: 50%;
				margin-bottom: 0;
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
		align-items: center;
		transition: color var(--transition);
		border: 1px solid currentColor;
		padding: 0.75rem 1.5rem;
		border-radius: 1.5rem;

		span {
			transform: translateY(0.1em); // Font weirdness
		}

		.button-icon {
			margin-left: 0.5rem;
			width: 1rem;
			height: 1rem;
			position: relative;
			height: inherit;

			svg {
				height: 1rem;
				width: 1rem;
				position: absolute;
				top: 50%;
				left: 0;
				transform: translate(var(--translateX), -50%);
				transition: var(--transition);

				&:first-of-type {
					--translateX: 0;

					opacity: 1;
					color: var(--color-p);
					transition-delay: 0.25s;
				}

				&:last-of-type {
					--translateX: -100%;

					opacity: 0;
					color: var(--color-accent);
				}
			}
		}

		&:hover,
		&:focus {
			color: var(--color-accent);

			.button-icon {
				svg {
					&:first-of-type {
						--translateX: 100%;

						opacity: 0;
						transition-delay: 0s;
					}
					&:last-of-type {
						--translateX: 0;

						opacity: 1;
						transition-delay: 0.25s;
					}
				}
			}
		}

		&[disabled],
		&:disabled {
			opacity: 0.5;
			pointer-events: none;
		}
	}
</style>
