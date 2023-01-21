import styled from '@emotion/styled';

export const Header = styled.header`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 48px;
	padding: 0 8px 0 12px;
	box-sizing: border-box;
	display: flex;
	justify-content: space-between;
	align-items: center;
	z-index: 100;
	pointer-events: none;
`;

export const FlexItem = styled.div`
	display: flex;
	pointer-events: auto;
`;
