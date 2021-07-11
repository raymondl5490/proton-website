import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebookF,
  faTwitter,
  faRedditAlien,
  faInstagram,
  faMastodon,
} from "@fortawesome/free-brands-svg-icons";
library.add(faFacebookF, faTwitter, faRedditAlien, faInstagram, faMastodon);

import styles from "./SocialIcons.module.scss";

interface SocialIconProps {
  size?: number;
  faIconClassName?: string;
}

const SocialIcons: React.FC<SocialIconProps> = ({ size, faIconClassName }) => {
  return (
    <div className={styles.socialIcons}>
      <Link href="https://facebook.com/protonmail">
        <a className={styles.socialIcon} title="ProtonMail on Facebook">
          <FontAwesomeIcon
            icon={["fab", "facebook-f"]}
            className={faIconClassName}
            width={size}
            height={size}
          />
        </a>
      </Link>

      <Link href="https://twitter.com/protonmail">
        <a className={styles.socialIcon} title="ProtonMail on Twitter">
          <FontAwesomeIcon
            icon={["fab", "twitter"]}
            className={faIconClassName}
            width={size}
            height={size}
          />
        </a>
      </Link>

      <Link href="https://reddit.com/r/protonmail">
        <a className={styles.socialIcon} title="ProtonMail on Reddit">
          <FontAwesomeIcon
            icon={["fab", "reddit-alien"]}
            className={faIconClassName}
            width={size}
            height={size}
          />
        </a>
      </Link>

      <Link href="https://instagram.com/protonmail">
        <a className={styles.socialIcon} title="ProtonMail on Instagram">
          <FontAwesomeIcon
            icon={["fab", "instagram"]}
            className={faIconClassName}
            width={size}
            height={size}
          />
        </a>
      </Link>

      <Link href="https://mastodon.social/@protonmail">
        <a className={styles.socialIcon} title="ProtonMail on Mastodon">
          <FontAwesomeIcon
            icon={["fab", "mastodon"]}
            className={faIconClassName}
            width={size}
            height={size}
          />
        </a>
      </Link>
    </div>
  );
};

export default SocialIcons;
