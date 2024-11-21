export interface Author {
  name: string;
  avatar: string;
  role?: string;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  tags: string[];
  author: Author;
  date: string;
  readTime: string;
  featured?: boolean;
}

export interface Category {
  name: string;
  class: string;
} 