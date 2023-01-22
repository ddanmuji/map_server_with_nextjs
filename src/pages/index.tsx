import { css } from '@emotion/react';
import { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { useEffect } from 'react';

import { DetailSection, HomeHeader, MapSection } from '@/components';
import { useStoresMutation } from '@/hooks';
import { fullSizingStyled } from '@/styles/shared/util.styles';
import type { Store } from '@/types';

interface IndexPageProps {
	stores: Store[];
}

const IndexPage: NextPage<IndexPageProps> = ({ stores }) => {
	const { initializeStores } = useStoresMutation();

	useEffect(() => {
		initializeStores(stores);
	}, [initializeStores, stores]);

	return (
		<>
			<NextSeo
				title="매장 지도"
				description="간단한 위치찾기 서비스 With Next.js"
				// canonical={process.env.NEXT_PUBLIC_SITE_URL}
				openGraph={{ url: process.env.NEXT_PUBLIC_SITE_URL }}
			/>
			<HomeHeader />
			<main
				css={css`
					${fullSizingStyled}
					position: relative;
					overflow: hidden;
				`}
			>
				<MapSection />
				<DetailSection />
			</main>
		</>
	);
};

export default IndexPage;

export async function getStaticProps() {
	const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/stores`);
	const stores = await response.json();

	return {
		props: { stores },
		revalidate: 60 * 60
	};
}
