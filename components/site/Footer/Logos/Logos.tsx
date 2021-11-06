import Image from "next/image";
import styles from "./Logos.module.scss";

export const Logos = () => {
  return (
    <div className={styles.container}>
      <div>
        <Image src="/swiss.svg" alt="Logo 1" width={165} height={41} />
      </div>
      <div>
        <Image src="/logo-gdpr-eu-white.svg" alt="Logo 2" width={165} height={41} />
      </div>
    </div>
  );
};

export default Logos;
