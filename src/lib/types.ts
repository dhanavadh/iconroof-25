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

