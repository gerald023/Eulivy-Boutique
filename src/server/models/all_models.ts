// src/models.ts

export type Role = "user" | "admin" | "editor" | "moderator";

export interface UserModel {
  uid: string;
  email: string;
  displayName?: string;
  photoURL?: string;
  // optional frontend-only convenience fields
  role?: Role;
  createdAt?: { seconds: number; nanoseconds: number } | string;
}

export interface Category {
  id?: string;
  name: string;
  slug: string;
  description?: string;
  createdAt?: number;
  updatedAt?: number;
}

export interface Product {
  id?: string;
  title: string;
  slug: string;
  description?: string;
  price: number;
  // currency?: string;
  images?: string[]; // storage URLs
  categoryId?: string[];
  stock?: number;
  // variants?: Record<string, any>; // e.g., colors/sizes
  createdBy?: string; // uid
  createdAt?: number;
  updatedAt?: number; 
  published?: boolean;
}

export interface Blog {
  id?: string;
  title: string;
  slug: string;
  excerpt?: string;
  content: string;
  authorId?: string;
  coverImage?: string;
  categories?: string[]; // category ids
  tags?: string[];
  createdAt?: number;
  updatedAt?: number;
  published?: boolean;
}

export interface Order {
  id?: string;
  userId: string;
  items: {
    productId: string;
    title: string;
    price: number;
    qty: number;
  }[];
  total: number;
  currency?: string;
  status?: "pending" | "processing" | "shipped" | "delivered" | "cancelled";
  createdAt?: number;
  updatedAt?: number;
}