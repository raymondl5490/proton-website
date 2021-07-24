export interface FooterLinkCollectionType {
  title: string;
  links: Array<LinkDetails>;
}

export interface LinkDetails {
  title: string;
  location: string;
  description?: string;
}
