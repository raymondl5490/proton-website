import styles from "./Footer.module.scss";
import FooterLinks from "./FooterLinks";
import Logos from "./Logos";
import CopyrightNotice from "./CopyrightNotice";
import Languages from "./Languages";
export const Footer = () => {
  return (
    <div className={styles.container}>
      <FooterLinks />
      <Logos />
      <CopyrightNotice />
      <Languages />
    </div>
  );
};

export default Footer;
