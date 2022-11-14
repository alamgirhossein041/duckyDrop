import { useEffect, useState } from "react";
import { ethers } from "ethers";
import { SidebarData } from "./sidebar-data";
import { MetaMaskInpageProvider } from "@metamask/providers";
import { toast } from "react-toastify";
import Link from "next/link";
import styles from "/styles/sidebar.module.scss";
import Image from "next/image";

export default function Sidebar() {
  const [isMetamaskInstalled, setIsMetamaskInstalled] =
    useState<boolean>(false);
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

  const shortenAddress = (account: any) =>
    `${account?.slice(0, 5)}...${account?.slice(account?.length - 4)}`;

  return (
    <>
      <div className={styles.sidebar}>
        <Image
          src="/svg/logo.svg"
          width={200}
          height={50}
          alt="Ducky Drop Logo"
        />
        <button className={styles.connect_button} onClick={connectWallet}>
          {account ? shortenAddress(account) : "Connect Wallet"}
        </button>
        <div className={styles.menu_wrapper}>
          {SidebarData.map((item, index) => {
            return (
              <div className={styles.menu} key={index}>
                <Image
                  src="/image/star.svg"
                  width={28}
                  height={28}
                  alt="Menu"
                />
                <Link href={item.path}>
                  <p>{item.title}</p>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
