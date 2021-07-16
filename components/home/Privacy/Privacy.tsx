import Link from "next/link";
import CTAButton from "@/components/site/callToActionButton";
import styles from "./Privacy.module.scss";

export const Privacy = () => {
  return (
    <section className={styles.container}>
      <h3 className={styles.text}>
        Privacy is a fundamental human right. <br /> Your support helps us to protect privacy
        world-wide.
      </h3>
      <div className={styles.buttons}>
        <Link href="/signup">
          <a>
            <CTAButton type={3}>Sign up</CTAButton>
          </a>
        </Link>
        <Link href="/donate">
          <a>
            <CTAButton type={3}>Donate</CTAButton>
          </a>
        </Link>
      </div>
    </section>
  );
};

export default Privacy;
