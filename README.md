# StockPilot Frontend

Inventory and order management dashboard built with Next.js, React, and TypeScript.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4 + shadcn/ui
- **State Management:** TanStack React Query v5
- **Forms:** React Hook Form + Zod validation
- **Charts:** Recharts
- **HTTP Client:** Axios
- **Notifications:** Sonner (toast)

## Prerequisites

- Node.js 20+
- npm
- Backend API running (default: `http://localhost:4000`)

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Set up environment variables:

```bash
cp .env.example .env.local
```

3. Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Environment Variables

| Variable | Description | Default |
|---|---|---|
| `NEXT_PUBLIC_API_URL` | Backend API base URL | `http://localhost:4000` |

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── dashboard/          # Dashboard with metrics and charts
│   ├── login/              # Authentication page
│   ├── orders/             # Order creation with cart
│   └── products/           # Product management (CRUD)
├── components/
│   ├── layout/             # DashboardLayout, Sidebar, Navbar
│   └── ui/                 # shadcn/ui components
├── features/
│   ├── dashboard/          # Sales metrics, charts, analytics hooks
│   ├── orders/             # Cart, product list, order API
│   └── products/           # Products table, create modal, products API
├── hooks/                  # Shared hooks (useAuth)
├── lib/                    # API client, auth helpers, types, utilities
└── providers/              # React Query provider
```

## API Endpoints Used

| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/auth/login` | User authentication |
| `GET` | `/products` | List all products |
| `POST` | `/products` | Create a product |
| `POST` | `/orders` | Create an order |
| `GET` | `/analytics/sales` | Total revenue and order count |
| `GET` | `/analytics/sales-over-time` | Daily revenue data |
| `GET` | `/analytics/top-products` | Top selling products |
| `GET` | `/analytics/monthly-revenue` | Monthly revenue breakdown |

## Authentication

- JWT-based authentication via localStorage
- Axios interceptors attach `Authorization: Bearer` header to all requests
- 401 responses automatically redirect to login
- All routes using `DashboardLayout` are protected via the `useAuth` hook
