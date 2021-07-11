import styles from "./PhysicalSecurity.module.scss";

import CTAButton from "../../site/callToActionButton";

export const PhysicalSecurity = () => {
  return (
    <section className={styles.physicalSecurity}>
      <div className={styles.modalWindow}>
        <h1 className={styles.title}>Physical Security</h1>
        <p className={styles.text}>
          Your data is stored on fully encrypted servers distributed across several
          biometric-secured data centers.
        </p>
        <CTAButton type={1}>Learn more about our security features</CTAButton>
      </div>
    </section>
  );
};

export default PhysicalSecurity;
