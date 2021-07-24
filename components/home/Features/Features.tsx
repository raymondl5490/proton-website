import styles from "./Features.module.scss";
import Feature from "./Feature";
import { Features as data } from "@/data/home/Features";

export const Features = () => {
  return (
    <section className={styles.container}>
      {data.map((feature, index) => (
        <Feature
          key={index}
          icon={feature.icon}
          title={feature.title}
          subtitle={feature.subtitle}
          description={feature.description}
        ></Feature>
      ))}
    </section>
  );
};
export default Features;
