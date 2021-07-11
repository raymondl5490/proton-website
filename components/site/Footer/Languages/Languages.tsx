import Link from "next/link";
import styles from "./Languages.module.scss";
import availableLanguages from "./Languages.json";

export const Languages = () => {
  return (
    <div className={styles.container}>
      {availableLanguages.map((language, index) => (
        <Link href={language.location} key={index}>
          <a>{language.name}</a>
        </Link>
      ))}
    </div>
  );
};
export default Languages;
