import { useEffect, useState } from "react";
import { ethers } from "ethers";
import { SidebarData } from "./sidebar-data";
import { MetaMaskInpageProvider } from "@metamask/providers";
import { toast } from "react-toastify";
import Link from "next/link";
import styles from "/styles/sidebar.module.scss";
import Image from "next/image";

export default function Sidebar() {
	const [isMetamaskInstalled, setIsMetamaskInstalled] = useState<boolean>(false);
	const [account, setAccount] = useState<string | null>(null);
	const [ethereumAccount, setEthereumAccount] = useState<string | null>(null);

	useEffect(() => {
		if ((window as any).ethereum) {
			setIsMetamaskInstalled(true);
		}
	}, []);

	async function connectWallet(): Promise<void> {
		(window as any).ethereum
			.request({
				method: "eth_requestAccounts",
			})
			.then((accounts: string[]) => {
				setAccount(accounts[0]);
			})
			.catch((error: any) => {
				alert(`Something went wrong`);
			});
	}

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
		<>
			{" "}
			<div className={styles.sidebar_menu}>
				<div className={styles.navbar}>
					<Image
						src="/image/Logo.svg"
						width={200}
						height={50}
						alt="DuckyDrop Logo"
					/>
					<button className={styles.connect_button} onClick={connectWallet}>
						Connect Wallet
					</button>
					<p>{account}</p>
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
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
}
