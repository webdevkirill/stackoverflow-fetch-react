import styled from 'styled-components';

export const Message = styled.div`
	width: 100vw;
	height: 100vh;
	padding: 32px;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 24px;
	color: ${(props) => props.color || '#000'};
`;
