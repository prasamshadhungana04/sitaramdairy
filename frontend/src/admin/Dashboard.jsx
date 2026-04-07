// frontend/src/admin/Dashboard.jsx
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Package, ShoppingCart, Image as ImageIcon, Users, LogOut, LayoutDashboard, ChevronRight, Droplets } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';

export default function Dashboard() {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const navItems = [
    { name: 'Overview', path: '/admin', icon: LayoutDashboard, exact: true },
    { name: 'Products', path: '/admin/products', icon: Package },
    { name: 'Milk Inventory', path: '/admin/milk', icon: Droplets },
    { name: 'Orders', path: '/admin/orders', icon: ShoppingCart },
    { name: 'Banners', path: '/admin/banners', icon: ImageIcon },
    { name: 'Staff & Admins', path: '/admin/users', icon: Users },
  ];

  return (
    <div className="flex h-screen bg-[#FDF8E7] font-sans overflow-hidden">
      
      {/* === BRANDED ONYX SIDEBAR === */}
      <aside className="w-72 bg-[#1A1A1A] text-gray-400 flex flex-col shadow-2xl z-20">
        <div className="p-8 border-b border-white/5">
          <Link to="/" className="flex items-center gap-3">
            <img src="/logo.png" alt="Sita Ram Logo" className="w-10 h-10 object-contain" />
            <div className="flex flex-col">
              <span className="text-xl font-serif font-bold text-white tracking-tight leading-none">Sita Ram</span>
              <span className="text-[10px] font-black uppercase tracking-widest text-[#9e111a] mt-1">Management</span>
            </div>
          </Link>
        </div>

        <nav className="flex-grow p-6 space-y-2 overflow-y-auto custom-scrollbar">
          {navItems.map((item) => {
            const isActive = item.exact 
              ? location.pathname === item.path 
              : location.pathname.startsWith(item.path);
            const Icon = item.icon;

            return (
              <Link 
                key={item.name} 
                to={item.path} 
                className={`flex items-center justify-between p-4 rounded-2xl text-sm font-bold transition-all duration-300 ${
                  isActive 
                    ? 'bg-[#9e111a] text-white shadow-xl translate-x-2' 
                    : 'hover:bg-white/5 hover:text-white'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon size={20} className={isActive ? 'text-white' : 'text-gray-500'} />
                  {item.name}
                </div>
                {isActive && <ChevronRight size={16} className="text-white/50" />}
              </Link>
            );
          })}
        </nav>

        <div className="p-6 border-t border-white/5">
          <button 
            onClick={handleLogout}
            className="flex items-center gap-3 w-full p-4 rounded-2xl text-gray-400 font-bold hover:bg-[#9e111a]/10 hover:text-[#9e111a] transition-all"
          >
            <LogOut size={20} />
            Secure Exit
          </button>
        </div>
      </aside>

      {/* === MAIN CONTENT === */}
      <main className="flex-grow flex flex-col h-screen overflow-hidden">
        <header className="h-24 bg-white/80 backdrop-blur-md border-b border-[#9e111a]/10 flex items-center justify-between px-10 shrink-0 z-10">
          <h1 className="text-3xl font-serif font-black text-[#1A1A1A] tracking-tight">
            {navItems.find(i => i.path === location.pathname)?.name || 'Admin Overview'}
          </h1>
          <div className="flex items-center gap-6">
            <div className="text-right border-r border-gray-200 pr-6">
              <p className="text-sm font-black text-[#1A1A1A] uppercase tracking-wider">{user?.name || 'Super Admin'}</p>
              <p className="text-[10px] font-bold text-[#9e111a] uppercase tracking-widest">System Manager</p>
            </div>
            <div className="w-12 h-12 bg-[#FDF8E7] rounded-2xl border-2 border-[#9e111a]/20 flex items-center justify-center">
              <Users size={24} className="text-[#9e111a]" />
            </div>
          </div>
        </header>

        <div className="flex-grow overflow-y-auto p-10 custom-scrollbar">
          <Outlet />
        </div>
      </main>
    </div>
  );
}