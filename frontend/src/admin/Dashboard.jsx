// frontend/src/admin/Dashboard.jsx
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Package, ShoppingCart, Image as ImageIcon, Users, LogOut, LayoutDashboard, ChevronRight } from 'lucide-react';
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
    <div className="flex h-screen bg-cheeseCream overflow-hidden">
      
      {/* === PREMIUM ONYX SIDEBAR === */}
      <aside className="w-72 bg-dairyBlack text-white flex flex-col shadow-2xl z-20 relative">
        {/* Subtle Branding Header */}
        <div className="p-8 border-b border-white/5 relative z-10">
          <Link to="/" className="group flex items-center gap-3">
            <div className="w-10 h-10 bg-dairyRed rounded-xl flex items-center justify-center shadow-redGlow group-hover:scale-110 transition-transform">
              <span className="text-white font-serif font-bold text-lg">SR</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-serif font-bold text-white tracking-tight">Sita Ram</span>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-dairyRed">Admin Panel</span>
            </div>
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="flex-grow p-6 space-y-2 relative z-10 overflow-y-auto custom-scrollbar">
          {navItems.map((item) => {
            const isActive = item.exact 
              ? location.pathname === item.path 
              : location.pathname.startsWith(item.path);
            const Icon = item.icon;

            return (
              <Link 
                key={item.name} 
                to={item.path} 
                className={`flex items-center justify-between p-4 rounded-2xl font-bold transition-all duration-300 group ${
                  isActive 
                    ? 'bg-dairyRed text-white shadow-redGlow translate-x-2' 
                    : 'text-gray-400 hover:bg-white/5 hover:text-white'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon size={20} strokeWidth={isActive ? 2.5 : 2} className={isActive ? 'text-white' : 'group-hover:text-dairyRed transition-colors'} />
                  <span className="text-sm tracking-wide">{item.name}</span>
                </div>
                {isActive && <ChevronRight size={16} className="text-white/50" />}
              </Link>
            );
          })}
        </nav>

        {/* Logout Section */}
        <div className="p-6 border-t border-white/5 relative z-10">
          <button 
            onClick={handleLogout}
            className="flex items-center gap-3 w-full p-4 rounded-2xl text-gray-400 font-bold hover:bg-dairyRed/10 hover:text-dairyRed transition-all group"
          >
            <LogOut size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm uppercase tracking-widest">Logout</span>
          </button>
        </div>
      </aside>

      {/* === MAIN CONTENT AREA === */}
      <main className="flex-grow flex flex-col h-screen overflow-hidden bg-cheeseCream">
        
        {/* Top Header Row */}
        <header className="h-24 bg-white/80 backdrop-blur-md border-b border-dairyRed/10 flex items-center justify-between px-10 shrink-0">
          <div>
            <h1 className="text-3xl font-serif font-bold text-dairyRed red-text-shadow">
              {navItems.find(i => i.path === location.pathname)?.name || 'Admin Overview'}
            </h1>
            <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mt-1">
              Sita Ram Organic Dairy Farm
            </p>
          </div>

          <div className="flex items-center gap-6">
            {/* User Profile Info */}
            <div className="text-right border-r border-gray-100 pr-6">
              <p className="text-sm font-black text-dairyBlack uppercase tracking-wider">{user?.name || 'Prashant Admin'}</p>
              <p className="text-[10px] font-bold text-dairyRed uppercase tracking-widest">System Manager</p>
            </div>
            
            {/* Admin Avatar */}
            <div className="relative">
              <div className="w-12 h-12 bg-cheeseCream rounded-2xl border-2 border-dairyRed/20 flex items-center justify-center overflow-hidden shadow-sm">
                <Users size={24} className="text-dairyRed" />
              </div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
            </div>
          </div>
        </header>

        {/* Dynamically Loaded Content (Products, Banners, etc.) */}
        <div className="flex-grow overflow-y-auto p-10 custom-scrollbar">
          <Outlet />
        </div>
      </main>
    </div>
  );
}