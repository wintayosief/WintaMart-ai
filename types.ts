
export type Category = 'Grains' | 'Fresh foods' | 'Meat & dairy' | 'Packaged foods' | 'Beverages' | 'Household items' | 'Baby products';

export interface Product {
  id: string;
  name: string;
  category: Category;
  price: number;
  unit: string;
  stock: number;
  location: string;
  image: string;
  description: string;
  isPopular?: boolean;
}

export interface Task {
  id: string;
  title: string;
  priority: 'Low' | 'Medium' | 'High';
  status: 'Pending' | 'Completed';
  location: string;
  time: string;
}

export interface Sale {
  date: string;
  revenue: number;
  customers: number;
}

export type Role = 'Customer' | 'Staff' | 'Manager';

export interface Message {
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: Date;
}
