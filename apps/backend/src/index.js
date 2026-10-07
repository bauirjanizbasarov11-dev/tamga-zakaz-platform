import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({
    ok: true,
    service: 'tamga-zakaz-api',
    version: '0.1.0',
    languages: ['kz', 'qq', 'ru'],
    timestamp: new Date().toISOString(),
  });
});

app.get('/api/services', (req, res) => {
  res.json({
    services: [
      { type: 'restaurant', name: 'Restaurant Delivery', available: true },
      { type: 'cafe', name: 'Cafe Orders', available: true },
      { type: 'taxi', name: 'Taxi Booking', available: true },
    ],
  });
});

app.listen(port, () => {
  console.log(`Tamga API running on http://localhost:${port}`);
});
