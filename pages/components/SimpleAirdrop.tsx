import styles from "/styles/SimpleAirdrop.module.scss";

export default function SimpleAirdrop() {
  return (
    <div className={styles.container}>
      <h1>Simple Airdrop here!</h1>
      <div className={styles.step_wrapper}>
        <div className={styles.step_bg}>
          <div className={styles.step}>
            <p>1</p>
          </div>
          <div className={styles.label}></div>
        </div>
        <div className={styles.connector}></div>
        <div className={styles.step_bg}>
          <div className={styles.step}>
            <p>2</p>
          </div>
        </div>
        <div className={styles.connector}></div>
        <div className={styles.step_bg}>
          <div className={styles.step}>
            <p>3</p>
          </div>
        </div>
      </div>
    </div>
  );
}
