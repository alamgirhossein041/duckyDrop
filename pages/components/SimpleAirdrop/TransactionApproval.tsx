import styles from "/styles/SimpleAirdrop/TransactionApproval.module.scss";
import StepWrapper from "../StepWrapper";
import Button from "../Button";
import { useForm } from "react-hook-form";
import { useState } from "react";

interface TransactionApprovalType {
  formStep: number;
  data?: any;
  setData?: any;
  prevFormStep: any;
  nextFormStep: any;
}
// const listOfAddress = [
//   {
//     id: 1,
//     address: "0x4666a9118E2697226D93155b3f63FE830Fd0b0A1",
//     amount: 0.5,
//   },
//   { id: 2, address: "0x49fC7F7E4FFd2a7C6066E51946E58D0Ec6DDaAfB", amount: 20 },
//   {
//     id: 3,
//     address: "0x18353a0536d8304b7c4918da0B43976876627CC1",
//     amount: 3.11,
//   },
// ];

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

  const [amountType, setAmountType] = useState("amountToSend");
  // console.log("datanya", data);

  const resultAddress = [];
  const listAmount: number[] = [];

  for (let i = 0, a = data.listOfAddress.split("\n"); i < a.length; i++) {
    const id = i + 1;
    const addressList = a[i].split(",");
    const recepientAddress = addressList[0];
    const amount = addressList[1];
    resultAddress.push({ id, recepientAddress, amount });
    listAmount.push(Number(amount));
  }
  console.log("List amount:", listAmount);
  console.log("Lengthnya", listAmount.length);

  const sumAmount = listAmount?.reduce((a, b) => a + b, 0);
  console.log("sum", sumAmount);

  const onSubmit = (formData: any) => {
    nextFormStep();
    setData?.((prev: any) => ({
      ...prev,
    }));
  };

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
            <p>Amount of token to send (1.5 STRT)</p>
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
          <h2>{resultAddress.length}</h2>
          <p>Total recipient</p>
        </div>
        <div className={styles.detail}>
          <h2>{sumAmount}</h2>
          <p>
            Total <span>{data.tokenSymbol}</span> to send
          </p>
        </div>
        <div className={styles.detail}>
          <h2>0</h2>
          <p>Current Token Approval</p>
        </div>
        <div className={styles.detail}>
          <h2>9,383,425</h2>
          <p>
            Your <span>{data.tokenSymbol}</span> Balance
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
                  <p>{item.id}</p>
                </div>
                <p>{item.recepientAddress}</p>
              </div>
              <p>{item.amount}</p>
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
