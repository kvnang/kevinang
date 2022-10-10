/**
 * Can be made globally available by placing this
 * inside `global.d.ts` and removing `export` keyword
 */

declare global {
	interface Window {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		turnstile?: any;
		onloadTurnstileCallback?: () => void;
	}
}

export interface Locals {
	userid: string;
}
