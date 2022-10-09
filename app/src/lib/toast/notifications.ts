import { writable, derived } from 'svelte/store';

const TIMEOUT = 3000;

interface Notification {
	id: string;
	type: string;
	message: string;
	submessage?: string;
	timeout: number;
}

function id() {
	return '_' + Math.random().toString(36).substring(2, 9);
}

function createNotificationStore() {
	const _notifications = writable<Notification[]>([]);

	function send(message: string, submessage?: string, type = 'default', timeout: number = TIMEOUT) {
		_notifications.update((state) => {
			return [...state, { id: id(), type, message, submessage, timeout }];
		});
	}

	// const timers = [];

	const notifications = derived(_notifications, ($_notifications, set) => {
		set($_notifications);
		if ($_notifications.length > 0) {
			const timer = setTimeout(() => {
				_notifications.update((state) => {
					state.shift();
					return state;
				});
			}, $_notifications[0].timeout);
			return () => {
				clearTimeout(timer);
			};
		}
	});
	const { subscribe } = notifications;

	return {
		subscribe,
		send,
		default: (msg: string, submsg?: string, timeout?: number) =>
			send(msg, submsg, 'default', timeout),
		error: (msg: string, submsg?: string, timeout?: number) => send(msg, submsg, 'error', timeout),
		warning: (msg: string, submsg?: string, timeout?: number) =>
			send(msg, submsg, 'warning', timeout),
		info: (msg: string, submsg?: string, timeout?: number) => send(msg, submsg, 'info', timeout),
		success: (msg: string, submsg?: string, timeout?: number) =>
			send(msg, submsg, 'success', timeout)
	};
}

export const notifications = createNotificationStore();
