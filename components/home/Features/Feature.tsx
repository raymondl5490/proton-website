import styles from "./Feature.module.scss";

export interface FeatureProps {
  icon: string;
  title: string;
  subtitle: string;
  description: string;
}

export const Feature = ({ icon, title, subtitle, description }: FeatureProps) => {
  return (
    <section className={styles.feature}>
      <div className={`${styles.icon} ${styles[icon]}`} />
      <h1 className={styles.title}>{title}</h1>
      <h2 className={styles.subtitle}>{subtitle}</h2>
      <p className={styles.description} dangerouslySetInnerHTML={{ __html: description }}></p>
    </section>
  );
};

export default Feature;
