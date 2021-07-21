export interface PictureProperties {
  path: string;
  dimensions: Dimensions;
}

export interface Dimensions {
  width: number;
  height: number;
}

export interface SocialLinks {
  linkedin?: string;
  twitter?: string;
}

export interface PersonProperties {
  name: string;
  position: string;
  picture: PictureProperties;
  story: string;
  social?: SocialLinks;
}
