/** @type {import('next').NextConfig} */
const nextConfig = {
	// reactStrictMode: true,
	images: {
		domains: ['search.pstatic.net']
	},
	compiler: {
		emotion: {
			sourceMap: true,
			autoLabel: 'dev-only',
			labelFormat: '[local]'
		}
	},
	i18n: {
		locales: ['ko'],
		defaultLocale: 'ko'
	}
};

module.exports = nextConfig;
