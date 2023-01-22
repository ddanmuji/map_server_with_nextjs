import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';

import SEO from '@/../seo.config';
import GlobalStyle from '@/styles/GlobalStyle';

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<>
			<DefaultSeo {...SEO} />
			<GlobalStyle />
			<Component {...pageProps} />
		</>
	);
};

export default App;
