import styles from "./Hero.module.scss";
import CTAButton from "../../site/callToActionButton";
import Image from "next/image";
import Link from "next/link";

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <div className={styles.text}>
          <h1 className={styles.title}>Secure Email</h1>
          <h2 className={styles.subtitle}>Based in Switzerland</h2>
          <h3 className={styles.purpose}>
            Secure Your Communications
            <br />
            with ProtonMail
          </h3>
          <Link href="/login">
            <a>
              <CTAButton type={2}>Get encrypted email</CTAButton>
            </a>
          </Link>
        </div>
        <div className={styles.image}>
          <Image
            src="/home/hero-img-small.png"
            width={600}
            height={300}
            alt="Laptop computer and smart phone showing the ProtonMail apps"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
