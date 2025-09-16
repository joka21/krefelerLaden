import { Store, Product, StoreCategory } from './types';

export const mockStores: Store[] = [
  {
    id: '1',
    name: 'Bäckerei Müller',
    description: 'Traditionelle Bäckerei mit frischen Backwaren aus eigener Herstellung seit 1953.',
    category: 'Bäcker' as StoreCategory,
    rating: 4.8,
    reviewCount: 124,
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400',
    banner: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
    ownerId: 'owner1',
    address: {
      street: 'Hauptstraße 15',
      city: 'Krefeld',
      postalCode: '47798',
      country: 'Deutschland'
    },
    contact: {
      phone: '+49 2151 123456',
      email: 'info@baeckerei-mueller.de'
    },
    openingHours: {
      monday: { open: '06:00', close: '18:00' },
      tuesday: { open: '06:00', close: '18:00' },
      wednesday: { open: '06:00', close: '18:00' },
      thursday: { open: '06:00', close: '18:00' },
      friday: { open: '06:00', close: '18:00' },
      saturday: { open: '06:00', close: '16:00' },
      sunday: null
    },
    isActive: true,
    createdAt: new Date('2023-01-15'),
    updatedAt: new Date('2024-01-10')
  },
  {
    id: '2',
    name: 'Bio-Gemüse Hansen',
    description: 'Frisches Bio-Gemüse direkt vom Hof. Regional, saisonal und nachhaltig.',
    category: 'Lebensmittel' as StoreCategory,
    rating: 4.6,
    reviewCount: 89,
    image: 'https://images.unsplash.com/photo-1506976785307-8732e854ad03?w=400',
    banner: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=800',
    ownerId: 'owner2',
    address: {
      street: 'Bauernhofweg 22',
      city: 'Krefeld',
      postalCode: '47799',
      country: 'Deutschland'
    },
    contact: {
      phone: '+49 2151 234567',
      email: 'kontakt@bio-gemuese-hansen.de'
    },
    openingHours: {
      monday: { open: '08:00', close: '19:00' },
      tuesday: { open: '08:00', close: '19:00' },
      wednesday: { open: '08:00', close: '19:00' },
      thursday: { open: '08:00', close: '19:00' },
      friday: { open: '08:00', close: '19:00' },
      saturday: { open: '08:00', close: '17:00' },
      sunday: { open: '10:00', close: '16:00' }
    },
    isActive: true,
    createdAt: new Date('2023-03-22'),
    updatedAt: new Date('2024-01-08')
  },
  {
    id: '3',
    name: 'Schreinerei Weber',
    description: 'Individuelle Möbel und Holzarbeiten nach Maß. Meisterbetrieb mit 25 Jahren Erfahrung.',
    category: 'Handwerk' as StoreCategory,
    rating: 4.9,
    reviewCount: 67,
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400',
    banner: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
    ownerId: 'owner3',
    address: {
      street: 'Werkstraße 8',
      city: 'Krefeld',
      postalCode: '47800',
      country: 'Deutschland'
    },
    contact: {
      phone: '+49 2151 345678',
      email: 'info@schreinerei-weber.de',
      website: 'https://schreinerei-weber.de'
    },
    openingHours: {
      monday: { open: '07:00', close: '17:00' },
      tuesday: { open: '07:00', close: '17:00' },
      wednesday: { open: '07:00', close: '17:00' },
      thursday: { open: '07:00', close: '17:00' },
      friday: { open: '07:00', close: '16:00' },
      saturday: null,
      sunday: null
    },
    isActive: true,
    createdAt: new Date('2022-11-10'),
    updatedAt: new Date('2024-01-05')
  },
  {
    id: '4',
    name: 'Metzgerei Schmidt',
    description: 'Frische Fleisch- und Wurstwaren aus regionaler Herkunft. Hausgemachte Spezialitäten.',
    category: 'Metzger' as StoreCategory,
    rating: 4.7,
    reviewCount: 156,
    image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=400',
    banner: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800',
    ownerId: 'owner4',
    address: {
      street: 'Marktplatz 3',
      city: 'Krefeld',
      postalCode: '47798',
      country: 'Deutschland'
    },
    contact: {
      phone: '+49 2151 456789',
      email: 'metzgerei@schmidt-krefeld.de'
    },
    openingHours: {
      monday: { open: '07:30', close: '18:30' },
      tuesday: { open: '07:30', close: '18:30' },
      wednesday: { open: '07:30', close: '18:30' },
      thursday: { open: '07:30', close: '18:30' },
      friday: { open: '07:30', close: '18:30' },
      saturday: { open: '07:30', close: '16:00' },
      sunday: null
    },
    isActive: true,
    createdAt: new Date('2023-05-18'),
    updatedAt: new Date('2024-01-12')
  },
  {
    id: '5',
    name: 'Fahrrad-Service Meier',
    description: 'Reparatur, Wartung und Verkauf von Fahrrädern. E-Bike Spezialist.',
    category: 'Dienstleistungen' as StoreCategory,
    rating: 4.5,
    reviewCount: 78,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400',
    banner: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
    ownerId: 'owner5',
    address: {
      street: 'Radweg 12',
      city: 'Krefeld',
      postalCode: '47801',
      country: 'Deutschland'
    },
    contact: {
      phone: '+49 2151 567890',
      email: 'service@fahrrad-meier.de'
    },
    openingHours: {
      monday: { open: '09:00', close: '18:00' },
      tuesday: { open: '09:00', close: '18:00' },
      wednesday: { open: '09:00', close: '18:00' },
      thursday: { open: '09:00', close: '18:00' },
      friday: { open: '09:00', close: '18:00' },
      saturday: { open: '09:00', close: '16:00' },
      sunday: null
    },
    isActive: true,
    createdAt: new Date('2023-08-05'),
    updatedAt: new Date('2024-01-03')
  },
  {
    id: '6',
    name: 'Café Sonnenschein',
    description: 'Gemütliches Café mit hausgemachten Kuchen und fair gehandeltem Kaffee.',
    category: 'Lebensmittel' as StoreCategory,
    rating: 4.4,
    reviewCount: 203,
    image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=400',
    banner: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800',
    ownerId: 'owner6',
    address: {
      street: 'Caféstraße 7',
      city: 'Krefeld',
      postalCode: '47798',
      country: 'Deutschland'
    },
    contact: {
      phone: '+49 2151 678901',
      email: 'info@cafe-sonnenschein.de'
    },
    openingHours: {
      monday: { open: '08:00', close: '18:00' },
      tuesday: { open: '08:00', close: '18:00' },
      wednesday: { open: '08:00', close: '18:00' },
      thursday: { open: '08:00', close: '18:00' },
      friday: { open: '08:00', close: '18:00' },
      saturday: { open: '09:00', close: '17:00' },
      sunday: { open: '10:00', close: '17:00' }
    },
    isActive: true,
    createdAt: new Date('2023-02-14'),
    updatedAt: new Date('2024-01-09')
  },
  {
    id: '7',
    name: 'Blumen Rosental',
    description: 'Frische Blumen für jeden Anlass. Individuelle Sträuße und Gestecke.',
    category: 'Sonstiges' as StoreCategory,
    rating: 4.6,
    reviewCount: 92,
    image: 'https://images.unsplash.com/photo-1463320726281-696a485928c7?w=400',
    banner: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800',
    ownerId: 'owner7',
    address: {
      street: 'Blumengasse 5',
      city: 'Krefeld',
      postalCode: '47799',
      country: 'Deutschland'
    },
    contact: {
      phone: '+49 2151 789012',
      email: 'kontakt@blumen-rosental.de'
    },
    openingHours: {
      monday: { open: '08:30', close: '18:00' },
      tuesday: { open: '08:30', close: '18:00' },
      wednesday: { open: '08:30', close: '18:00' },
      thursday: { open: '08:30', close: '18:00' },
      friday: { open: '08:30', close: '18:00' },
      saturday: { open: '08:30', close: '16:00' },
      sunday: { open: '10:00', close: '14:00' }
    },
    isActive: true,
    createdAt: new Date('2023-04-20'),
    updatedAt: new Date('2024-01-07')
  },
  {
    id: '8',
    name: 'Buchhandlung Lesezeit',
    description: 'Große Auswahl an Büchern, Zeitschriften und E-Books. Beratung und Bestellservice.',
    category: 'Sonstiges' as StoreCategory,
    rating: 4.7,
    reviewCount: 134,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
    banner: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800',
    ownerId: 'owner8',
    address: {
      street: 'Bücherstraße 11',
      city: 'Krefeld',
      postalCode: '47800',
      country: 'Deutschland'
    },
    contact: {
      phone: '+49 2151 890123',
      email: 'info@buchhandlung-lesezeit.de',
      website: 'https://buchhandlung-lesezeit.de'
    },
    openingHours: {
      monday: { open: '09:00', close: '19:00' },
      tuesday: { open: '09:00', close: '19:00' },
      wednesday: { open: '09:00', close: '19:00' },
      thursday: { open: '09:00', close: '19:00' },
      friday: { open: '09:00', close: '19:00' },
      saturday: { open: '09:00', close: '18:00' },
      sunday: null
    },
    isActive: true,
    createdAt: new Date('2022-12-01'),
    updatedAt: new Date('2024-01-11')
  }
];

