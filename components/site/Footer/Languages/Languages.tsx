import Link from "next/link";
import styles from "./Languages.module.scss";
import { Languages as availableLanguages } from "@/data/site/Languages";

export const Languages = () => {
  return (
    <div className={styles.container}>
      {availableLanguages.map((language, index) => (
        <Link href={language.path} key={index}>
          <a>{language.name}</a>
        </Link>
      ))}
    </div>
  );
};
export default Languages;
