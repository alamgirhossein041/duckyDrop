import styles from "/styles/SimpleAirdrop/TransactionApproval.module.scss";
import StepWrapper from "../StepWrapper";
import Button from "../Button";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import {
	useAddress,
	useContract,
	useSDK,
	useTokenSupply,
} from "@thirdweb-dev/react";
import { StrtABI } from "../../contracts";

interface TransactionApprovalType {
	formStep: number;
	data?: any;
	setData?: any;
	prevFormStep: any;
	nextFormStep: any;
}

export default function TransactionApproval({
	formStep,
	data,
	setData,
	prevFormStep,
	nextFormStep,
}: TransactionApprovalType) {
	const {
		handleSubmit,
		formState: { errors },
	} = useForm();

	// async function getTotalSupply() {
	//   const totalSupply = await contract.erc20.totalSupply()
	// }

	const [amountType, setAmountType] = useState("amountToSend");

	const resultAddress = [];
	const listAmount: number[] = [];

	for (let i = 0, a = data?.listOfAddress.split("\n"); i < a?.length; i++) {
		const id = i + 1;
		const addressList = a[i].split(",");
		const recepientAddress = addressList[0];
		const amount = addressList[1];
		resultAddress.push({ id, recepientAddress, amount });
		listAmount.push(Number(amount));
	}

	const sumAmount = listAmount?.reduce((a, b) => a + b, 0);

	const onSubmit = (formData: any) => {
		nextFormStep();
		setData?.((prev: any) => ({
			...prev,
			totalRecipient: resultAddress?.length,
			totalAmount: sumAmount,
		}));
	};

	// const contractAddressExample = "0xc589F25cd20fA6CAC3AbcC749a4B64b3F537705C ";

	const sdk = useSDK();

	async function getContract() {
		const contract = await sdk?.getContractFromAbi(
			"0xc589F25cd20fA6CAC3AbcC749a4B64b3F537705C",
			StrtABI
		);
		// console.log(contract);
	}
	useEffect(() => {
		getContract();
	}, []);

	const contract = "0x28F22e9Bd908055C2e8b48beb133d2Dd24AD4d1A";

	// async function getTotalSupply() {
	// 	const totalSupply = await contract.erc20.totalSupply();
	// }
	// getTotalSupply();

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<StepWrapper formStep={formStep} />
			<div className={styles.select_amount_wrapper}>
				<p>Select amount of tokens to approve:</p>
				<div className={styles.select_amount}>
					<div
						className={`${styles.choice_amount} ${
							amountType == "amountToSend" && styles.active
						}`}
						onClick={() => setAmountType("amountToSend")}
					>
						<div className={styles.checkbox}></div>
						<p>
							Amount of token to send ({sumAmount} {data?.tokenSymbol})
						</p>
					</div>
					<div
						className={`${styles.choice_amount} ${
							amountType == "totalSupply" && styles.active
						}`}
						onClick={() => setAmountType("totalSupply")}
					>
						<div className={styles.checkbox}></div>
						<p>Total supply of the token</p>
					</div>
				</div>
			</div>
			<div className={styles.airdrop_details}>
				<div className={styles.detail}>
					<h2>{resultAddress?.length}</h2>
					<p>Total recipient</p>
				</div>
				<div className={styles.detail}>
					<h2>{sumAmount}</h2>
					<p>
						Total <span>{data?.tokenSymbol}</span> to send
					</p>
				</div>
				<div className={styles.detail}>
					<h2>0</h2>
					<p>Current Token Approval</p>
				</div>
				<div className={styles.detail}>
					<h2>{data?.tokenBalance / 1000000}</h2>
					<p>
						Your <span>{data?.tokenSymbol}</span> Balance
					</p>
				</div>
			</div>
			<div className={styles.list_of_address}>
				<div className={styles.title_wrapper}>
					<p>List of Address (Review)</p>
					<p>Token Amount</p>
				</div>
				<div className={styles.address_box}>
					{resultAddress.map((item: any) => (
						<div className={styles.row} key={item.id}>
							<div className={styles.content_left}>
								<div className={styles.number}>
									<p>{item?.id}</p>
								</div>
								<p>{item?.recepientAddress}</p>
							</div>
							<p>{item?.amount}</p>
						</div>
					))}
					{/* {amountAddress.map((item: any) => (
            <p>{item.amount}</p>
          ))} */}
				</div>
			</div>

			<div className={styles.button_wrapper}>
				<Button color="primary" onClick={prevFormStep}>
					Prev
				</Button>
				<Button color="dark" type="submit">
					Approve
				</Button>
			</div>
		</form>
	);
}
