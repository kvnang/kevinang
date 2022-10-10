import type { RequestHandler } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';

/**
 * @see https://developers.cloudflare.com/turnstile/get-started/server-side-validation/
 */
type TurnstileErrorCode =
	| 'missing-input-secret'
	| 'invalid-input-secret'
	| 'missing-input-response'
	| 'invalid-input-response'
	| 'bad-request'
	| 'unknown-error'
	| 'timeout-or-duplicate'
	| 'internal-error';

/**
 * @see https://developers.cloudflare.com/turnstile/get-started/server-side-validation/
 */
interface TurnstileResponse {
	/** Whether the validation is successful or not. */
	success: boolean;
	/** The ISO timestamp for the time the challenge was solved. */
	challenge_ts: string;
	/** The hostname for which the challenge was served. */
	hostname: string;
	'error-codes': TurnstileErrorCode[] | [];
	/** The customer widget identifier passed to the widget on the client side. This is used to differentiate widgets using the same sitekey in analytics. Its integrity is protected by modifications from an attacker. It is recommended to validate that the action matches an expected value. */
	action: string;
	/** The customer data passed to the widget on the client side. This can be used by the customer to convey state. It is integrity protected by modifications from an attacker. */
	cdata: string;
}

const encode = (formData: FormData) => {
	const params = new URLSearchParams();
	for (const pair of formData.entries()) {
		typeof pair[1] == 'string' && params.append(pair[0], pair[1]);
	}
	return params.toString();
};

const turnstileVerify = async (request: Request, formData: FormData) => {
	// Turnstile injects a token in "cf-turnstile-response".
	const token = formData.get('cf-turnstile-response');
	const ip =
		request.headers['cf-connecting-ip'] ||
		request.headers['x-forwarded-for'] ||
		request.headers['x-real-ip'];

	// Validate the token by calling the
	// "/siteverify" API endpoint.
	const turnstileFormData = new FormData();
	turnstileFormData.append('secret', env.TURNSTILE_SECRET_KEY);
	turnstileFormData.append('response', token);
	turnstileFormData.append('remoteip', ip);

	// console.log(turnstileFormData.values());
	// log the form data to the console
	// console.log(encode(turnstileFormData));

	const url = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';
	const result = await fetch(url, {
		body: turnstileFormData,
		method: 'POST'
	});

	const outcome = (await result.json()) as TurnstileResponse;
	console.log(outcome);
	return outcome;
};

export const POST: RequestHandler = async ({ request }) => {
	const body = await request.formData();

	const outcome = await turnstileVerify(request, body);

	if (!outcome.success) {
		return new Response(JSON.stringify(outcome['error-codes']), { status: 400 });
	}

	try {
		const encodedFormData = encode(body);

		const res = await fetch(env.CLOUDFLARE_WORKER_URL, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			body: encodedFormData
		});

		return new Response('{}', {
			headers: {
				'Content-Type': 'application/json; charset=utf-8'
			},
			status: res ? res.status : 500
		});
	} catch (err) {
		console.error(err);
		return new Response((err as Error).message, { status: 500 });
	}
};
