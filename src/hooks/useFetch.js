import { useState } from 'react';

export const useFetch = (url) => {
	const [posts, setPosts] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	fetch(url)
		.then((res) => res.json())
		.then((data) => {
			setPosts(data.items);
			setIsLoading(false);
		});

	return {
		posts,
		isLoading,
	};
};
