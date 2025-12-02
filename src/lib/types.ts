export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  brand: string;
  category: string;
  // Add more fields as needed
}

export interface Banner {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  linkUrl: string;
}

export interface Brand {
  id: string;
  name: string;
  imageUrl: string;
  linkUrl: string;
}

export interface BannerInfo {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  linkUrl: string;
  linkText: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface NewsArticle {
  id: string;
  category: string;
  title: string;
  description: string;
  content: string;
  imageUrl: string;
  linkUrl: string;
  className?: string; // Optional for layout variations
}

export interface Testimonial {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

export interface CustomerReview {
  id: string;
  name: string;
  reviewAt: string;
  comment: string;
  rating: number;
  imageUrl: string;
  linkUrl: string;
}

export interface ArticleItem {
  id: string;
  imageUrl: string;
  title: string;
  description: string;
  linkUrl: string;
}

export interface SliderSection {
  id: string;
  title: string;
  subtitle: string;
  articles: ArticleItem[];
}
