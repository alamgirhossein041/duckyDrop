import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import styles from "/styles/SimpleAirdrop/DuckyDrop.module.scss";
import StepWrapper from "../StepWrapper";
import Button from "../Button";
import Image from "next/image";

interface DuckyDropProps {
	formStep: number;
}

export default function DuckyDrop({ formStep }: DuckyDropProps) {
	const { handleSubmit } = useForm();
	const [transactionDetails, setTransactionDetails] = useState(false);
	const [transactionDetailsView, setTransactionDetailsView] = useState(false);
	return (
		<form
			onSubmit={handleSubmit((data) => {
				console.log(data);
				setTransactionDetails(true);
			})}
		>
			<StepWrapper formStep={formStep} />
			<div className={styles.airdrop_details}>
				<div className={styles.detail}>
					<h2>3</h2>
					<p>Total recipient</p>
				</div>
				<div className={styles.detail}>
					<h2>1.5</h2>
					<p>
						Total <span>STRT</span> to send
					</p>
				</div>
				<div className={styles.detail}>
					<h2>UNLIMITED</h2>
					<p>Current Token Approval</p>
				</div>
				<div className={styles.detail}>
					<h2>9,383,425</h2>
					<p>
						Your <span>STRT</span> Balance
					</p>
				</div>
			</div>
			<div className={styles.transaction_info}>
				<div className={styles.title}>
					<p>
						<span>BEP20 - STRT</span> Token Airdrop Transaction Details
					</p>
				</div>
				<div className={styles.row}>
					<p className={styles.label}>Approximate BNBT cost</p>
					<p>0.000013 BNBT</p>
				</div>
				<div className={`${styles.row} ${styles.bg_blue}`}>
					<p className={styles.label}>Your BNBT Balance</p>
					<p>2,98988 BNBT</p>
				</div>
				<div className={styles.row}>
					<p className={styles.label}>Sender Address</p>
					<p>0x4666a9118E2697226D93155b3f63FE830Fd0b0A1</p>
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
						<ToastContainer />
						<p>DuckyDrop Transaction (1/1)</p>
						<div className={styles.box}>
							<div
								className={styles.address_wrapper}
								onClick={() => toast.success("Address Copied")}
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
									<p>3 Address</p>
								</div>
								<div className={styles.row}>
									<p className={styles.label}>Successfully Send</p>
									<p>3 Address</p>
								</div>
								<div className={`${styles.row} ${styles.bg_blue}`}>
									<p className={styles.label}>Failed to Receive</p>
									<p>None</p>
								</div>
							</div>
						)}
					</div>
				</>
			)}
		</form>
	);
}
