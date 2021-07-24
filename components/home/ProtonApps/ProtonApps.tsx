import CTAButton from "@/components/site/callToActionButton";
import Link from "next/link";
import Image from "next/image";
import styles from "./ProtonApps.module.scss";

const ProtonApps = () => {
  return (
    <section className={styles.container}>
      <div className={styles.inner}>
        <h1 className={styles.title}>The ProtonMail mobile apps are now available worldwide.</h1>
        <h2 className={styles.subtitle}>Introducing Encrypted Email for Your Mobile Device</h2>
        <div className={styles.buttons}>
          <div className={styles.button}>
            <Link href="https://apps.apple.com/app/apple-store/id979659905?pt=106513916&ct=protonmail.com-homepage&mt=8">
              <a>
                <Image
                  src="/app-store-black-en.svg"
                  width={120}
                  height={40}
                  alt="Apple App Store"
                />
              </a>
            </Link>
          </div>
          <div className={styles.button}>
            <Link href="https://play.google.com/store/apps/details?id=ch.protonmail.android&utm_campaign=ww-all-2a-mail-int_site-g_acq-apps_links_homepage&utm_source=protonmail.com&utm_medium=link&utm_content=homepage&utm_term=android">
              <a>
                <Image src="/google-play-en.svg" width={135} height={40} alt="Apple App Store" />
              </a>
            </Link>
          </div>
          <div className={styles.button}>
            <Link href="/login">
              <a>
                <CTAButton type={4}>Use the Web Version</CTAButton>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProtonApps;
