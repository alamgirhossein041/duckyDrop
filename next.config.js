/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	env: {
		MORALIS_API_KEY:
			"GDHQRzgp6riqH7uucYMXPUoEfgjpzAakImE36JezNIfB3X3WmTiuSTB85ZamH0XK",
		PRIVATE_KEY: "0xe520FB82DFB4eEad1fc69d23bbB7469Cc3F6CEa6",
	},
};

module.exports = nextConfig;
