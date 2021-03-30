import styled from 'styled-components';

export const PostStyled = styled.a`
	display: flex;
	align-items: center;
	cursor: pointer;
	min-height: 40px;
	width: 100%;
	max-width: 500px;
	font-size: 16px;
	text-decoration: none;
	color: #000;
	margin-bottom: 32px;
`;
export const PostIcon = styled.div`
	background-image: url(${(props) => props.imgUrl});
	background-position: center center;
	background-size: cover;
	width: 40px;
	height: 40px;
	margin-right: 16px;
`;
