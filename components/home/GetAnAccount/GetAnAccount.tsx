import styles from "./GetAnAccount.module.scss";
import Link from "next/link";
import CTAButton from "../../site/callToActionButton";

interface GetAnAccountProps {
  href: string | "/signup";
  headerText: string | "Get your secure email account";
  buttonText: string | "Create Account";
}

export const GetAnAccount = ({ href, headerText, buttonText }: GetAnAccountProps) => {
  return (
    <section className={styles.getAnAccount}>
      <h1 className={styles.headerText}>{headerText}</h1>
      <Link href={href}>
        <a>
          <CTAButton type={3}>{buttonText}</CTAButton>
        </a>
      </Link>
    </section>
  );
};

export default GetAnAccount;
