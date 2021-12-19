import Link from "next/link";

import styles from "./Sidebar.module.scss";
import PMLogo from "@/components/site/PMLogo";

import { NavMenu } from "@/components/global/Navigation";
import { NavigationMenu } from "@/types/NavLinks";

export interface SidebarProps {
  links: NavigationMenu;
  position?: "left" | "right";
  visible?: boolean;
}

export const Sidebar = (props: SidebarProps) => {
  return (
    <aside
      className={`${styles.container} ${props.position === "right" && styles.right} ${
        props.visible === false && styles.hidden
      }`}
    >
      <Link href="/">
        <a>
          <PMLogo className={styles.logo} />
        </a>
      </Link>

      <div className={styles.linkCollections}>
        <NavMenu items={props.links} id="sidebar-nav" />
      </div>
    </aside>
  );
};

export default Sidebar;
