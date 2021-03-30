import React from 'react';
import filter from 'lodash/filter';
import { PostListStyled } from './PostListStyled';

export default function PostList({ posts }) {
	const filteredPosts = filter(posts, (post) => {
		return post.is_answered && post.owner.reputation >= 50;
	});
	console.log(filteredPosts);

	return (
		<div>
			<PostListStyled>POstList</PostListStyled>
		</div>
	);
}
