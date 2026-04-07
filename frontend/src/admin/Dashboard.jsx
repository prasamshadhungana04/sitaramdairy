// frontend/src/admin/Dashboard.jsx
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Package, ShoppingCart, Image as ImageIcon, Users, LogOut, LayoutDashboard, ChevronRight } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { logoutUser } from '../services/auth';

export default function Dashboard() {
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleLogout = async () => {
    await logoutUser();
    navigate('/login');
    window.location.reload();
  };

  const navItems = [
    { name: 'Overview', path: '/admin', icon: LayoutDashboard, exact: true },
    { name: 'Products', path: '/admin/products', icon: Package },
    { name: 'Orders', path: '/admin/orders', icon: ShoppingCart },
    { name: 'Banners', path: '/admin/banners', icon: ImageIcon },
    { name: 'Users & Admins', path: '/admin/users', icon: Users },
  ];

  return (
    <div className="flex h-screen bg-slate-50 font-sans overflow-hidden">
      
      {/* === SLEEK SIDEBAR === */}
      <aside className="w-72 bg-slate-900 text-slate-300 flex flex-col shadow-2xl z-20">
        <div className="p-6 border-b border-slate-800">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-white font-black text-lg tracking-tighter">SR</span>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-white tracking-tight">Admin Portal</span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-400">Sita Ram Dairy</span>
            </div>
          </Link>
        </div>

        <nav className="flex-grow p-4 space-y-1 overflow-y-auto">
          {navItems.map((item) => {
            const isActive = item.exact 
              ? location.pathname === item.path 
              : location.pathname.startsWith(item.path);
            const Icon = item.icon;

            return (
              <Link 
                key={item.name} 
                to={item.path} 
                className={`flex items-center justify-between p-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                  isActive 
                    ? 'bg-indigo-600 text-white shadow-md' 
                    : 'hover:bg-slate-800 hover:text-white'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon size={18} className={isActive ? 'text-white' : 'text-slate-500'} />
                  {item.name}
                </div>
                {isActive && <ChevronRight size={16} className="text-white/50" />}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-slate-800">
          <button 
            onClick={handleLogout}
            className="flex items-center gap-3 w-full p-3 rounded-xl text-slate-400 font-medium hover:bg-rose-500/10 hover:text-rose-500 transition-all"
          >
            <LogOut size={18} />
            Secure Exit
          </button>
        </div>
      </aside>

      {/* === MAIN CONTENT === */}
      <main className="flex-grow flex flex-col h-screen overflow-hidden">
        <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-8 shrink-0 shadow-sm z-10">
          <h1 className="text-2xl font-bold text-slate-800 tracking-tight">
            {navItems.find(i => i.path === location.pathname)?.name || 'Dashboard'}
          </h1>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-sm font-bold text-slate-800">{user?.name || 'Administrator'}</p>
              <p className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest">{user?.role || 'Admin'}</p>
            </div>
            <div className="w-10 h-10 bg-slate-100 rounded-full border border-slate-200 flex items-center justify-center">
              <Users size={18} className="text-slate-600" />
            </div>
          </div>
        </header>

        <div className="flex-grow overflow-y-auto p-8 custom-scrollbar">
          <Outlet />
        </div>
      </main>
    </div>
  );
}