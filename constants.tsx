
import { Product, Sale, Task } from './types';

export const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Premium Basmati Rice',
    category: 'Grains',
    price: 450,
    unit: '2kg',
    stock: 45,
    location: 'Aisle 1',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=800&q=80',
    description: 'Long-grain fragrant rice perfect for any meal.',
    isPopular: true
  },
  {
    id: '17',
    name: 'Maize Flour (Ugali)',
    category: 'Grains',
    price: 180,
    unit: '2kg',
    stock: 120,
    location: 'Aisle 1',
    image: 'https://images.unsplash.com/photo-1594488311340-9856f9f4a187?auto=format&fit=crop&w=800&q=80',
    description: 'Grade 1 sifted maize meal for the perfect ugali.',
    isPopular: true
  },
  {
    id: '2',
    name: 'Farm Fresh Eggs',
    category: 'Meat & dairy',
    price: 360,
    unit: 'Tray of 30',
    stock: 12,
    location: 'Aisle 3',
    image: 'https://images.unsplash.com/photo-1506976785307-8732e854ad03?auto=format&fit=crop&w=800&q=80',
    description: 'Organic free-range eggs delivered daily.',
    isPopular: true
  },
  {
    id: '3',
    name: 'Full Cream Milk',
    category: 'Meat & dairy',
    price: 110,
    unit: '1L',
    stock: 150,
    location: 'Aisle 3',
    image: 'https://images.unsplash.com/photo-1563636619-e9107da4a1bb?auto=format&fit=crop&w=800&q=80',
    description: 'Pasteurized homogenized cow milk.',
    isPopular: true
  },
  {
    id: '4',
    name: 'Sunflower Cooking Oil',
    category: 'Packaged foods',
    price: 1450,
    unit: '5L',
    stock: 25,
    location: 'Aisle 4',
    image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=800&q=80',
    description: 'Triple refined high-quality cooking oil.'
  },
  {
    id: '18',
    name: 'Chocolate Digestives',
    category: 'Packaged foods',
    price: 220,
    unit: '400g',
    stock: 65,
    location: 'Aisle 4',
    image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=800&q=80',
    description: 'Crunchy biscuits half-coated in milk chocolate.'
  },
  {
    id: '5',
    name: 'Fresh Red Apples',
    category: 'Fresh foods',
    price: 50,
    unit: 'Per Unit',
    stock: 200,
    location: 'Entrance Produce Section',
    image: 'https://images.unsplash.com/photo-1570913149827-d2ac84ab3f9a?auto=format&fit=crop&w=800&q=80',
    description: 'Crunchy and sweet Gala apples.'
  },
  {
    id: '14',
    name: 'Ripe Red Tomatoes',
    category: 'Fresh foods',
    price: 150,
    unit: '1kg',
    stock: 120,
    location: 'Fresh Produce',
    image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=800&q=80',
    description: 'Juicy and farm-fresh tomatoes.'
  },
  {
    id: '15',
    name: 'Irish Potatoes',
    category: 'Fresh foods',
    price: 200,
    unit: '2kg Bag',
    stock: 85,
    location: 'Fresh Produce',
    image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=800&q=80',
    description: 'High-quality Irish potatoes for baking or frying.'
  },
  {
    id: '16',
    name: 'Fresh Lemons',
    category: 'Fresh foods',
    price: 30,
    unit: 'Per Unit',
    stock: 300,
    location: 'Fresh Produce',
    image: 'https://images.unsplash.com/photo-1568569308483-3604947215a7?auto=format&fit=crop&w=800&q=80',
    description: 'Zesty and vitamin-rich fresh lemons.'
  },
  {
    id: '19',
    name: 'Sparkling Soda (Cola)',
    category: 'Beverages',
    price: 90,
    unit: '500ml',
    stock: 180,
    location: 'Aisle 2',
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=800&q=80',
    description: 'Refreshing carbonated soft drink.'
  },
  {
    id: '20',
    name: 'Natural Mineral Water',
    category: 'Beverages',
    price: 60,
    unit: '500ml',
    stock: 400,
    location: 'Aisle 2',
    image: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=800&q=80',
    description: 'Pure and refreshing spring water.'
  },
  {
    id: '8',
    name: 'Beef Sirloin Steak',
    category: 'Meat & dairy',
    price: 850,
    unit: '1kg',
    stock: 15,
    location: 'Butchery Counter',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    description: 'Prime cut, vibrant red grass-fed beef steak.'
  },
  {
    id: '21',
    name: 'Luxury Toilet Paper',
    category: 'Household items',
    price: 650,
    unit: 'Pack of 10',
    stock: 50,
    location: 'Aisle 5',
    image: 'https://images.unsplash.com/photo-1584622781564-1d9876a13d1a?auto=format&fit=crop&w=800&q=80',
    description: 'Soft 3-ply white bathroom tissue.'
  },
  {
    id: '22',
    name: 'Concentrated Detergent',
    category: 'Household items',
    price: 890,
    unit: '2kg',
    stock: 35,
    location: 'Aisle 5',
    image: 'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?auto=format&fit=crop&w=800&q=80',
    description: 'Effective stain removal for all fabrics.'
  },
  {
    id: '23',
    name: 'Infant Milk Formula',
    category: 'Baby products',
    price: 2400,
    unit: '800g',
    stock: 15,
    location: 'Aisle 6',
    image: 'https://images.unsplash.com/photo-1598048145816-38507e781100?auto=format&fit=crop&w=800&q=80',
    description: 'Fortified nutritional support for infants.'
  },
  {
    id: '9',
    name: 'Baby Diapers (M)',
    category: 'Baby products',
    price: 1200,
    unit: 'Pack of 44',
    stock: 30,
    location: 'Aisle 6',
    image: 'https://images.unsplash.com/photo-1544126592-807daf21565c?auto=format&fit=crop&w=800&q=80',
    description: 'Soft and absorbent comfort for babies.'
  },
  {
    id: '10',
    name: 'Multi-Surface Cleaner',
    category: 'Household items',
    price: 450,
    unit: '500ml',
    stock: 40,
    location: 'Aisle 5',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
    description: 'Kills 99.9% of germs with fresh citrus scent.'
  },
  {
    id: '11',
    name: 'Greek Yogurt',
    category: 'Meat & dairy',
    price: 180,
    unit: '450g',
    stock: 40,
    location: 'Aisle 3',
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&q=80',
    description: 'Thick and creamy plain Greek yogurt.'
  },
  {
    id: '12',
    name: 'Red Onions',
    category: 'Fresh foods',
    price: 120,
    unit: '1kg',
    stock: 50,
    location: 'Fresh Produce',
    image: 'https://images.unsplash.com/photo-1508747703725-719777637510?auto=format&fit=crop&w=800&q=80',
    description: 'Crisp and pungent red onions.'
  },
  {
    id: '13',
    name: 'Sliced Bread',
    category: 'Packaged foods',
    price: 65,
    unit: '400g',
    stock: 10,
    location: 'Bakery Aisle',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80',
    description: 'Freshly baked wholemeal sliced bread.'
  }
];

export const MOCK_TASKS: Task[] = [
  { id: 't1', title: 'Restock Aisle 3 (Milk)', priority: 'High', status: 'Pending', location: 'Aisle 3', time: '10:00 AM' },
  { id: 't2', title: 'Clean Spill in Aisle 5', priority: 'High', status: 'Pending', location: 'Aisle 5', time: '10:15 AM' },
  { id: 't3', title: 'Verify Expiry on Bread', priority: 'Medium', status: 'Pending', location: 'Bakery', time: '11:00 AM' },
  { id: 't4', title: 'Organize Grains Section', priority: 'Low', status: 'Pending', location: 'Aisle 1', time: '12:00 PM' },
];

export const SALES_DATA: Sale[] = [
  { date: 'Mon', revenue: 12500, customers: 120 },
  { date: 'Tue', revenue: 15200, customers: 145 },
  { date: 'Wed', revenue: 11800, customers: 110 },
  { date: 'Thu', revenue: 18900, customers: 180 },
  { date: 'Fri', revenue: 25400, customers: 210 },
  { date: 'Sat', revenue: 32100, customers: 300 },
  { date: 'Sun', revenue: 28600, customers: 250 },
];
