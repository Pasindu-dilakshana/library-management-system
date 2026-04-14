# Library Management System Architecture

## 1. Stack Choice

- Frontend: React + Vite + Tailwind CSS
- Backend: Node.js + Express
- Database: MongoDB + Mongoose
- Auth: JWT + bcrypt

Why this stack:

- React + Vite gives a fast developer experience.
- Express keeps the backend simple and easy to learn.
- MongoDB fits well for rapid product development and flexible records.
- Tailwind helps us build a modern dashboard UI quickly.

## 2. Folder Structure

```text
client/
  src/
    components/
    context/
    hooks/
    layouts/
    pages/
    routes/
    styles/
server/
  src/
    config/
    controllers/
    middleware/
    models/
    routes/
    utils/
```

Reason:

- `components/` stores reusable UI pieces.
- `pages/` stores route-level screens.
- `layouts/` keeps dashboard and auth wrappers separate.
- `controllers/` holds request handling logic.
- `models/` defines MongoDB schemas.
- `middleware/` handles auth, errors, and rate limiting.

## 3. Database Design

### Users

- `name`
- `email`
- `password`
- `role` = `admin | member`
- `status` = `active | inactive | blocked`

### Books

- `title`
- `author`
- `category`
- `isbn`
- `description`
- `totalCopies`
- `availableCopies`
- `coverImage`
- `shelfLocation`

### Transactions

- `book`
- `member`
- `issuedBy`
- `status` = `issued | returned | overdue`
- `issuedAt`
- `dueDate`
- `returnedAt`
- `fineAmount`

## 4. API Route Design

### Auth

- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET /api/auth/me`

### Books

- `GET /api/books`
- `POST /api/books`
- `PUT /api/books/:bookId`
- `DELETE /api/books/:bookId`

### Members

- `GET /api/members`
- `GET /api/members/:memberId`

### Transactions

- `GET /api/transactions`
- `POST /api/transactions/issue`
- `PATCH /api/transactions/:transactionId/return`

### Dashboard

- `GET /api/dashboard`

## 5. Authentication Flow

1. User registers or logs in.
2. Backend validates credentials.
3. Password is hashed with bcrypt before storage.
4. Backend returns a JWT token.
5. Frontend saves the token in local storage.
6. Frontend sends the token in the `Authorization` header.
7. Middleware verifies the token and role before protected actions.

## 6. Frontend Component Hierarchy

```text
App
  AuthProvider
  ThemeProvider
  Routes
    AuthLayout
      LoginPage
      RegisterPage
    DashboardLayout
      Navbar
      Sidebar
      MobileNav
      DashboardPage
      BooksPage
      MembersPage
      TransactionsPage
```

## 7. Recommended Build Order

1. Finish authentication forms and validation
2. Connect frontend to live dashboard stats
3. Build CRUD for books
4. Build member listing and profiles
5. Build issue/return book flows
6. Add overdue and fine logic
7. Add Swagger, Docker, and deployment
