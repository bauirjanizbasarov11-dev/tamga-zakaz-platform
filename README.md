# Tamga Zakaz Platform

Tamga Zakaz - multilingual delivery platform for restaurants, cafes and taxi services.

## Features
- Restaurant ordering and delivery
- Cafe / quick-service ordering
- Taxi booking and ride requests
- Multilingual interface: Kazakh, Karakalpak, Russian
- API for web and mobile clients
- Shared service data model across apps

## Project structure
```text
apps/
  web/       # Next.js frontend
  backend/   # Express.js API
  mobile/    # Expo/React Native app
packages/
  shared/    # Shared types and constants
```

## Quick start

### Install dependencies
```bash
npm install
```

### Start the API
```bash
npm run dev:api
```

### Start the web app
```bash
npm run dev:web
```

### Start the mobile app
```bash
npm run dev:mobile
```

## Default endpoints
- Web app: http://localhost:3000
- API: http://localhost:4000
- Health check: http://localhost:4000/api/health

## Default languages
- Kazakh
- Karakalpak
- Russian

## Tech stack
- Next.js
- React Native / Expo
- Express.js
- TypeScript

## Roadmap
- User auth and login
- Restaurant and cafe catalog
- Cart and checkout
- Ride booking flow
- Driver and courier dashboard
- Admin panel
- Payment integration
- Notifications
- Deployment automation
