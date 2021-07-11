import styles from "./PartnersAndSponsors.module.scss";
import Image from "next/image";

export const PartnersAndSponsors = () => {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Partners and Sponsors</h1>
      <div className={styles.images}>
        <Image
          src="/home/partners/partners-01.jpg"
          width={226}
          height={84}
          alt=""
          className={styles.image}
        />
        <Image
          src="/home/partners/partners-02.jpg"
          width={226}
          height={84}
          alt=""
          className={styles.image}
        />
        <Image
          src="/home/partners/partners-03.jpg"
          width={226}
          height={84}
          alt=""
          className={styles.image}
        />
        <Image
          src="/home/partners/partners-04.gif"
          width={226}
          height={84}
          alt=""
          className={styles.image}
        />
        <Image
          src="/home/partners/partners-05.jpg"
          width={226}
          height={84}
          alt=""
          className={styles.image}
        />
        <Image
          src="/home/partners/partners-06.gif"
          width={226}
          height={84}
          alt=""
          className={styles.image}
        />
        <Image
          src="/home/partners/partners-07.gif"
          width={226}
          height={84}
          alt=""
          className={styles.image}
        />
      </div>
    </section>
  );
};
export default PartnersAndSponsors;
