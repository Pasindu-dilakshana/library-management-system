import { Bell, Moon, Search, Sun } from "lucide-react";
import { useAuth } from "../../hooks/useAuth";
import { useTheme } from "../../hooks/useTheme";

export function Navbar() {
  const { user, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="border-b border-slate-200 bg-white/80 px-4 py-4 backdrop-blur sm:px-6 lg:px-8 dark:border-slate-800 dark:bg-slate-900/80">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Welcome back
          </p>
          <h1 className="text-2xl font-semibold">
            {user?.name || "Library User"}
          </h1>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="relative">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />
            <input
              className="input min-w-[240px] pl-10"
              placeholder="Search books, members..."
            />
          </div>

          <button
            type="button"
            onClick={toggleTheme}
            className="btn-secondary px-3"
          >
            {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
          </button>

          <button type="button" className="btn-secondary px-3">
            <Bell size={18} />
          </button>

          <button type="button" onClick={logout} className="btn-primary">
            Logout
          </button>
        </div>
      </div>
    </header>
  );
}
