# Library Management System

A production-minded full-stack Library Management System built with:

- Frontend: React + Vite + Tailwind CSS
- Backend: Node.js + Express + MongoDB
- Authentication: JWT + bcrypt
- Charts: Recharts

## Project Structure

```text
.
|-- client/   # React frontend
|-- server/   # Express API
`-- README.md
```

## Step-by-Step Build Plan

1. Setup workspace, frontend, and backend
2. Connect MongoDB and environment variables
3. Build authentication and role-based access
4. Add books module
5. Add members module
6. Add transactions module
7. Polish dashboard, charts, tables, modals, and dark mode
8. Add Swagger, Docker, rate limiting, audit logs, and deployment

## Run Locally

```bash
npm install
npm run dev
```

## Environment Files

Create these files before running:

- `server/.env`
- `client/.env`

Use the provided `.env.example` files inside each app as your reference.
