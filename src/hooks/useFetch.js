import { useEffect, useState } from 'react';

export const useFetch = (url) => {
	const [posts, setPosts] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState('');

	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((data) => {
				if (data.error_id) {
					throw new Error(data.error_message);
				}
				setPosts(data.items);
			})
			.catch((e) => setError(e.message))
			.finally(() => setIsLoading(false));
	}, [url]);

	return {
		posts,
		isLoading,
		error,
	};
};
