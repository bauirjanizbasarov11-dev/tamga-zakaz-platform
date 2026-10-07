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
}

export interface CafeItem {
  id: string;
  name: string;
  rating: number;
  city: string;
}

export interface TaxiItem {
  id: string;
  name: string;
  eta: string;
  city: string;
}

export const defaultCategories: ServiceCategory[] = [
  { id: 'restaurant', name: 'Restaurant', type: 'restaurant', available: true },
  { id: 'cafe', name: 'Cafe', type: 'cafe', available: true },
  { id: 'taxi', name: 'Taxi', type: 'taxi', available: true },
];
