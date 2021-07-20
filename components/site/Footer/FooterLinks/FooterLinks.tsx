import styles from "./FooterLinks.module.scss";
import FooterLinkCollection from "./FooterLinkCollection";
import links from "@/data/site/FooterLinks.json";

export const FooterLinks = () => {
  return (
    <div className={styles.container}>
      {links.map((linkCollection, index) => (
        <FooterLinkCollection
          title={linkCollection.title}
          links={linkCollection.links}
          key={index}
        />
      ))}
    </div>
  );
};
export default FooterLinks;
