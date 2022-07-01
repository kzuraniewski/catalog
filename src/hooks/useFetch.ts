import { useEffect, useState } from 'react';

/**
 * Calls fetch and awaits for the api's response
 * @param url - url to the api
 */
const useFetch = <T>(url: string) => {
	const [data, setData] = useState<T | null>(null);
	const [error, setError] = useState(false);

	useEffect(() => {
		fetch(url)
			.then(res => res.json())
			.then(documents => setData(documents))
			.catch(() => setError(false));
	}, [url]);

	return { error, data };
};

export default useFetch;
