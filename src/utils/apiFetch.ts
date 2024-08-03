/**
 * Typed fetch fn.
 * @param endpoint The endpoint to fetch
 * @param options The options to pass to the fetch function (e.g. query)
 * @returns Typed response
 */
export async function apiFetch<TResult = JSON>(
	endpoint: string,
	options?: RequestInit | undefined,
) {
	const response = await fetch(endpoint, {
		...options,
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			...options?.headers,
		},
	});
	
	const isError = response.status >= 400 || !response.ok;
	
	return {
		data: (await response.json()) as TResult,
		isError,
		isSuccess: !isError,
		...response,
	}
}
