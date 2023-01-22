import { css } from '@emotion/react';
import { NextPage } from 'next';
import { NextSeo } from 'next-seo';

import { fullSizingStyled } from '@/styles/shared/util.styles';

const Custom404Page: NextPage = () => {
	return (
		<>
			<NextSeo title="404 Page Not Found" description="404 Page Not Found :(" />
			<div
				css={css`
					${fullSizingStyled}
					display: flex;
					justify-content: center;
					align-items: center;
				`}
			>
				<h2
					css={css`
						font-size: 28px;
						font-weight: 600;
						color: #242424;
					`}
				>
					해당 매장을 찾을 수 없습니다.
				</h2>
			</div>
		</>
	);
};

export default Custom404Page;
