import styles from "./Footer.module.scss";
import FooterLinks from "./FooterLinks";
import Logos from "./Logos";
import CopyrightNotice from "./CopyrightNotice";
import Languages from "./Languages";
export const Footer = () => {
  return (
    <footer className={styles.container}>
      <FooterLinks />
      <Logos />
      <CopyrightNotice />
      <Languages />
    </footer>
  );
};

export default Footer;
