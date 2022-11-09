import type { AppProps } from "next/app";
import "../styles/globals.scss";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<div>
			<Head>
				<title>DuckyDrop</title>
			</Head>
			<Component {...pageProps} />
		</div>
	);
}
