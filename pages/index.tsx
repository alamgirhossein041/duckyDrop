import styles from "../styles/Home.module.css";
import Sidebar from "./layouts/sidebar/sidebar";

export default function Home() {
	return (
		<div className={styles.container}>
			<Sidebar />
		</div>
	);
}
