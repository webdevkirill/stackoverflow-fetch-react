import styled from 'styled-components';

export const Message = styled.div`
	width: 100vw;
	height: 100vh;
	box-sizing: border-box;
	padding: 32px;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 24px;
	color: ${(props) => props.color || '#000'};
`;
