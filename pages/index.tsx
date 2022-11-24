import styles from "../styles/Home.module.css";
import Sidebar from "./layouts/sidebar/sidebar";
import Main from "./components/Main";
import PreventAccess from "./layouts/sidebar/prevent-access";
import Moralis from "moralis/.";

export default function Home() {
	return (
		<div>
			{/* <Sidebar /> */}
			<Main />
		</div>
	);
}
