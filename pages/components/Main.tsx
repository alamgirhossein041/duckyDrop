import styles from "/styles/Main.module.scss";
import SimpleAirdrop from "./SimpleAirdrop";
import ConnectWallet from "./ConnectWallet";

export default function Main() {
	return (
		<div className={styles.container}>
			{true ? <SimpleAirdrop /> : <ConnectWallet />}
		</div>
	);
}
