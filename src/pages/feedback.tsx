import { NextPage } from 'next';
import { NextSeo } from 'next-seo';

import { AppHeader } from '@/components';

const FeedbackPage: NextPage = () => {
	return (
		<>
			<NextSeo
				title="피드백"
				description="피드백 페이지 입니다 :D"
				// canonical={`${process.env.NEXT_PUBLIC_SITE_URL}/feedback`}
			/>
			<AppHeader />
			<main></main>
		</>
	);
};

export default FeedbackPage;
