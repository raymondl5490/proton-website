export interface ImageProperties {
  location: string;
  width: number;
  height: number;
}

export interface ArticleProperties {
  author: string;
  title: string;
  image: ImageProperties;
  link: string;
}

export default ArticleProperties;
