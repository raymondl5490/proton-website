import Link from "next/link";
import CTAButton from "@/components/site/callToActionButton";
import styles from "./PhysicalSecurity.module.scss";

export const PhysicalSecurity = () => {
  return (
    <section className={styles.container}>
      <div className={styles.modalWindow}>
        <h1 className={styles.title}>Physical Security</h1>
        <p className={styles.text}>
          Your data is stored on fully encrypted servers distributed across several
          biometric-secured data centers.
        </p>
        <Link href="/security-details">
          <a>
            <CTAButton type={1}>Learn more about our security features</CTAButton>
          </a>
        </Link>
      </div>
    </section>
  );
};

export default PhysicalSecurity;
