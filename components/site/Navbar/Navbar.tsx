import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import PMLogo from "@/components/site/PMLogo";
import SocialIcons from "./SocialIcons";
import CTAButton from "@/components/site/callToActionButton";
import styles from "./Navbar.module.scss";
import { NavLinks as NavLinkProperties } from "@/types/NavLinks";
import Sidebar from "../Sidebar";

export interface ComponentProps {
  links: NavLinkProperties;
  opacity: "auto" | "opaque";
}

export const Navbar = (props: ComponentProps) => {
  let [opaqueNavbar, makeNavbarOpaque] = useState(Boolean);
  /**
   * @function handleNavbarOpacity() changes the value of `opaqueNavbar`
   * to `true` when the user scrolls down.
   *
   * The value of `opaqueNavbar` can be used to add and remove CSS classes,
   * in this case for changing the appearance of the navigation bar.
   *
   * It comes with a debouncing mechanism to prevent changing the value too many times,
   * as JavaScript could trigger events an excessive amount of times,
   * especially when using it with a scroll listener.
   */
  const handleNavbarOpacity = useCallback(() => {
    let navbarDebounceTimer!: number;
    if (navbarDebounceTimer) {
      window.cancelAnimationFrame(navbarDebounceTimer);
    }
    navbarDebounceTimer = window.requestAnimationFrame(() => {
      if (window.scrollY > 50) {
        makeNavbarOpaque(true);
      } else {
        makeNavbarOpaque(false);
      }
    });
  }, []);

  useEffect(() => {
    if (props.opacity === "auto") {
      handleNavbarOpacity();
      window.addEventListener("scroll", handleNavbarOpacity);
      return () => window.removeEventListener("scroll", handleNavbarOpacity);
    } else {
      makeNavbarOpaque(true);
    }
  }, [props.opacity, handleNavbarOpacity]);

  return (
    <>
      <header
        className={`${styles.container} ${opaqueNavbar ? styles.opaque : ""}`}
        onScroll={handleNavbarOpacity}
      >
        <div className={styles.primary}>
          <SocialIcons size={16} />
          <div className="language-picker"></div>
        </div>

        <div className={styles.secondary}>
          <div className={styles.logo}>
            <Link href="/">
              <a>
                <PMLogo />
              </a>
            </Link>
          </div>

          <nav className={styles.navlinks}>
            {props.links.map((collection) =>
              collection.items.map((item, index) => (
                <Link href={item.link} key={index}>
                  <a className={styles.link}>{item.title}</a>
                </Link>
              ))
            )}
          </nav>
          <div className={styles.buttons}>
            <Link href="/login">
              <a className={styles.button}>
                <CTAButton type={1}>Log in</CTAButton>
              </a>
            </Link>

            <Link href="/signup">
              <a className={styles.button}>
                <CTAButton type={2}>Sign up</CTAButton>
              </a>
            </Link>
          </div>
        </div>
      </header>
      <Sidebar links={props.links} visible={false} />
    </>
  );
};

export default Navbar;
