import type { AppProps } from "next/app";
import "/styles/globals.scss";
import "/styles/Button.scss";
import { Web3ContextProvider } from "./context";
import Layout from "../layout";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Web3ContextProvider>
			<Layout>
				{/* <Head>
					<title>DApp - Ducky Drop</title>
					<meta
						name="description"
						content="Want to send a crypto airdrop? Use Ducky Drop and massdropping crypto in a ducky way!"
					/>
					<link rel="icon" href="/svg/favicon.svg" />
				</Head> */}
				<Component {...pageProps} />
			</Layout>
		</Web3ContextProvider>
	);
}
