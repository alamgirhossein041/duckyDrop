import styles from "styles/Popup.module.scss";

interface Popup {
  children: React.ReactNode;
}

export default function Popup({ children, ...props }: Popup) {
  return (
    <div className={styles.container} {...props}>
      <div className={styles.popup}>{children}</div>
    </div>
  );
}
