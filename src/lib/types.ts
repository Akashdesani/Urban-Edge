export type Product = {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  tags: string[];
  description: string;
  details: string[];
  imageIds: string[];
  colors: { name: string; class: string }[];
  sizes: string[];
};

export type CartItem = {
  id: string;
  product: Product;
  size: string;
  color: string;
  quantity: number;
};

export type Order = {
  id: string;
  items: CartItem[];
  total: number;
  customerDetails: {
    name: string;
    email: string;
    address: string;
    city: string;
    state: string;
    zip: string;
  };
  paymentMethod: 'UPI' | 'Card' | 'COD';
  status: 'Pending' | 'Processing' | 'Shipped' | 'Delivered';
  createdAt: Date;
};

export type Review = {
  id: string;
  productId: string;
  name: string;
  avatarUrl: string;
  rating: number;
  comment: string;
  createdAt: Date;
};
