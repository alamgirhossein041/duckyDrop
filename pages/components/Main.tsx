import styles from "/styles/Main.module.scss";
import SimpleAirdrop from "./SimpleAirdrop";
import ConnectWallet from "./ConnectWallet";
import { useAddress } from "@thirdweb-dev/react";

export default function Main() {
	const address = useAddress();

	return (
		<div className={styles.container}>
			{address ? <SimpleAirdrop /> : <ConnectWallet />}
		</div>
	);
}
