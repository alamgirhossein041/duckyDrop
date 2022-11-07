import styles from "../styles/Home.module.css";
import Sidebar from "./layouts/sidebar/sidebar";
import ConnectWallet from "./components/ConnectWallet";

export default function Home() {
  return (
    <div className={styles.container}>
      <Sidebar />
      <ConnectWallet />
    </div>
  );
}
