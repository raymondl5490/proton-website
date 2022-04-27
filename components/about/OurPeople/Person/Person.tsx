import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import type { PersonProperties } from "@/models/People";
import styles from "./Person.module.scss";
library.add(faLinkedinIn, faTwitter);

export const Person = ({ data }: { data: PersonProperties }) => {
  return (
    <div className={styles.container}>
      <div className={styles.picture}>
        <Image
          src={data.picture.path}
          width={data.picture.dimensions.width}
          height={data.picture.dimensions.height}
          alt={`Picture of ${data.name}`}
        />
        <div className={styles.story}>{data.story}</div>
      </div>
      <h1 className={styles.name}>{data.name}</h1>
      <p className={styles.position}>{data.position}</p>

      {data.social && (
        <div className={styles.social}>
          {data.social.linkedin && (
            <Link href={`https://linkedin.com/in/${data.social?.linkedin}`}>
              <a className={styles.link}>
                <FontAwesomeIcon icon={faLinkedinIn} className={styles.icon} />
              </a>
            </Link>
          )}

          {data.social.twitter && (
            <Link href={`https://twitter.com/${data.social?.twitter}`}>
              <a className={styles.link}>
                <FontAwesomeIcon icon={faTwitter} className={styles.icon} />
              </a>
            </Link>
          )}
        </div>
      )}
    </div>
  );
};
export default Person;
