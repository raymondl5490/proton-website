import Link from "next/link";
import CTAButton from "@/components/site/callToActionButton";
import styles from "./Banner.module.scss";

export const Banner = () => {
  return (
    <section className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.message}>
          <h1 className={styles.title}>Interested in making privacy the default online?</h1>
          <h2 className={styles.subtitle}>
            We are looking for talented individuals interested in building a more secure and private
            internet.
          </h2>
        </div>
        <Link href="https://careers.protonmail.com">
          <a>
            <CTAButton type={3}>See our open positions</CTAButton>
          </a>
        </Link>
      </div>
    </section>
  );
};

export default Banner;
