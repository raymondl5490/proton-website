export interface NavItem {
  title: string;
  link: string;
  ariaLabel?: string;
}

export interface NavItemCollection {
  title?: string;
  items: Array<NavItem>;
}

export type NavItemCollections = NavItemCollection[];
