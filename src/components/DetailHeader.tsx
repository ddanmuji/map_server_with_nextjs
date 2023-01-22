import { css } from '@emotion/react';
import styled from '@emotion/styled';
import copy from 'copy-to-clipboard';
import { FC } from 'react';
import { AiOutlineShareAlt } from 'react-icons/ai';
import { IoIosArrowUp } from 'react-icons/io';

import { HEADER_HEIGHT } from '@/styles/shared/constants';
import { boxStyled } from '@/styles/shared/util.styles';
import type { Store } from '@/types';

interface DetailHeader {
	expanded?: boolean;
	onClickArrow?: () => void;
	store?: Store;
}

const DetailHeader: FC<DetailHeader> = ({ expanded, onClickArrow, store }) => {
	const onCopyUrl = () => store && copy(`${location.origin}/${store.name}`);

	return (
		<Header>
			<Button
				expanded={expanded}
				onClick={onClickArrow}
				disabled={!store}
				aria-label={expanded ? '매장 정보 접기' : '매장 정보 펼치기'}
			>
				<IoIosArrowUp size={20} color="#666666" />
			</Button>
			{store ? (
				<FlexRow>
					<Title>{store.name}</Title>
					<button css={boxStyled} onClick={onCopyUrl} aria-label="매장 페이지 주소 클립보드 복사">
						<AiOutlineShareAlt size={20} color="#666666" />
					</button>
				</FlexRow>
			) : (
				<Title>매장을 선택해주세요</Title>
			)}
		</Header>
	);
};

export default DetailHeader;

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
	cursor: pointer;
	transition: transform 150ms ease-out;

	&:disabled {
		opacity: 0.2;
		cursor: not-allowed;
	}

	svg {
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

const FlexRow = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Title = styled.h1`
	margin: 4px 0;
	font-size: 1rem;
	font-weight: 500;
`;
