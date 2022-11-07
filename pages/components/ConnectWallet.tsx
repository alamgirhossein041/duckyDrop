import styles from "/styles/ConnectWallet.module.scss";
import Image from "next/image";

export default function ConnectWallet() {
  return (
    <div className={styles.container}>
      <div className={styles.icon_wrapper}>
        <Image
          src="/svg/connect-wallet.svg"
          width={140}
          height={140}
          alt="Connect Wallet"
        />
      </div>
      <h1>Please, Connect Your wallet</h1>
      <p>
        You need connect your wallet to deploy airdrop and access all the
        feature in this dashboard
      </p>
      <button>Connect Your Wallet</button>
    </div>
  );
}
