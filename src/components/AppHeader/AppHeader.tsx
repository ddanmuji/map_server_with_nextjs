import Image from 'next/image';
import Link from 'next/link';
import { FC, ReactElement } from 'react';

import logoSrc from '@/assets/images/inflearn.png';
import { boxStyled } from '@/styles/shared/util.styles';

import * as S from './AppHeader.styled';

interface AppHeaderProps {
	rightElement?: ReactElement[];
}

const AppHeader: FC<AppHeaderProps> = ({ rightElement }) => {
	return (
		<S.Header>
			<S.FlexItem>
				<Link href={'/'} css={boxStyled}>
					<Image src={logoSrc} width={110} height={20} alt="logo" placeholder="blur" />
				</Link>
			</S.FlexItem>
			{rightElement && <S.FlexItem>{rightElement}</S.FlexItem>}
		</S.Header>
	);
};

export default AppHeader;
