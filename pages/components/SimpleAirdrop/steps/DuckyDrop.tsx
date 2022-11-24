import styles from "/styles/SimpleAirdrop/steps/DuckyDrop.module.scss";
import StepWrapper from "../StepWrapper";
import Button from "../../Button";
import { useState, useEffect } from "react";
import { useWeb3 } from "../../../hooks/web3-client";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { useRouter } from "next/router";
import { SDKOptionsSchema } from "@thirdweb-dev/sdk";
import { useSDK } from "@thirdweb-dev/react";
import { toast, ToastContainer } from "react-toastify";

interface DuckyDropProps {
	formStep: number;
	data?: any;
	setData?: any;
	backToHome: any;
}

export default function DuckyDrop({
	formStep,
	data,
	setData,
	backToHome,
}: DuckyDropProps) {
	const {
		handleSubmit,
		formState: { errors },
	} = useForm();
	const [transactionDetails, setTransactionDetails] = useState(false);
	const [transactionDetailsView, setTransactionDetailsView] = useState(false);
	const [nativeBalance, setNativeBalance] = useState<any>();
	const { push } = useRouter();

	const onSubmit = (formData: any) => {
		setTransactionDetails(true);
		// setData?.((prev: any) => ({
		//   ...prev,
		// }));
	};

	const { address } = useWeb3();

	// const balance = "0xe520FB82DFB4eEad1fc69d23bbB7469Cc3F6CEa6";

	const sdk = useSDK();

	async function getNativeBalance() {
		const nativeBalance = await sdk?.wallet.balance();
		setNativeBalance(nativeBalance);
		console.log(nativeBalance);
	}
	useEffect(() => {
		getNativeBalance();
	}, []);

	const testing = "BLABLABLB";
	console.log(testing);

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<StepWrapper formStep={formStep} />
			<div className={styles.airdrop_details}>
				<div className={styles.detail}>
					<h2>{data?.totalRecipient}</h2>
					<p>Total recipient</p>
				</div>
				<div className={styles.detail}>
					<h2>{data?.totalAmount}</h2>
					<p>
						Total <span>{data?.tokenSymbol}</span> to send
					</p>
				</div>
				<div className={styles.detail}>
					<h2>UNLIMITED</h2>
					<p>Current Token Approval</p>
				</div>
				<div className={styles.detail}>
					<h2>{data?.tokenBalance / 1000000}</h2>
					<p>
						Your <span>{data?.tokenSymbol}</span> Balance
					</p>
				</div>
			</div>
			<div className={styles.transaction_info}>
				<div className={styles.title}>
					<p>
						<span>BEP20 - {data?.tokenSymbol}</span> Token Airdrop Transaction Details
					</p>
				</div>
				<div className={styles.row}>
					<p className={styles.label}>Approximate BNBT cost</p>
					<p>0.000013 BNBT</p>
				</div>
				<div className={`${styles.row} ${styles.bg_blue}`}>
					<p className={styles.label}>Your BNBT Balance</p>
					<p>{nativeBalance?.displayValue}</p>
				</div>
				<div className={styles.row}>
					<p className={styles.label}>Sender Address</p>
					<p>{address}</p>
				</div>
				<div className={`${styles.row} ${styles.bg_blue}`}>
					<p className={styles.label}>Contract Address</p>
					<p>0x28F22e9Bd908055C2e8b48beb133d2Dd24AD4d1A</p>
				</div>
			</div>
			{transactionDetails == false && (
				<div className={styles.button_wrapper}>
					<Button type="submit" color="primary">
						Duck Your Drop!
					</Button>
				</div>
			)}
			{transactionDetails && (
				<>
					<div className={styles.transaction_status}>
						<p>DuckyDrop Transaction (1/1)</p>
						<div className={styles.box}>
							<div
								className={styles.address_wrapper}
								onClick={() => {
									navigator.clipboard.writeText(
										"0x28F22e9Bd908055C2e8b48beb133d2Dd24AD4d1A"
									);
									toast.success("Address copied");
								}}
							>
								<p>0x28F22e9Bd908055C2e8b48beb133d2Dd24AD4d1A</p>
								<Image src="/svg/copy.svg" width={24} height={24} alt="icon copy" />
							</div>
							<div className={styles.icon_success}>
								<Image src="/svg/success.svg" width={24} height={24} alt="icon copy" />
								<p>Success</p>
							</div>
						</div>
					</div>
					<div className={styles.congrats_info}>
						<p>Congratulation, your Duckdrop successfully dropped!</p>
					</div>
					<div className={styles.transaction_details}>
						<div
							className={styles.details_toggle}
							onClick={() => setTransactionDetailsView(!transactionDetailsView)}
						>
							<p>View Transaction Details</p>
							<Image
								src="/svg/arrow-top.svg"
								width={20}
								height={20}
								className={transactionDetailsView ? styles.arrow_top : ""}
								alt="arrow top"
							/>
						</div>
						{transactionDetailsView && (
							<div className={styles.transaction_details_box}>
								<div className={styles.row}>
									<p className={styles.label}>Duplicate Address</p>
									<p>None</p>
								</div>
								<div className={`${styles.row} ${styles.bg_blue}`}>
									<p className={styles.label}>Matched Address</p>
									<p>{data.totalRecipient} Address</p>
								</div>
								<div className={styles.row}>
									<p className={styles.label}>Successfully Send</p>
									<p>{data.totalRecipient} Address</p>
								</div>
								<div className={`${styles.row} ${styles.bg_blue}`}>
									<p className={styles.label}>Failed to Receive</p>
									<p>None</p>
								</div>
							</div>
						)}
						<div className={styles.back_to_home}>
							<Button color="primary" onClick={backToHome}>
								Back to home
							</Button>
						</div>
					</div>
				</>
			)}
			<ToastContainer className="toast" autoClose={2000} />
		</form>
	);
}
