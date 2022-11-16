import React, { CSSProperties } from "react";
//import { useWeb3 } from "../hooks/web3-client";
import styles from "/styles/sidebar.module.scss";
import { useWeb3Context } from "../context";
import { useWeb3 } from "../hooks";
import { Web3Action } from "../reducers";

interface ConnectProps {
	connect: (() => Promise<void>) | null;
	css?: CSSProperties;
}

const ConnectButton = ({ connect, css }: ConnectProps) => {
	return connect ? (
		<button className={styles.connect_button} onClick={connect}>
			Connect Wallet
		</button>
	) : (
		<button>Loading...</button>
	);
};

interface DisconnectProps {
	disconnect: (() => Promise<void>) | null;
}

const DisconnectButton = ({ disconnect }: DisconnectProps) => {
	const { address } = useWeb3();
	const shortenAddress = (address: any) =>
		`${address?.slice(0, 7)}...${address?.slice(address?.length - 4)}`;

	return disconnect ? (
		<button className={styles.connect_button} onClick={disconnect}>
			{shortenAddress(address)}
			{/* {shortenAddress(network)} */}
		</button>
	) : (
		<button>Loading...</button>
	);
};

export function ConnectWalletButton() {
	const { web3Provider, connect, disconnect } = useWeb3Context();

	return web3Provider ? (
		<DisconnectButton disconnect={disconnect} />
	) : (
		<ConnectButton connect={connect} />
	);
}
