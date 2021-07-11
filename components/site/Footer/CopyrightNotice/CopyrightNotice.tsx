import styles from "./CopyrightNotice.module.scss";

export const CopyrightNotice = () => {
  return (
    <p className={styles.copyright}>
      © {new Date().getFullYear()} Proton Technologies AG. All Rights Reserved.
    </p>
  );
};

export default CopyrightNotice;
