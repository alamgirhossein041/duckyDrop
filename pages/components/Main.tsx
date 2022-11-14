import styles from "/styles/Main.module.scss";
import SimpleAirdrop from "./SimpleAirdrop";
import ConnectWallet from "./ConnectWallet";
import { Verification } from "./Verification/components";

export default function Main() {
	return (
		<div className={styles.container}>
			{true ? <SimpleAirdrop /> : <ConnectWallet />}
		</div>
	);
}
