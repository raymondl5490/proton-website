import Link from "next/link";
import { FooterLinkCollectionType } from "@/models/FooterLinkCollection";
import styles from "./FooterLinkCollection.module.scss";

export const FooterLinkCollection = ({ title, links }: FooterLinkCollectionType) => {
  return (
    <div className={styles.container}>
      <h4 className={styles.title}>{title}</h4>
      <ul className={styles.links}>
        {links.map((link, index) => (
          <Link href={link.location} key={index}>
            <a style={{ textDecoration: "none" }}>
              <li className={styles.link}>{link.title}</li>
            </a>
          </Link>
        ))}
      </ul>
    </div>
  );
};
export default FooterLinkCollection;