export const mockProducts: Product[] = [
  {
    id: '1',
    storeId: '1',
    name: 'Vollkornbrot',
    description: 'Frisches Vollkornbrot aus eigener Herstellung mit Sonnenblumenkernen',
    price: 3.80,
    images: ['https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=400'],
    category: 'Brot',
    tags: ['bio', 'vollkorn', 'frisch'],
    stock: 15,
    isAvailable: true,
    weight: 1000,
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-15')
  },
  {
    id: '2',
    storeId: '1',
    name: 'Croissant',
    description: 'Butterige Croissants, täglich frisch gebacken',
    price: 1.20,
    images: ['https://images.unsplash.com/photo-1555507036-ab794f4eeef3?w=400'],
    category: 'Gebäck',
    tags: ['frisch', 'butter', 'französisch'],
    stock: 24,
    isAvailable: true,
    weight: 80,
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-15')
  },
  {
    id: '3',
    storeId: '2',
    name: 'Bio-Karotten',
    description: 'Frische Bio-Karotten aus regionalem Anbau, 1kg',
    price: 2.50,
    comparePrice: 3.20,
    images: ['https://images.unsplash.com/photo-1445282768818-728615cc910a?w=400'],
    category: 'Gemüse',
    tags: ['bio', 'regional', 'frisch'],
    stock: 50,
    isAvailable: true,
    weight: 1000,
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-15')
  }
];