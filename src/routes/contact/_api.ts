const base = process.env.URL;

function encode(formData: FormData) {
	const params = new URLSearchParams();
	for (const pair of formData.entries()) {
		typeof pair[1] == 'string' && params.append(pair[0], pair[1]);
	}
	return params.toString();
}

export async function api(formData?: FormData) {
	if (!formData) return null;

	const encodedFormData = encode(formData);

	try {
		const res = await fetch(`${base}`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			body: encodedFormData
		});

		return {
			status: res.status
		};
	} catch (err) {
		console.error(err);
	}

	return {
		status: 500
	};
}
