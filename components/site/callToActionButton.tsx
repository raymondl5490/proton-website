// A call to action button that is used in many different places
// throughout the website, hence the placement under global components.

import styles from "./callToActionButton.module.scss";

export interface ctaButtonPropTypes {
  children: object | string;
  type: 1 | 2 | 3 | 4;
}

export const CTAButton = ({ children, type }: ctaButtonPropTypes) => {
  return <span className={`${styles.ctaButton} ${styles[`type-${type}`]}`}>{children}</span>;
};

export default CTAButton;
