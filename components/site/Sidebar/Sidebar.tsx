import Link from "next/link";
import { NavLinks as NavLinkProperties } from "@/types/NavLinks";

import styles from "./Sidebar.module.scss";
import PMLogo from "@/components/site/PMLogo";

export interface ComponentProps {
  links: NavLinkProperties;
  position?: "left" | "right";
  visible?: boolean;
}

export const Sidebar = (props: ComponentProps) => {
  return (
    <aside
      className={`${styles.container} ${props.position === "right" && styles.right} ${
        props.visible === false && styles.hidden
      }`}
    >
      <nav>
        <PMLogo />
        <h1>Menu</h1>
        <div className={styles.linkCollections}>
          {props.links.map((collection, index) => (
            <div className={styles.linkCollection} key={index}>
              {collection.title && <h2>{collection.title}</h2>}
              <ul>
                {collection.items.map((item, index) => (
                  <li key={index}>
                    <Link href={item.link}>
                      <a>{item.title}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
