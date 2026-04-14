import { Navigate, Route, Routes } from "react-router-dom";
import { AuthLayout } from "./layouts/AuthLayout";
import { DashboardLayout } from "./layouts/DashboardLayout";
import { LoginPage } from "./pages/auth/LoginPage";
import { RegisterPage } from "./pages/auth/RegisterPage";
import { DashboardPage } from "./pages/dashboard/DashboardPage";
import { BooksPage } from "./pages/books/BooksPage";
import { MembersPage } from "./pages/members/MembersPage";
import { TransactionsPage } from "./pages/transactions/TransactionsPage";
import { ProtectedRoute } from "./routes/ProtectedRoute";

export default function App() {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>

      <Route
        element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/books" element={<BooksPage />} />
        <Route path="/members" element={<MembersPage />} />
        <Route path="/transactions" element={<TransactionsPage />} />
      </Route>
    </Routes>
  );
}
