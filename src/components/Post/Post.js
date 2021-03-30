import React from 'react';
import { PostIcon, PostStyled } from './PostStyled';

export default function Post({ post }) {
	const {
		link,
		owner: { profile_image = '' },
		title,
	} = post;
	return (
		<PostStyled href={link}>
			{profile_image && <PostIcon imgUrl={profile_image} />}
			{title}
		</PostStyled>
	);
}
