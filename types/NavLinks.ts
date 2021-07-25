export interface NavItem {
  title: string;
  link: string;
  ariaLabel?: string;
}

export interface ItemCollection {
  title?: string;
  items: Array<NavItem>;
}

export type NavLinks = ItemCollection[];
