import { NextPage } from 'next';
import Link from 'next/link';
import { useEffect } from 'react';
import { AiOutlineShareAlt } from 'react-icons/ai';
import { VscFeedback } from 'react-icons/vsc';

import { AppHeader, MapSection } from '@/components';
import { useStoresMutation } from '@/hooks';
import { boxStyled, fullSizingStyled, spacingStyled } from '@/styles/shared/util.styles';
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
			<AppHeader
				rightElement={[
					<button key="copy" css={boxStyled} onClick={() => alert('copy :D')}>
						<AiOutlineShareAlt size={20} />
					</button>,
					<div key="spacing" css={spacingStyled()} />,
					<Link key="link" href={'/feedback'} css={boxStyled}>
						<VscFeedback size={20} />
					</Link>
				]}
			/>
			<main css={fullSizingStyled}>
				<MapSection />
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
