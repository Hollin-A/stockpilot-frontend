import {
  LayoutDashboard,
  Package,
  ClipboardList,
  Factory,
  ShoppingCart,
  BarChart2,
  LucideIcon,
} from "lucide-react";

const navItems: { label: string; icon: LucideIcon }[] = [
  { label: "Dashboard", icon: LayoutDashboard },
  { label: "Products", icon: Package },
  { label: "Orders", icon: ClipboardList },
  { label: "Suppliers", icon: Factory },
  { label: "Purchase Orders", icon: ShoppingCart },
  { label: "Analytics", icon: BarChart2 },
];

export default function Sidebar() {
  return (
    <div className="w-60 bg-white border-r border-slate-100 h-screen flex flex-col p-5 shrink-0">
      <div className="flex items-center gap-2 mb-8">
        <div className="w-7 h-7 rounded-lg bg-indigo-600 flex items-center justify-center">
          <span className="text-white text-xs font-bold">S</span>
        </div>
        <span className="text-slate-900 font-semibold text-base tracking-tight">
          StockPilot
        </span>
      </div>

      <nav className="flex flex-col gap-1">
        {navItems.map(({ label, icon: Icon }) => (
          <button
            key={label}
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors text-left w-full"
          >
            <Icon size={16} strokeWidth={1.75} />
            {label}
          </button>
        ))}
      </nav>
    </div>
  );
}
