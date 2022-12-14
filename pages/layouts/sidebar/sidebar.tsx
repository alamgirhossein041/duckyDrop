import { useEffect, useState, useContext } from "react";
// import { useWeb3 } from "../../hooks/web3-client";
import ConnectWalletButton from "../../components/connect-button";
import { toast, ToastContainer } from "react-toastify";
import { ConnectWallet, useSDK } from "@thirdweb-dev/react";
import { useChainId } from "@thirdweb-dev/react";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import styles from "/styles/sidebar.module.scss";
import Image from "next/image";

export default function Sidebar() {
	const shortenAddress = (account: string) =>
		`${account.slice(0, 7)}...${account.slice(account.length - 4)}`;

	const [subToggle, setSubToggle] = useState(true);

	return (
		<>
			<div className={styles.sidebar}>
				<Image
					src="/svg/logo.svg"
					width={200}
					height={50}
					priority={true}
					alt="Ducky Drop Logo"
				/>

				<ConnectWallet
					className={styles.connect_button}
					colorMode="light"
					// auth={{
					// 	loginConfig: {
					// 		redirectTo: "/",
					// 		onError: (error: string) => <ConnectWallet />,
					// 	},
					// 	loginOptional: false,
					// }}
				/>
				<div className={styles.menu_wrapper}>
					<Link href="/vip-drop" className={styles.link_wrapper}>
						<div className={styles.menu}>
							<Image src="/image/star.svg" width={28} height={28} alt="Menu" />
							<p>VIP Drop</p>
							<div className={styles.icon_status}>
								<Image src="/image/lock-circle.svg" width={28} height={28} alt="Vip" />
							</div>
						</div>
					</Link>
					<Link className={styles.link_wrapper} href="/">
						<div onClick={() => setSubToggle(!subToggle)} className={styles.menu}>
							<Image src="/image/star.svg" width={28} height={28} alt="Menu" />
							<p>Airdrop</p>
							<Image src="/svg/arrow-down.svg" width={28} height={28} alt="Menu" />
						</div>
					</Link>
					{subToggle && (
						<div className={styles.submenu_wrapper}>
							<Link href="/" className={styles.link_wrapper}>
								Simple Airdrop
							</Link>
							<Link href="/reusable-airdrop" className={styles.link_wrapper}>
								Reusable Airdrop
							</Link>
							<Link href="/nft-airdrop" className={styles.link_wrapper}>
								<div className={styles.item}>
									NFT Airdrop
									<Image src="/image/lock-circle.svg" width={28} height={28} alt="Vip" />
								</div>
							</Link>
						</div>
					)}
					<Link href="/approval-menu" className={styles.link_wrapper}>
						<div className={styles.menu}>
							<Image src="/image/star.svg" width={28} height={28} alt="Menu" />
							<p>Approval Menu</p>
						</div>
					</Link>
					<Link
						href="/components/Verification/components/verification"
						className={styles.link_wrapper}
					>
						<div className={styles.menu}>
							<Image src="/image/star.svg" width={28} height={28} alt="Menu" />
							<p>Verification</p>
						</div>
					</Link>
					<Link href="/ducky-hunter" className={styles.link_wrapper}>
						<div className={styles.menu}>
							<Image src="/image/star.svg" width={28} height={28} alt="Menu" />
							<p>Ducky Hunter</p>
							<Image src="/image/lock-circle.svg" width={28} height={28} alt="Vip" />
						</div>
					</Link>
				</div>
			</div>
		</>
	);
}
