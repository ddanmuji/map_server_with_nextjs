import { css } from '@emotion/react';

/** @description 클릭 가능한 요소에 대한 공통 스타일링 */
export const boxStyled = css`
	padding: 6px;
	border-radius: 4px;
	box-shadow: 0 2px 4px 0 rgba(0 0 0 / 20%);
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #ffffff;
	transition: background-color 200ms ease-out;
	border: 0;
	cursor: pointer;
	font-size: 14px;
	color: #242424;

	&:hover {
		background-color: #f2f1fd;
	}

	&:active {
		background-color: #dddddd;
	}
`;

/**
 * @param spacing 간격 설정 값
 * @description 간격 스타일링 함수 (margin-right 적용)
 * */
export const spacingStyled = (spacing: number | `${string}px` | undefined = 8) => css`
	margin-right: ${typeof spacing === 'string' ? spacing : `${spacing}px`};
`;
