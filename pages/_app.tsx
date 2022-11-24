import type { AppProps } from "next/app";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import "/styles/globals.scss";
import "/styles/Button.scss";
import { Web3ContextProvider } from "./context/web3context";
import Layout from "../layout";

export default function App({ Component, pageProps }: AppProps) {
	const activeChainId = ChainId.BinanceSmartChainTestnet;

	return (
		<ThirdwebProvider desiredChainId={activeChainId}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</ThirdwebProvider>
	);
}
