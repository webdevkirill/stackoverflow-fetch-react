import React from 'react';
import filter from 'lodash/filter';
import { PostListItem, PostListStyled } from './PostListStyled';
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
					<PostListItem key={post.question_id}>
						<Post post={post} />
					</PostListItem>
				))}
			</PostListStyled>
		</div>
	);
}
