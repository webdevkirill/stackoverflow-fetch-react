import React from 'react';
import { PostStyled } from './PostStyled';

export default function Post({ post }) {
	const {
		link,
		owner: { profile_image = '' },
		title,
	} = post;
	return <PostStyled href={link}>{title}</PostStyled>;
}
