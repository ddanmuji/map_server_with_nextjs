import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';

import { DetailContent, DetailHeader } from '@/components';
import { useCurrentStoreMutation } from '@/hooks';
import { detailSectionStyled } from '@/styles/shared/util.styles';
import type { Store } from '@/types';

interface StoreDetailPageProps {
	store: Store;
}

const StoreDetailPage: NextPage<StoreDetailPageProps> = ({ store }) => {
	const { setCurrentStore } = useCurrentStoreMutation();

	const router = useRouter();
	const movePath = `/?zoom=15&lat=${store.coordinates[0]}&lng=${store.coordinates[1]}`;

	const onMoveToMap = () => {
		setCurrentStore(store);
		router.push(movePath);
	};

	return (
		<>
			<NextSeo title={store.name} description={store.description} />
			<div css={detailSectionStyled(true, Boolean(store))}>
				<DetailHeader expanded onClickArrow={onMoveToMap} store={store} />
				<DetailContent expanded store={store} />
			</div>
		</>
	);
};

export default StoreDetailPage;

export const getStaticPaths: GetStaticPaths = async () => {
	const stores = (await import('../../public/stores.json')).default;
	const paths = stores.map(store => ({ params: { name: store.name } }));

	return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const stores = (await import('../../public/stores.json')).default;
	const store = stores.find(store => store.name === params?.name);

	return { props: { store } };
};
