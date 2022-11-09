import React, { CSSProperties } from "react";
import { useWeb3 } from "../hooks/web3-client";
import styles from "/styles/sidebar.module.scss";

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
	const { address, network } = useWeb3();
	return disconnect ? (
		<button className={styles.connect_button} onClick={disconnect}>
			{address}
		</button>
	) : (
		<button>Loading...</button>
	);
};

export function ConnectWalletButton() {
	const { web3Provider, connect, disconnect } = useWeb3();

	return web3Provider ? (
		<DisconnectButton disconnect={disconnect} />
	) : (
		<ConnectButton connect={connect} />
	);
}
