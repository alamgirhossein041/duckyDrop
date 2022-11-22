import type { AppProps } from "next/app";
import "/styles/globals.scss";
import "/styles/Button.scss";
import { Web3ContextProvider } from "./context/web3context";
import Layout from "../layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Web3ContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Web3ContextProvider>
  );
}
