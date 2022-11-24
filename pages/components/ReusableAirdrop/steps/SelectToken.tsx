import styles from "/styles/ReusableAirdrop/steps/SelectToken.module.scss";
import Image from "next/image";
import { useForm } from "react-hook-form";
import Button from "../../Button";
import StepWrapper from "../StepWrapper";
import { useState } from "react";

interface SelectTokenProps {
  formStep: number;
  nextFormStep: any;
}

export default function SelectToken({
  formStep,
  nextFormStep,
}: SelectTokenProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [tokenAddress, setTokenAddress] = useState<any>();

  function handleTokenAddressChange(e: any) {
    setTokenAddress(e.target.value);
  }

  const onSubmit = () => {
    nextFormStep();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
          <Image
            src="/svg/network-bnb.svg"
            width={48}
            height={48}
            alt="Logo BNB"
          />
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
              <Image
                src={"/svg/padlock.svg"}
                fill={true}
                sizes="100%"
                alt="lock"
              />
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
              <Image
                src={"/svg/padlock.svg"}
                fill={true}
                sizes="100%"
                alt="lock"
              />
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
              <Image
                src={"/svg/padlock.svg"}
                fill={true}
                sizes="100%"
                alt="lock"
              />
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
              <Image
                src={"/svg/padlock.svg"}
                fill={true}
                sizes="100%"
                alt="lock"
              />
            </div>
          </div>
          <p>Fantom</p>
        </div>
      </div>
      <div className={styles.input_token_address_wrapper}>
        <p>Token Address</p>
        <div className={styles.form_wrapper}>
          <div className={styles.input_token_address}>
            <input
              {...register("token_address", { required: false })}
              type="text"
              placeholder="Input Your Token Address   "
              value={tokenAddress}
              onChange={handleTokenAddressChange}
            />
            {errors.token_address && (
              <p className="error_message">Token address is required</p>
            )}
          </div>
          <Button type="button" color="light">
            Add Token
          </Button>
        </div>
      </div>
      <div className={styles.token_available}>
        <div className={styles.label}>
          <p>Symbol</p>
          <p>Balance</p>
          <p>Token Address</p>
        </div>
        <div className={styles.box}>
          <div className={styles.item}>
            <p className={styles.symbol}>TER</p>
            <p>229,448 TER</p>
            <p>0x78867BbEeF44f2326bF8DDd1941a4439382EF2A7</p>
            <div className={styles.action_button}>
              <button type="button">Register Token</button>
            </div>
          </div>
          <div className={`${styles.item} ${styles.bg_gray}`}>
            <p className={styles.symbol}>TER</p>
            <p>229,448 TER</p>
            <p>0x78867BbEeF44f2326bF8DDd1941a4439382EF2A7</p>
            <div className={styles.action_button}>
              <button>Create Airdrop</button>
            </div>
          </div>
          <div className={styles.item}>
            <p className={styles.symbol}>TER</p>
            <p>229,448 TER</p>
            <p>0x78867BbEeF44f2326bF8DDd1941a4439382EF2A7</p>
            <div className={styles.action_button}>
              <button>Create Airdrop</button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
