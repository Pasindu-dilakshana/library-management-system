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

export function MobileNav() {
  return (
    <nav className="border-b border-slate-200 bg-white/80 px-4 py-3 backdrop-blur xl:hidden dark:border-slate-800 dark:bg-slate-900/80">
      <div className="grid grid-cols-4 gap-2">
        {navItems.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex flex-col items-center justify-center rounded-2xl px-3 py-3 text-xs font-medium transition ${
                isActive
                  ? "bg-teal-600 text-white"
                  : "text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
              }`
            }
          >
            <Icon size={18} />
            <span className="mt-1">{label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
