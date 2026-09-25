export interface MenuItem {
  id: string;
  name: string;
  category: 'starters' | 'mains' | 'cocktails' | 'desserts';
  description: string;
  priceNote: string;
  tags?: string[];
  signature?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'ambiance' | 'cocktails' | 'cuisine' | 'lounge';
  image: string;
  aspect: string;
  caption: string;
}

export interface ExperiencePillar {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  image?: string;
}
