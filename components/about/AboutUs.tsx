import Link from "next/link";
import CTAButton from "@/components/site/callToActionButton";
import styles from "./AboutUs.module.scss";
export const AboutUs = () => {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>
        We're building an internet that protects privacy, starting with email.
      </h1>
      <div className={styles.paragraphs}>
        <p className={styles.paragraph}>
          We are scientists, engineers, and developers drawn together by a shared vision of
          protecting civil liberties online. This is why we created ProtonMail, an easy to use
          secure email service with built-in end-to-end encryption and state of the art security
          features. Our goal is to build an internet that respects privacy and is secure against
          cyberattacks.
        </p>
        <p className={styles.paragraph}>
          We are committed to developing and widely distributing the tools necessary to protect your
          data online. Our team combines deep mathematical and technical knowledge from the world's
          top research institutions with expertise in building easy to use user interfaces.
          Together, we are building the encrypted communication technologies of the future.
        </p>
      </div>
      <div className={styles.buttons}>
        <Link href="/security-details">
          <a>
            <CTAButton type={4}>Explore Our Security Features</CTAButton>
          </a>
        </Link>
        <Link href="/blog">
          <a>
            <CTAButton type={4}>Read our Blog</CTAButton>
          </a>
        </Link>
      </div>
    </section>
  );
};
export default AboutUs;
