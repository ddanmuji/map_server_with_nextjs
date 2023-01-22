import { Head, Html, Main, NextScript } from 'next/document';

const Document = () => {
	return (
		<Html>
			<Head>
				<meta name="description" content="간단한 지도 서비스 With Next.js" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
};

export default Document;
