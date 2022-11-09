import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>DApp - Ducky Drop</title>
				<meta
					name="description"
					content="Want to send a crypto airdrop? Use Ducky Drop and massdropping crypto in a ducky way!"
				/>
				<link rel="icon" href="/svg/favicon.svg" />
			</Head>
			<Component {...pageProps} />
		</>
	);
}
