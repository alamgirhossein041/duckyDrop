import { useEffect, useState, useContext } from "react";
import { SidebarData } from "./sidebar-data";
import { useWeb3 } from "../../hooks/web3-client";
import { toast } from "react-toastify";
import { ConnectWalletButton } from "../../components/connect-button";
// import { MetamaskContextProvider } from "../../components/use-context.tsx/metamask-context";
// import { MetamaskContext } from "../../components/use-context.tsx/metamask-context";
import Link from "next/link";
import styles from "/styles/sidebar.module.scss";
import Image from "next/image";

export default function Sidebar() {
	const { address } = useWeb3();
	console.log({ address });
	// const [isMetamaskInstalled, setIsMetamaskInstalled] = useState<boolean>(false);
	// const [account, setAccount] = useState<string | null>(null);
	// const [ethereumAccount, setEthereumAccount] = useState<string | null>(null);

	// useEffect(() => {
	// 	if ((window as any).ethereum) {
	// 		setIsMetamaskInstalled(true);
	// 	}
	// }, []);

	// async function connectWallet(): Promise<void> {
	// 	(window as any).ethereum
	// 		.request({
	// 			method: "eth_requestAccounts",
	// 		})
	// 		.then((accounts: string[]) => {
	// 			setAccount(accounts[0]);
	// 		})
	// 		.catch((error: any) => {
	// 			alert(`Something went wrong`);
	// 		});
	// }

	// if (ethereumAccount === null) {
	// 	return (
	// 		<>
	// 			{isMetamaskInstalled ? (
	// 				<>{toast.info(`Please Connect Your Metamask`)}</>
	// 			) : (
	// 				<>{toast.warning(`Please Install Your Metamask`)}</>
	// 			)}
	// 		</>
	// 	);
	// }

	return (
		<div>
			{" "}
			<div className={styles.sidebar_menu}>
				<div className={styles.navbar}>
					<Image
						src="/image/Logo.svg"
						width={200}
						height={50}
						alt="DuckyDrop Logo"
					/>
					<ConnectWalletButton />
					{/* <button className={styles.connect_button} onClick={connectWallet}></button> */}
					{/* <p style={{ color: "white", fontSize: "14px" }}>{address}</p> */}

					{SidebarData.map((item, index) => {
						return (
							<div className={styles.navbar_wrapper} key={index}>
								<div className={styles.icon_wrapper}>
									<Image src="/image/star.svg" width={20} height={20} alt="star" />
								</div>
								<div className={styles.menu_wrapper}>
									<Link className={styles.menu_links} href={item.path}>
										<p className={styles.menu_title}>{item.title}</p>
									</Link>
									<Image
										className={styles.lock_icon}
										src="/image/lock-circle.svg"
										width={20}
										height={20}
										alt="lock"
									/>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}
