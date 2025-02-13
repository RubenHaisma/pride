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