"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Package,
  ClipboardList,
  Factory,
  ShoppingCart,
  BarChart2,
  LucideIcon,
} from "lucide-react";

const navItems: { label: string; href: string; icon: LucideIcon }[] = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Products", href: "/products", icon: Package },
  { label: "Orders", href: "/orders", icon: ClipboardList },
  { label: "Suppliers", href: "#", icon: Factory },
  { label: "Purchase Orders", href: "#", icon: ShoppingCart },
  { label: "Analytics", href: "#", icon: BarChart2 },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Main navigation"
      className="w-60 bg-white border-r border-slate-100 h-screen flex flex-col p-5 shrink-0"
    >
      <div className="flex items-center gap-2 mb-8">
        <div className="w-7 h-7 rounded-lg bg-indigo-600 flex items-center justify-center">
          <span className="text-white text-xs font-bold">S</span>
        </div>
        <span className="text-slate-900 font-semibold text-base tracking-tight">
          StockPilot
        </span>
      </div>

      <ul className="flex flex-col gap-1" role="list">
        {navItems.map(({ label, href, icon: Icon }) => {
          const isActive = pathname === href;
          return (
            <li key={label}>
              <Link
                href={href}
                aria-current={isActive ? "page" : undefined}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors text-left w-full ${
                  isActive
                    ? "bg-indigo-50 text-indigo-700 font-medium"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                <Icon size={16} strokeWidth={1.75} />
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
