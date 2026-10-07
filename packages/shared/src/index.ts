export const supportedLanguages = ['kz', 'qq', 'ru'] as const;

export type SupportedLanguage = (typeof supportedLanguages)[number];

export interface ServiceCategory {
  id: string;
  name: string;
  type: 'restaurant' | 'cafe' | 'taxi';
  available: boolean;
}

export const defaultCategories: ServiceCategory[] = [
  { id: 'restaurant', name: 'Restaurant', type: 'restaurant', available: true },
  { id: 'cafe', name: 'Cafe', type: 'cafe', available: true },
  { id: 'taxi', name: 'Taxi', type: 'taxi', available: true },
];
