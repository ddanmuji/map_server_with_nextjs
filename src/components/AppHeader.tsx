import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';
import { FC, ReactElement } from 'react';

import logoSrc from '@/assets/images/inflearn.png';
import { ROUTER_PATH } from '@/constants';
import { boxStyled } from '@/styles/shared/util.styles';

interface AppHeaderProps {
	rightElement?: ReactElement[];
	onClickLogo?: () => void;
}

const AppHeader: FC<AppHeaderProps> = ({ rightElement, onClickLogo }) => {
	return (
		<Header>
			<FlexItem>
				<Link
					href={ROUTER_PATH.HOME}
					onClick={onClickLogo}
					css={boxStyled}
					aria-label="홈으로 이동"
				>
					<Image src={logoSrc} width={110} height={20} alt="logo" placeholder="blur" />
				</Link>
			</FlexItem>
			{rightElement && <FlexItem>{rightElement}</FlexItem>}
		</Header>
	);
};

export default AppHeader;

const Header = styled.header`
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

const FlexItem = styled.div`
	display: flex;
	pointer-events: auto;
`;
