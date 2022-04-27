// A call to action button that is used in many different places
// throughout the website, hence the placement under global components.

import type { ctaButtonPropTypes } from "@/models/callToActionButton";

import styles from "./callToActionButton.module.scss";

export const CTAButton = ({ children, type }: ctaButtonPropTypes) => {
  return <span className={`${styles.ctaButton} ${styles[`type-${type}`]}`}>{children}</span>;
};

export default CTAButton;
