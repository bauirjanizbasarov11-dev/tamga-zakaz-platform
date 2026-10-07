export const supportedLanguages = ['kz', 'qq', 'ru'] as const;

export type SupportedLanguage = (typeof supportedLanguages)[number];

export interface ServiceCategory {
  id: string;
  name: string;
  type: 'restaurant' | 'cafe' | 'taxi';
  available: boolean;
}

export interface RestaurantItem {
  id: string;
  name: string;
  rating: number;
  deliveryTime: string;
  city: string;
  price: number;
}

export interface CafeItem {
  id: string;
  name: string;
  rating: number;
  city: string;
  price: number;
}

export interface TaxiItem {
  id: string;
  name: string;
  eta: string;
  city: string;
  price: number;
}

export interface OrderItem {
  id: string;
  customer: string;
  service: 'restaurant' | 'cafe' | 'taxi';
  total: number;
  status: 'preparing' | 'onway' | 'completed';
}

export const defaultCategories: ServiceCategory[] = [
  { id: 'restaurant', name: 'Restaurant', type: 'restaurant', available: true },
  { id: 'cafe', name: 'Cafe', type: 'cafe', available: true },
  { id: 'taxi', name: 'Taxi', type: 'taxi', available: true },
];
