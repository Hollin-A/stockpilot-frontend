export default function Sidebar() {
  return (
    <div className="w-64 bg-gray-900 text-white h-screen p-4">
      <h2 className="text-xl font-bold mb-6">StockPilot</h2>

      <ul className="space-y-3">
        <li>Dashboard</li>
        <li>Products</li>
        <li>Orders</li>
        <li>Suppliers</li>
        <li>Purchase Orders</li>
        <li>Analytics</li>
      </ul>
    </div>
  );
}
