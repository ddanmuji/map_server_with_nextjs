import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { useState } from 'react';
import { IoIosArrowUp } from 'react-icons/io';
import useSWR from 'swr';

import { SWR_KEY } from '@/constants';
import { HEADER_HEIGHT, SECTION_PADDING_TOP } from '@/styles/shared/constants';
import type { Store } from '@/types';

const DetailSection = () => {
	const { data: currentStore } = useSWR<Store>(SWR_KEY.CURRENT_STORE);
	const [expanded, setExpanded] = useState(false);

	return (
		<Wrapper expanded={expanded} selected={Boolean(currentStore)}>
			<Header>
				<Button onClick={() => setExpanded(!expanded)} disabled={!currentStore}>
					<IoIosArrowUp size={20} color="#666666" />
				</Button>
				{<Title>{currentStore ? currentStore.name : '매장을 선택해주세요'}</Title>}
			</Header>
		</Wrapper>
	);
};
export default DetailSection;

const Wrapper = styled.div<{ expanded?: boolean; selected?: boolean }>`
	position: absolute;
	left: 0;
	bottom: 0;
	width: 100%;
	height: 100%;
	z-index: 101;
	padding: ${SECTION_PADDING_TOP} 16px 16px;
	box-sizing: border-box;
	background-color: white;
	border-top-left-radius: 24px;
	border-top-right-radius: 24px;
	box-shadow: 0 -2px 8px 0 rgba(136, 136, 136, 0.3);
	transition: transform 800ms;
	transform: translateY(calc(100% - ${HEADER_HEIGHT} - ${SECTION_PADDING_TOP}));

	${({ expanded }) =>
		expanded &&
		css`
			transform: translateY(0);
		`}

	${({ selected }) =>
		selected &&
		css`
			transform: translateY(calc(100% - 160px));
		`}
`;

const Header = styled.div`
	height: ${HEADER_HEIGHT};
	display: flex;
	flex-direction: column;
`;

const Button = styled.button<{ expanded?: boolean }>`
	height: 20px;
	align-self: center;
	border: none;
	background-color: transparent;

	&:disabled {
		opacity: 0.2;
		cursor: not-allowed;
	}

	> svg {
		animation: bounce 500ms infinite alternate ease-in;
	}

	${({ expanded }) =>
		expanded &&
		css`
			transform: rotate(180deg);
		`}

	@keyframes bounce {
		from {
			transform: translateY(0);
		}
		to {
			transform: translateY(-5px);
		}
	}
`;

const Title = styled.h4`
	margin: 4px 0;
	font-size: 1rem;
	font-weight: 500;
`;
