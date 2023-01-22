import { NextPage } from 'next';
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
			<HomeHeader />
			<main css={{ ...fullSizingStyled, position: 'relative' }}>
				<MapSection />
				<DetailSection />
			</main>
		</>
	);
};

export default IndexPage;

export async function getStaticProps() {
	const stores = (await import('../../public/stores.json')).default;

	return {
		props: { stores },
		revalidate: 60 * 60
	};
}
