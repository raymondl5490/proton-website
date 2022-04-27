import { FeatureProps } from "@/models/Features";

import styles from "./Feature.module.scss";

export const Feature = ({ icon, title, subtitle, description }: FeatureProps) => {
  return (
    <section className={styles.container}>
      <div className={`${styles.icon} ${styles[icon]}`} />
      <h1 className={styles.title}>{title}</h1>
      <h2 className={styles.subtitle}>{subtitle}</h2>
      <p className={styles.description} dangerouslySetInnerHTML={{ __html: description }}></p>
    </section>
  );
};

export default Feature;
