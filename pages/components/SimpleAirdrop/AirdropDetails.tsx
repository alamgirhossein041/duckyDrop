import styles from "/styles/SimpleAirdrop/AirdropDetails.module.scss";
import { useState } from "react";
import Image from "next/image";
import CodeMirror from "@uiw/react-codemirror";
import { EditorView } from "@codemirror/view";
import Button from "../Button.js";
import { useForm } from "react-hook-form";
import Popup from "../Popup";
import StepWrapper from "../StepWrapper";

interface AirdropDetailsType {
	formStep: any;
	nextFormStep: any;
}

export default function AirdropDetails({
	nextFormStep,
	formStep,
}: AirdropDetailsType) {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm({
		defaultValues: {
			token_address: "",
		},
	});

	const baseTheme = EditorView.baseTheme({
		"&": {
			border: "1px solid rgba(0, 0, 0, 0.2)",
			borderRadius: "6px",
			outline: "unset !important",
		},
		".cm-gutters": {
			borderRadius: "6px 0 0 6px",
		},
	});
	const [popupActive, setPopupActive] = useState(false);
	console.log(watch("token_address"));

	return (
		<form
			onSubmit={handleSubmit((data) => {
				nextFormStep();
				console.log(data);
			})}
		>
			<StepWrapper formStep={formStep} />
			<div className={styles.network_wrapper}>
				<div className={`${styles.network} ${styles.active}`}>
					<Image
						src="/svg/network-ethereum-active.svg"
						width={48}
						height={48}
						alt="Logo Ethereum"
					/>
					<p>Ethereum</p>
				</div>
				<div className={styles.network}>
					<Image src="/svg/network-bnb.svg" width={48} height={48} alt="Logo BNB" />
					<p>BNB</p>
				</div>
				<div className={`${styles.network} ${styles.disable}`}>
					<div className={styles.icon_network}>
						<Image
							src="/svg/network-polygon-disable.svg"
							fill={true}
							sizes="100%"
							alt="Logo Harmony"
						/>
						<div className={styles.padlock}>
							<Image src={"/svg/padlock.svg"} fill={true} sizes="100%" alt="lock" />
						</div>
					</div>
					<p>Polygon Matic</p>
				</div>
				<div className={`${styles.network} ${styles.disable}`}>
					<div className={styles.icon_network}>
						<Image
							src="/svg/network-harmony-disable.svg"
							fill={true}
							sizes="100%"
							alt="Logo Harmony"
						/>
						<div className={styles.padlock}>
							<Image src={"/svg/padlock.svg"} fill={true} sizes="100%" alt="lock" />
						</div>
					</div>

					<p>Harmony</p>
				</div>
				<div className={`${styles.network} ${styles.disable}`}>
					<div className={styles.icon_network}>
						<Image
							src="/svg/network-avalanche-disable.svg"
							fill={true}
							sizes="100%"
							alt="Logo Harmony"
						/>
						<div className={styles.padlock}>
							<Image src={"/svg/padlock.svg"} fill={true} sizes="100%" alt="lock" />
						</div>
					</div>
					<p>Avalanche</p>
				</div>
				<div className={`${styles.network} ${styles.disable}`}>
					<div className={styles.icon_network}>
						<Image
							src="/svg/network-fantom-disable.svg"
							fill={true}
							sizes="100%"
							alt="Logo Harmony"
						/>
						<div className={styles.padlock}>
							<Image src={"/svg/padlock.svg"} fill={true} sizes="100%" alt="lock" />
						</div>
					</div>
					<p>Fantom</p>
				</div>
			</div>
			<div className={styles.token_address_wrapper}>
				<p>Token Address</p>
				<div className={styles.form_wrapper}>
					<div className={styles.input_token_address}>
						<input
							{...register("token_address", { required: true })}
							type="text"
							placeholder="Input Your Token Address   "
						/>
						{errors.token_address && (
							<p className="error_message">Token address is required</p>
						)}
					</div>
					<div className={styles.token_preview}>
						<div className={styles.token_name}>
							<Image
								src={"/svg/tick-green.svg"}
								width={24}
								height={24}
								alt="Tick green"
							/>
							<p>STRT</p>
						</div>
						<p>10,000,000,000,000</p>
					</div>
				</div>
			</div>
			<div className={styles.list_of_address_wrapper}>
				<p>List of Wallet Address</p>
				<CodeMirror
					height="140px"
					theme={baseTheme}
					placeholder={
						"[Token Address],[quantity]" +
						"\n" +
						"\n" +
						"0x4666a9118E2697226D93155b3f63FE830Fd0b0A1,20" +
						"\n" +
						"\n" +
						"30x4666a9118E2697226D93155b3f63FE830Fd0b0A1,3.11"
					}
				/>
			</div>
			<div className={styles.button_wrapper}>
				<div className={styles.button_left}>
					<Button color="primary">Upload CSV File</Button>
					<Button color="light" onClick={() => setPopupActive(true)}>
						Show Example
					</Button>
				</div>
				<Button type="submit" color="dark">
					Next
				</Button>
			</div>
			{popupActive && (
				<Popup>
					<div className={styles.popup_example_address}>
						<h1>Example of address</h1>
						<textarea
							value={
								"0xcC60Ff414bDaB920B95415f31fAa2ABC74FB741d,100" +
								"\n" +
								"0xC8c30Fa803833dD1Fd6DBCDd91Ed0b301EFf87cF,30.5" +
								"\n" +
								"0x7D52422D3A5fE9bC92D3aE8167097eE09F1b347d,0.5" +
								"\n" +
								"0x64c9525A3c3a65Ea88b06f184F074C2499578A7E,13"
							}
							disabled
						></textarea>
						<p>Address, Amount</p>
						<Button color="primary" onClick={() => setPopupActive(false)}>
							Okay, understand
						</Button>
					</div>
				</Popup>
			)}
		</form>
	);
}
