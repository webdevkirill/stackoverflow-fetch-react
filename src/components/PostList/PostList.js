import React from 'react';
import filter from 'lodash/filter';
import { PostListStyled } from './PostListStyled';
import Post from '../Post/Post';

export default function PostList({ posts }) {
	const filteredPosts = filter(posts, (post) => {
		return post.is_answered && post.owner.reputation >= 50;
	});
	console.log(filteredPosts);

	return (
		<div>
			<PostListStyled>
				{filteredPosts.map((post) => (
					<Post key={post.question_id} post={post} />
				))}
			</PostListStyled>
		</div>
	);
}
