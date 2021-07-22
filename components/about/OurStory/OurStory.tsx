import Image from "next/image";
import styles from "./OurStory.module.scss";
export const OurStory = () => {
  return (
    <section className={styles.container}>
      <div className={styles.inner}>
        <article className={styles.article}>
          <h1 className={styles.title}>About Proton</h1>
          <span className={styles.text}>
            <p>
              Since our founding team met at CERN and created ProtonMail, Proton Technologies AG has
              grown into a global leader in online security. Today, we are the world's largest
              secure email provider with over one million users. In addition to our headquarters in
              Geneva, Switzerland, we have support centers in San Francisco, CA, and Skopje,
              Macedonia. Our global presence allows us to provide 24/7 support and monitoring of
              mission critical applications for all our customers.
            </p>
            <p>
              We believe privacy and security are universal values which cross borders. Inclusion
              and diversity are core company values. Collectively, our team of experts from around
              the world speak English, French, German, Italian, Spanish, Czech, Macedonian, Chinese
              and Russian.
            </p>
            <p>
              ProtonMail is supported by more than 10,000 individuals from around the world who
              participated in our record-breaking crowdfunding campaign. Additional backers include
              the European Commission and the Fondation Genevoise pour l'Innovation Technologique
              (FONGIT), a non-profit foundation financed by the Swiss Federal Commission for
              Technology and Innovation for the public good. We are also advised by the MIT Venture
              Mentoring Service.
            </p>
          </span>
        </article>
        <div className={styles.image}>
          <figure>
            <Image
              src="/about/proton-hq.jpg"
              alt="Headquarters of Proton Technologies AG in Geneva, Switzerland"
              width={671}
              height={410}
            />
            <figcaption className={styles.imageCaption}>
              Headquarters of Proton Technologies AG in Geneva, Switzerland
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
};
export default OurStory;
