import { NavbarContents, NavbarItem, NavbarGroup } from "@/types/NavLinks";

interface RenderNavigationSubmenuProps {
  items: NavbarContents;
  className?: string;
}

const RenderSubmenu = ({ items, className }: RenderNavigationSubmenuProps) => {
  return items.map((item: NavbarItem | NavbarGroup | string) => (
    <li className={className} key={null}>
      {(item?.link && <a href={item?.link}>{item?.text}</a>) ||
        (item?.text && <span className="title">{item?.text}</span>)}
      {item?.children && (
        <ul className="nav-group">{RenderSubmenu({ items: item.children, className })}</ul>
      )}
    </li>
  ));
};

interface RenderNavigationMenuProps {
  items: NavbarContents;
  className?: string;
  submenuClassName?: string;
  id?: string;
}

export const RenderNavigationMenu = ({
  items,
  className,
  submenuClassName,
  id,
}: RenderNavigationMenuProps) => {
  return (
    <nav id={id}>
      <ul className={className}>{RenderSubmenu({ items, className: submenuClassName })}</ul>
    </nav>
  );
};
