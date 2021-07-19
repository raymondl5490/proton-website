import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import styles from "./ContactInformation.module.scss";

library.add(faEnvelope);

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
          <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
          General: <span title="contact@protonmail.com">Show email</span>
        </p>
        <p className={styles.ciText}>
          <FontAwesomeIcon icon={faEnvelope} className={styles.icon} /> Media: media@protonmail.com
        </p>
        <p className={styles.ciText}>
          <FontAwesomeIcon icon={faEnvelope} className={styles.icon} /> Legal: legal@protonmail.com
        </p>
        <p className={styles.ciText}>
          <FontAwesomeIcon icon={faEnvelope} className={styles.icon} /> Partnership:
          partners@protonmail.com
        </p>
      </div>

      <div className={styles.contactInformation}>
        <p className={styles.ciText}>
          <FontAwesomeIcon icon={faEnvelope} className={styles.icon} /> Abuse: abuse@protonmail.com
        </p>
        <p className={styles.ciText}>
          For legal/police inquiries,{" "}
          <Link href="/law-enforcement">
            <a>click here</a>
          </Link>
        </p>
      </div>

      <div className={styles.contactInformation}>
        <p className={styles.ciText}>
          For support inquiries, please visit{" "}
          <Link href="https://protonmail.com/support">
            <a>protonmail.com/support</a>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ContactInformation;
