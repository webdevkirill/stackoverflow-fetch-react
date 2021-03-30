import React from 'react';
import filter from 'lodash/filter';

export default function PostList({ posts }) {
	const filteredPosts = filter(posts, (post) => {
		return post.is_answered && post.owner.reputation >= 50;
	});
	console.log(filteredPosts);

	return <div>PostList</div>;
}
