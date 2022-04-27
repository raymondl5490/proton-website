export interface ArticleProperties extends Record<string, any> {
  link: string;
  title: string;
  excerpt: string;
  image: ImageProperties;
  meta: MetadataProperties;
}

export interface ImageProperties extends Record<string, any> {
  path: string;
  description?: string;
  dimensions: DimensionProperties;
}

export interface DimensionProperties extends Record<string, number> {
  width: number;
  height: number;
}

export interface MetadataProperties extends Record<any, any> {
  date: number;
  comments: CommentProperties;
}

export interface CommentProperties extends Record<string, number> {
  commentsCount: number;
}
