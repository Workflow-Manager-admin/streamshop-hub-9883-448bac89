# StreamShop Hub Backend (Express.js)

This folder contains the Express.js backend for the StreamShop Hub project.  
**This replaces the previous Django-based backend.**

## Stack
- Node.js + Express.js
- MongoDB (planned, can swap for other DBs)
- JWT for authentication (planned)
- CORS, dotenv

## Structure

- `src/server.js` &ndash; Main application entry point and setup.
- `src/routes/` &ndash; Subroutes for features like user auth, video streaming, product browsing, orders, analytics, etc.

## Getting Started

1. Install dependencies:

   ```sh
   cd streamshop_hub_backend
   npm install
   ```

2. Start backend (development):

   ```sh
   npm run dev
   # or
   npm start
   ```

3. API docs under development. Default health-check endpoint:  
   `GET /api/health` &rarr; `{ "message": "Express.js server is up!" }`

## Features Scaffolding
- User Authentication (login, signup, profile) — `/api/users`
- Video Streaming — `/api/videos`
- Product Browsing & Search — `/api/products`
- Subscriptions & Payments — `/api/orders`
- Analytics — `/api/analytics`

## Configuration

- `.env` (optional): Set `PORT` and database vars.

## Migration Notes

- **Replaces Django backend** (all Python/requirements files and code removed).
- All architecture and documentation references updated for Node.js/Express.js.

