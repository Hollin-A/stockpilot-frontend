import { Bell, Search } from "lucide-react";

export default function Navbar() {
  return (
    <div className="bg-white border-b border-slate-100 px-6 py-3 flex items-center justify-between">
      <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-lg px-3 py-1.5 w-64">
        <label htmlFor="navbar-search" className="sr-only">Search</label>
        <Search size={14} className="text-slate-400" aria-hidden="true" />
        <input
          id="navbar-search"
          type="text"
          placeholder="Search..."
          className="text-sm bg-transparent outline-none w-full text-slate-700 placeholder:text-slate-400"
        />
      </div>
      <div className="flex items-center gap-3">
        <button className="text-slate-400 hover:text-slate-600 transition" aria-label="Notifications">
          <Bell size={18} strokeWidth={1.75} />
        </button>
        <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-semibold text-sm">
          A
        </div>
      </div>
    </div>
  );
}