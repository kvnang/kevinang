<script lang="ts">
	import { flip } from 'svelte/animate';
	import { fly } from 'svelte/transition';
	import { notifications } from './notifications';
</script>

<div class="notifications">
	{#each $notifications as notification (notification.id)}
		<div animate:flip class="toast toast--{notification.type}" transition:fly={{ y: -30 }}>
			<div class="icon">
				{#if notification.type === 'success'}
					<svg xmlns="http://www.w3.org/2000/svg" height="48" width="48" viewBox="0 0 48 48">
						<path
							d="M18.9 35.7 7.7 24.5l2.15-2.15 9.05 9.05 19.2-19.2 2.15 2.15Z"
							fill="currentColor"
						/>
					</svg>
				{/if}
				{#if notification.type === 'error'}
					<svg xmlns="http://www.w3.org/2000/svg" height="48" width="48" viewBox="0 0 48 48"
						><path d="M22.5 29V10h3v19Zm0 9v-3h3v3Z" fill="currentColor" /></svg
					>
				{/if}
			</div>
			<div class="content">
				<h5 class="message">{notification.message}</h5>
				{#if notification.submessage}
					<p class="submessage">{notification.submessage}</p>
				{/if}
			</div>
			{#if notification.icon}<i class={notification.icon} />{/if}
		</div>
	{/each}
</div>

<style lang="scss">
	.notifications {
		position: fixed;
		top: 1rem;
		left: 0;
		right: 0;
		margin: 0 auto;
		padding: 0;
		z-index: 9999;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
	}

	.toast {
		flex: 0 0 auto;
		margin-bottom: 1rem;
		box-shadow: var(--shadow-1);
		background-color: var(--white);
		border-radius: 0.5rem;
		display: flex;
		align-items: center;
		padding: 1rem;

		&--success {
			--toast-color: var(--color-success);
		}

		&--error {
			--toast-color: var(--color-error);
		}
	}

	.icon {
		height: 2rem;
		width: 2rem;
		margin-right: 1rem;
		padding: 0.25rem;
		border-radius: 50%;
		background-color: var(--toast-color);
		display: flex;
		align-items: center;
		justify-content: center;
		color: var(--white);

		svg {
			height: 100%;
			width: 100%;
		}
	}

	.content {
		--color-h: var(--black);

		display: block;
		color: var(--black);
	}

	.message {
		font-weight: 600;
	}

	.submessage {
		font-size: var(--font-size-sm);
		color: var(--gray);
	}
</style>
