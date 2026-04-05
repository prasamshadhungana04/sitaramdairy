// src/admin/Dashboard.jsx
import { Link, Outlet } from 'react-router-dom';

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-milk">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
        <div className="p-6 border-b border-gray-100">
          <h2 className="text-xl font-bold text-textMain">Admin Panel</h2>
        </div>
        <nav className="flex-grow p-4 space-y-2">
          <Link to="/admin/products" className="block p-3 rounded-lg text-gray-700 hover:bg-green-50 hover:text-green-700 font-medium transition-colors">📦 Products</Link>
          <Link to="/admin/orders" className="block p-3 rounded-lg text-gray-700 hover:bg-green-50 hover:text-green-700 font-medium transition-colors">🛒 Orders</Link>
          <Link to="/admin/banners" className="block p-3 rounded-lg text-gray-700 hover:bg-green-50 hover:text-green-700 font-medium transition-colors">🖼️ Banners</Link>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-grow p-8">
        <h1 className="text-3xl font-bold text-textMain mb-8">Welcome to Sita Ram Dashboard</h1>
        {/* Render child routes here (Products, Orders, Banners) */}
        <Outlet />
      </main>
    </div>
  );
}