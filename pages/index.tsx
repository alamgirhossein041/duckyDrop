import styles from "../styles/Home.module.css";
import Sidebar from "./layouts/sidebar/sidebar";
import Main from "./components/Main";

export default function Home() {
	return (
		<div className={styles.container}>
			{/* <Sidebar /> */}
			<Main />
		</div>
	);
}
