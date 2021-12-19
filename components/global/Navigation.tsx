import clsx from "clsx";
import { NavigationMenu } from "@/types/NavLinks";

export interface SubMenuProps {
  classNameGroup?: string; // Class name given to <nav><ul className="nav-root"><li><ul className="[here]">...
  classNameItem?: string; // Class name given to <nav><ul className="nav-root"><li className="[here]"><span>...
  classNameLabel?: string; // Class name given to <nav><ul className="nav-root"><li><span className="[here]">...
  classNameLink?: string; // Class name given to <nav><ul className="nav-root"><li><a className="[here]">...
  items: NavigationMenu;
}

const renderSubMenu = (props: SubMenuProps) =>
  props.items.map((menuItem, key) => (
    <li
      className={clsx(props.classNameItem, {
        ["contains-group"]: menuItem.children,
      })}
      key={key}
    >
      {(menuItem.link && (
        <a href={menuItem.link} className={props.classNameLink}>
          {menuItem.text}
        </a>
      )) || <span className={props.classNameLabel}>{menuItem.text}</span>}

      {menuItem.children && (
        <ul className={props.classNameGroup}>
          {renderSubMenu({
            items: menuItem.children,
            classNameGroup: props.classNameGroup,
            classNameItem: props.classNameItem,
            classNameLabel: props.classNameLabel,
            classNameLink: props.classNameLink,
          })}
        </ul>
      )}
    </li>
  ));

// EXPORTS
export interface NavMenuProps {
  id?: string; // Class name given to <nav id="here">...
  classNameMenu?: string; // Class name given to <nav className="[here]">...
  classNameRoot?: string; // Class name given to <nav><ul className="[here]"><li><ul>..
  items: NavigationMenu;
}

export const NavMenu = (props: NavMenuProps) => (
  <nav id={props.id} className={props.classNameMenu}>
    <ul className={props.classNameRoot}>{renderSubMenu(props)}</ul>
  </nav>
);

NavMenu.defaultProps = {
  classNameMenu: "nav-menu",
  classNameRoot: "nav-root",
  classNameItem: "nav-item",
  classNameGroup: "nav-group",
  classNameLabel: "label",
  classNameLink: "link",
};
