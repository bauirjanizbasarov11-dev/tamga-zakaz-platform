# Tamga Zakaz Platform

A multilingual delivery platform for restaurants, cafes, and taxi services with a shared web, mobile, and API foundation.

## Features
- Multi-language support: Kazakh, Karakalpak, Russian
- Restaurant and cafe ordering flows
- Taxi booking integration
- Shared backend API for web and mobile clients
- Modular monorepo structure for fast scaling

## Tech stack
- Web: Next.js
- Mobile: Expo / React Native
- API: Express.js
- Shared package: TypeScript utilities and constants

## Repository structure
```text
apps/
  web/       # Next.js frontend
  backend/   # Express API
  mobile/    # Expo app
packages/
  shared/    # Shared types and language config
```

## Quick start

### 1) Install dependencies
```bash
npm install
```

### 2) Run the API
```bash
npm run dev:api
```

### 3) Run the web app
```bash
npm run dev:web
```

### 4) Run the mobile app
```bash
npm run dev:mobile
```

## Environment
Create `.env` files as needed for API keys or deployment settings.

## Default routes
- Web: http://localhost:3000
- API: http://localhost:4000
- Mobile: Expo dev client / simulator

## Roadmap
- Authentication and profile system
- Restaurant and cafe catalog
- Order tracking and checkout
- Taxi service booking and driver assignment
- Admin dashboard
- Payment integration
- Push notifications
- Deployment pipelines

## License
MIT
