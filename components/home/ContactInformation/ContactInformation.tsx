import styles from "./ContactInformation.module.scss";

export const ContactInformation = () => {
  return (
    <div className={styles.container}>
      <div className={styles.physicalAddress}>
        <address className={`vcard ${styles.vcard}`}>
          <span className={`fn org ${styles.org}`}>Proton Technologies AG</span>
          <span className={`adr ${styles.adr}`}>
            <span className="street-address">Route de la Galaise 32</span>
            {", "}
            <br />
            <span className="postal-code">1228</span>{" "}
            <span className="locality">Plan-les-Ouates</span>
            <br />
            <span className="region">Geneva</span>
            {", "}
            <span className="country-name">Switzerland</span>
          </span>
        </address>
      </div>
      <div className={styles.contactInformation}>
        <p className={styles.ciText}>
          General: <span title="contact@protonmail.com">Show email</span>
        </p>
        <p className={styles.ciText}>Media: media@protonmail.com</p>
        <p className={styles.ciText}>Legal: legal@protonmail.com</p>
        <p className={styles.ciText}>Partnership: partners@protonmail.com</p>
      </div>

      <div className={styles.contactInformation}>
        <p className={styles.ciText}>For legal/police inquiries click here</p>
      </div>

      <div className={styles.contactInformation}>
        <p className={styles.ciText}>For support inquiries, please visit protonmail.com/support</p>
      </div>
    </div>
  );
};

export default ContactInformation;
