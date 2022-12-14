import styles from "/styles/ReusableAirdrop/StepWrapper.module.scss";

interface StepWrapperProps {
  formStep?: number;
}

export default function StepWrapper({ formStep = 1 }: StepWrapperProps) {
  return (
    <div className={styles.step_wrapper}>
      <div className={`${styles.step_bg} ${formStep >= 1 && styles.active}`}>
        <div className={styles.step}>
          <p>1</p>
        </div>
        <div className={styles.label}>
          <h1>Select Token</h1>
          <p>Select or Add Your Token</p>
        </div>
      </div>
      <div
        className={`${styles.connector} ${formStep >= 1 && styles.active}`}
      ></div>
      <div className={`${styles.step_bg} ${formStep >= 2 && styles.active}`}>
        <div className={styles.step}>
          <p>2</p>
        </div>
        <div className={styles.label}>
          <h1>Input Address</h1>
          <p>Add Receivers Address</p>
        </div>
      </div>
      <div
        className={`${styles.connector} ${formStep >= 2 && styles.active}`}
      ></div>
      <div className={`${styles.step_bg} ${formStep >= 3 && styles.active}`}>
        <div className={styles.step}>
          <p>3</p>
        </div>
        <div className={styles.label}>
          <h1>Transaction Approval</h1>
          <p>Approve Your Airdrop</p>
        </div>
      </div>
      <div
        className={`${styles.connector} ${formStep >= 3 && styles.active}`}
      ></div>
      <div className={`${styles.step_bg} ${formStep >= 4 && styles.active}`}>
        <div className={styles.step}>
          <p>4</p>
        </div>
        <div className={styles.label}>
          <h1>Ducky Drop</h1>
          <p>Send Your Token</p>
        </div>
      </div>
    </div>
  );
}
