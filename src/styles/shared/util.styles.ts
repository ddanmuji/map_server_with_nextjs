import { css } from '@emotion/react';

import { HEADER_HEIGHT, SECTION_PADDING_TOP } from '@/styles/shared/constants';

/** @description width, height 100% */
export const fullSizingStyled = css`
	width: 100%;
	height: 100%;
`;

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

/** @description detail section 루트 요소 스타일링 */
export const detailSectionStyled = (expanded?: boolean, selected?: boolean) => css`
	position: absolute;
	left: 0;
	bottom: 0;
	width: 100%;
	height: 100%;
	z-index: 101;
	padding: ${SECTION_PADDING_TOP} 16px 16px;
	box-sizing: border-box;
	background-color: #ffffff;
	border-top-left-radius: 24px;
	border-top-right-radius: 24px;
	box-shadow: 0 -2px 8px 0 rgba(136, 136, 136, 0.3);
	transition: transform 500ms ease-out;
	transform: translateY(calc(100% - ${HEADER_HEIGHT} - ${SECTION_PADDING_TOP}));
	display: flex;
	flex-direction: column;
	color: #444444;

	${expanded &&
	css`
		transform: translateY(0) !important;
	`}

	${selected &&
	css`
		transform: translateY(calc(100% - 160px));
	`}
`;
