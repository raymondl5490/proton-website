import Link from "next/link";
import CTAButton from "../../site/callToActionButton";
import styles from "./OurStory.module.scss";

export const OurStory = () => {
  return (
    <section className={styles.container}>
      <div className={styles.banner}></div>
      <div className={styles.content}>
        <h1 className={styles.title}>Our story begins where the web was born, at CERN.</h1>
        <h2 className={styles.subtitle}>
          We are scientists, engineers, and developers working to protect civil liberties online.
        </h2>
        <div className={styles.text}>
          <p className={styles.paragraph}>
            ProtonMail was founded in 2013 by scientists who met at CERN and were drawn together by
            a shared vision of a more secure and private Internet. Since then, ProtonMail has
            evolved into a global effort to protect civil liberties and build a more secure
            Internet, with team members also hailing from Caltech, Harvard, ETH Zurich and many
            other research institutions.
          </p>
          <p className={styles.paragraph}>
            Today, we help our community of millions of users secure their private data online. More
            than 10,000 supporters have assisted us in this mission by donating to make this project
            possible. Thanks to your support, we are continuing to develop state of the art email
            privacy and security technology from our home base of Geneva, Switzerland.
          </p>
        </div>
        <div className={styles.buttons}>
          <Link href="/about">
            <a>
              <CTAButton type={3}>Meet our team</CTAButton>
            </a>
          </Link>
          <Link href="https://careers.protonmail.com">
            <a>
              <CTAButton type={4}>Join us</CTAButton>
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
