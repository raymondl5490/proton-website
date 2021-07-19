import styles from "./Footer.module.scss";
import FooterLinks from "./FooterLinks";
import Logos from "./Logos";
import CopyrightNotice from "./CopyrightNotice";
import Languages from "./Languages";
import ContactInformation from "@/components/home/ContactInformation";
export const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.contactInfo}>
        <ContactInformation />
      </div>

      <div className={styles.innerContainer}>
        <FooterLinks />
        <Logos />
        <CopyrightNotice />
        <Languages />
      </div>
    </footer>
  );
};

export default Footer;
