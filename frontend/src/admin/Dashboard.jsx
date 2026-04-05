// frontend/src/admin/Dashboard.jsx
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Package, ShoppingCart, Image as ImageIcon, Users, LogOut, LayoutDashboard } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function Dashboard() {
  const location = useLocation();
  const navigate = useNavigate();
  const { logout, user } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const navItems = [
    { name: 'Dashboard Overview', path: '/admin', icon: LayoutDashboard, exact: true },
    { name: 'Products', path: '/admin/products', icon: Package },
    { name: 'Orders', path: '/admin/orders', icon: ShoppingCart },
    { name: 'Hero Banners', path: '/admin/banners', icon: ImageIcon },
    { name: 'Customers', path: '/admin/users', icon: Users },
  ];

  return (
    <div className="flex h-screen bg-[#F9F6F0] overflow-hidden">
      {/* Premium Navy Sidebar */}
      <aside className="w-72 bg-[#002147] text-white flex flex-col shadow-2xl z-20 relative">
        {/* Subtle Milk Texture Overlay */}
        <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none"></div>
        
        <div className="p-8 border-b border-white/10 relative z-10">
          <Link to="/" className="text-2xl font-serif font-extrabold text-white tracking-tight flex items-center gap-2">
            <span className="w-8 h-8 bg-[#E2B254] rounded-full flex items-center justify-center text-[#002147] text-sm">SR</span>
            Sita Ram <span className="text-[#E2B254]">Admin</span>
          </Link>
        </div>

        <nav className="flex-grow p-6 space-y-2 relative z-10 overflow-y-auto">
          {navItems.map((item) => {
            const isActive = item.exact ? location.pathname === item.path : location.pathname.startsWith(item.path);
            const Icon = item.icon;
            return (
              <Link 
                key={item.name} 
                to={item.path} 
                className={`flex items-center gap-3 p-3.5 rounded-xl font-medium transition-all duration-300 ${
                  isActive 
                    ? 'bg-[#E2B254] text-[#002147] shadow-lg shadow-[#E2B254]/20 translate-x-1' 
                    : 'text-gray-300 hover:bg-white/10 hover:text-white'
                }`}
              >
                <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="p-6 border-t border-white/10 relative z-10">
          <button 
            onClick={handleLogout}
            className="flex items-center gap-3 w-full p-3 rounded-xl text-red-300 hover:bg-red-500/10 hover:text-red-200 transition-colors"
          >
            <LogOut size={20} />
            Secure Logout
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-grow flex flex-col h-screen overflow-hidden">
        {/* Top Header */}
        <header className="h-20 bg-white border-b border-gray-100 flex items-center justify-between px-8 shadow-sm shrink-0">
          <h1 className="text-2xl font-serif font-bold text-[#002147]">
            {navItems.find(i => i.path === location.pathname)?.name || 'Dashboard'}
          </h1>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-sm font-bold text-[#002147]">{user?.name || 'Super Admin'}</p>
              <p className="text-xs text-gray-500 uppercase tracking-wider">{user?.role || 'Admin'}</p>
            </div>
            <div className="w-10 h-10 bg-[#E2B254] rounded-full border-2 border-white shadow-md"></div>
          </div>
        </header>

        {/* Scrollable Content */}
        <div className="flex-grow overflow-y-auto p-8 custom-scrollbar">
          <Outlet />
        </div>
      </main>
    </div>
  );
}