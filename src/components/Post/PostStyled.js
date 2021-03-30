import styled from 'styled-components';

export const PostStyled = styled.a`
	display: flex;
	align-items: center;
	cursor: pointer;
	font-size: 16px;
	text-decoration: none;
	color: #000;
	border: 1px solid #000;
	border-radius: 5px;
	padding-right: 8px;
`;
export const PostIcon = styled.div`
	background-image: url(${(props) => props.imgUrl});
	background-position: center center;
	background-size: cover;
	min-width: 40px;
	height: 40px;
	margin-right: 16px;
`;
