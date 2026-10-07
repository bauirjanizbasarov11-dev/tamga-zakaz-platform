import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = Number(process.env.PORT || 4000);

app.use(cors());
app.use(express.json());

const categories = [
  { id: 'restaurant', name: 'Restaurant', type: 'restaurant', available: true },
  { id: 'cafe', name: 'Cafe', type: 'cafe', available: true },
  { id: 'taxi', name: 'Taxi', type: 'taxi', available: true },
];

const restaurants = [
  { id: 'r1', name: 'Nuras Bistro', rating: 4.8, deliveryTime: '25-35 min', city: 'Nukus' },
  { id: 'r2', name: 'Aqtau Grill', rating: 4.7, deliveryTime: '30-40 min', city: 'Aqtau' },
  { id: 'r3', name: 'Baqtiyar Cafe', rating: 4.9, deliveryTime: '20-30 min', city: 'Almaty' },
];

const cafes = [
  { id: 'c1', name: 'Coffee Spot', rating: 4.6, city: 'Nukus' },
  { id: 'c2', name: 'Tea House', rating: 4.8, city: 'Almaty' },
];

const taxiServices = [
  { id: 't1', name: 'City Ride', eta: '5 min', city: 'Nukus' },
  { id: 't2', name: 'Airport Transfer', eta: '15 min', city: 'Almaty' },
];

app.get('/api/health', (req, res) => {
  res.json({
    ok: true,
    service: 'tamga-zakaz-api',
    version: '0.2.0',
    languages: ['kz', 'qq', 'ru'],
    timestamp: new Date().toISOString(),
  });
});

app.get('/api/services', (req, res) => {
  res.json({ services: categories });
});

app.get('/api/restaurants', (req, res) => {
  res.json({ items: restaurants });
});

app.get('/api/cafes', (req, res) => {
  res.json({ items: cafes });
});

app.get('/api/taxi', (req, res) => {
  res.json({ items: taxiServices });
});

app.listen(port, () => {
  console.log(`Tamga API running on http://localhost:${port}`);
});
