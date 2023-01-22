import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Image from 'next/image';
import { FC } from 'react';

import { DetailDescription } from '@/components';
import type { Store } from '@/types';

interface DetailContentProps {
	expanded?: boolean;
	store?: Store;
}

const DetailContent: FC<DetailContentProps> = ({ expanded, store }) => {
	return store ? (
		<Wrapper expanded={expanded}>
			<ImageWrapper>
				{store.images.slice(0, 3).map(image => (
					<ImageBox key={image}>
						<Image
							src={image}
							alt=""
							fill
							style={{ objectFit: 'cover' }}
							sizes="120px"
							placeholder="blur"
							blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO0WhFsDwADzwF2mLYSJgAAAABJRU5ErkJggg=="
						/>
					</ImageBox>
				))}
			</ImageWrapper>
			{expanded && <DetailDescription store={store} />}
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
