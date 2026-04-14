import {
  BookCopy,
  LayoutDashboard,
  ReceiptText,
  UsersRound
} from "lucide-react";
import { NavLink } from "react-router-dom";

const navItems = [
  { to: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { to: "/books", label: "Books", icon: BookCopy },
  { to: "/members", label: "Members", icon: UsersRound },
  { to: "/transactions", label: "Transactions", icon: ReceiptText }
];

export function Sidebar() {
  return (
    <aside className="hidden w-72 shrink-0 border-r border-slate-200 bg-white/80 px-5 py-6 backdrop-blur xl:block dark:border-slate-800 dark:bg-slate-900/80">
      <div className="mb-10">
        <p className="text-xs font-medium uppercase tracking-[0.35em] text-teal-600">
          Library OS
        </p>
        <h2 className="mt-3 text-2xl font-semibold">Control Center</h2>
      </div>

      <nav className="space-y-2">
        {navItems.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition ${
                isActive
                  ? "bg-teal-600 text-white shadow-lg shadow-teal-600/20"
                  : "text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
              }`
            }
          >
            <Icon size={18} />
            {label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
