import Sidebar from "./sidebar";
import Navbar from "./navbar";

export default function DashboardLayout({ children }: any) {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1">
        <Navbar />
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
}