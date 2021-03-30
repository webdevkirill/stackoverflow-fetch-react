import React from 'react';
import filter from 'lodash/filter';
import sortBy from 'lodash/sortBy';
import reverse from 'lodash/reverse';
import { PostListItem, PostListStyled } from './PostListStyled';
import Post from '../Post/Post';

export default function PostList({ posts, isReverceSort }) {
	const filteredPosts = filter(posts, (post) => {
		return post.is_answered && post.owner.reputation >= 50;
	});
	let sorteredPosts = sortBy(filteredPosts, (post) => post.creation_date);

	if (isReverceSort) {
		reverse(sorteredPosts);
	}

	return (
		<div>
			<PostListStyled>
				{sorteredPosts.map((post) => (
					<PostListItem key={post.question_id}>
						<Post post={post} />
					</PostListItem>
				))}
			</PostListStyled>
		</div>
	);
}
