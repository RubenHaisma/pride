export interface CartItem {
  id: string;
  title: string;
  price: string;
  image: string;
  quantity: number;
}

export interface CartContextType {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  total: string;
  itemCount: number;
}

export interface PrideEvent {
  id: string;
  title: string;
  description: string;
  city: string;
  venue: string;
  startDate: string;
  endDate: string;
  time: string;
  image: string;
  ticketUrl?: string;
  price?: string;
  organizer: string;
  website: string;
  category: 'parade' | 'party' | 'cultural' | 'community' | 'workshop';
  tags: string[];
}

export type City = {
  name: string;
  slug: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  description: string;
  image: string;
};

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  content: string;
  image: string;
  author: {
    name: string;
    role: string;
    image: string;
  };
  publishedAt: string;
  category: 'guide' | 'news' | 'community' | 'history' | 'culture';
  tags: string[];
  readingTime: number;
}