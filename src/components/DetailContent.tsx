import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Image from 'next/image';
import { FC } from 'react';
import useSWR from 'swr';

import { DetailDescription } from '@/components';
import { SWR_KEY } from '@/constants';
import type { Store } from '@/types';

interface DetailContentProps {
	expanded: boolean;
}

const DetailContent: FC<DetailContentProps> = ({ expanded }) => {
	const { data: currentStore } = useSWR<Store>(SWR_KEY.CURRENT_STORE);

	return currentStore ? (
		<Wrapper expanded={expanded}>
			<ImageWrapper>
				{currentStore.images.slice(0, 3).map(image => (
					<ImageBox key={image}>
						<Image
							src={image}
							alt=""
							fill
							style={{ objectFit: 'cover' }}
							placeholder="blur"
							blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO0WhFsDwADzwF2mLYSJgAAAABJRU5ErkJggg=="
						/>
					</ImageBox>
				))}
			</ImageWrapper>
			{expanded && <DetailDescription />}
		</Wrapper>
	) : null;
};

export default DetailContent;

const Wrapper = styled.div<{ expanded?: boolean }>`
	height: 100%;
	overflow: hidden;

	${({ expanded }) =>
		expanded &&
		css`
			overflow: scroll;
			&::-webkit-scrollbar {
				display: none;
			}
		`}
`;

const ImageWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(3, minmax(auto, 120px));
	justify-content: center;
	gap: 12px;
	margin-bottom: 16px;
`;

const ImageBox = styled.div`
	position: relative;
	max-width: 120px;
	height: 80px;
`;
