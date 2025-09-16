export type UserRole = 'customer' | 'vendor' | 'admin';

export type StoreCategory =
  | 'Lebensmittel'
  | 'Bäcker'
  | 'Metzger'
  | 'Handwerk'
  | 'Dienstleistungen'
  | 'Mode'
  | 'Elektronik'
  | 'Gesundheit'
  | 'Sport'
  | 'Sonstiges';

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  createdAt: Date;
  updatedAt: Date;
}

export interface Store {
  id: string;
  name: string;
  description: string;
  category: StoreCategory;
  rating: number;
  reviewCount: number;
  image: string;
  banner?: string;
  ownerId: string;
  address: {
    street: string;
    city: string;
    postalCode: string;
    country: string;
  };
  contact: {
    phone?: string;
    email?: string;
    website?: string;
  };
  openingHours: {
    [key: string]: {
      open: string;
      close: string;
    } | null;
  };
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface Product {
  id: string;
  storeId: string;
  name: string;
  description: string;
  price: number;
  comparePrice?: number;
  images: string[];
  category: string;
  tags: string[];
  stock: number;
  isAvailable: boolean;
  weight?: number;
  dimensions?: {
    width: number;
    height: number;
    depth: number;
  };
  createdAt: Date;
  updatedAt: Date;
}

export interface CartItem {
  id: string;
  productId: string;
  storeId: string;
  quantity: number;
  price: number;
}

export interface Cart {
  id: string;
  userId?: string;
  items: CartItem[];
  total: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Order {
  id: string;
  userId: string;
  storeId: string;
  items: CartItem[];
  total: number;
  status: 'pending' | 'confirmed' | 'preparing' | 'ready' | 'completed' | 'cancelled';
  deliveryMethod: 'pickup' | 'delivery';
  deliveryAddress?: {
    street: string;
    city: string;
    postalCode: string;
    country: string;
  };
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Review {
  id: string;
  userId: string;
  storeId: string;
  productId?: string;
  rating: number;
  comment: string;
  createdAt: Date;
}