# Tamga Zakaz Platform

Tamga Zakaz is a multilingual delivery platform for restaurants, cafés, and taxi services.

## Overview
- Restaurant ordering and delivery
- Café and food ordering
- Taxi booking and rides
- Bilingual and multilingual experience in Kazakh, Karakalpak, and Russian
- Shared API and data layer for web and mobile apps

## Tech stack
- Web: Next.js
- Mobile: Expo / React Native
- API: Express.js
- Shared types: TypeScript package

## Repository structure
```text
apps/
  web/       # Next.js client
  backend/   # Express API
  mobile/    # Expo mobile app
packages/
  shared/    # Reusable TS types and constants
```

## Getting started

### Install dependencies
```bash
npm install
```

### Run API
```bash
npm run dev:api
```

### Run web
```bash
npm run dev:web
```

### Run mobile
```bash
npm run dev:mobile
```

## Default URLs
- Web: http://localhost:3000
- API: http://localhost:4000
- Health check: http://localhost:4000/api/health

## Supported languages
- Kazakh
- Karakalpak
- Russian

## Roadmap
- Auth and user profiles
- Restaurant and cafe catalog
- Menu and cart flows
- Taxi booking flow
- Driver dashboard
- Admin panel
- Payments and notifications
