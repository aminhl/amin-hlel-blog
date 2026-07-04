export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  author: BlogAuthor;
  publishedAt: string;
  updatedAt?: string;
  readingTime: string;
  cover: BlogCover;
  tags: string[];
  content: BlogContentBlock[];
}

export interface BlogAuthor {
  name: string;
  avatarUrl?: string;
  bio?: string;
}

export interface BlogCover {
  src: string;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
}

export interface BlogTableOfContentsItem {
  id: string;
  label: string;
  level: BlogHeadingLevel;
}

export type BlogHeadingLevel = 2 | 3 | 4;

export type BlogContentBlock = | BlogHeadingBlock
  | BlogParagraphBlock
  | BlogImageBlock
  | BlogListBlock
  | BlogQuoteBlock
  | BlogCodeBlock
  | BlogCalloutBlock
  | BlogDividerBlock;

export interface BlogHeadingBlock {
  type: 'heading';
  id: string;
  level: BlogHeadingLevel;
  text: string;
}

export interface BlogParagraphBlock {
  type: 'paragraph';
  text: string;
}

export interface BlogImageBlock {
  type: 'image';
  src: string;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
}

export interface BlogListBlock {
  type: 'list';
  ordered: boolean;
  items: string[];
}

export interface BlogQuoteBlock {
  type: 'quote';
  text: string;
  cite?: string;
}

export interface BlogCodeBlock {
  type: 'code';
  language: string;
  filename?: string;
  code: string;
}

export interface BlogCalloutBlock {
  type: 'callout';
  variant: 'info' | 'warning' | 'success' | 'danger';
  title?: string;
  text: string;
}

export interface BlogDividerBlock {
  type: 'divider';
}


