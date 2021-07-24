export interface FooterLinkCollectionType {
  title: string;
  links: Array<LinkDetails>;
}

export interface LinkDetails {
  icon?: string[];
  title: string;
  location: string;
  description?: string;
}
