// frontend/src/components/Layout/Header.jsx
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingCart, User, PhoneCall, Menu, X } from 'lucide-react';
import ContactModal from '../ContactModal';
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';
import CartDrawer from './CartDrawer';

const Header = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const { cartItems } = useCart();
  const { user, isAuthenticated } = useAuth();
  const location = useLocation();
  
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const activeLink = location.pathname === '/' ? 'home' : location.pathname.slice(1);
  const [hoveredItem, setHoveredItem] = useState(null);

  const navItems = [
    { id: 'home', label: 'Home', path: '/' },
    { id: 'products', label: 'Products', path: '/products' },
    { id: 'about', label: 'Our Story', path: '/about' },
    { id: 'services', label: 'Services', path: '/services' },
    { id: 'notices', label: 'Farm Updates', path: '/notices' },
  ];

  return (
    <>
      {/* 3D FROSTED GLASS HEADER */}
      <header className="bg-white/40 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] sticky top-0 z-40 border-b border-white/60">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            
            <Link to="/" className="flex items-center gap-3 group">
              {/* Replaced SR badge with logo.png */}
              <img 
                src="/logo.png" 
                alt="Sita Ram Organic Dairy Logo" 
                className="w-14 h-14 object-contain group-hover:scale-105 transition-transform duration-300"
              />
              <div className="hidden sm:block">
                <h1 className="text-xl font-serif font-bold text-dairyBlack leading-none">Sita Ram</h1>
                <span className="text-[10px] font-bold text-gray-600 uppercase tracking-[0.2em]">Organic Dairy</span>
              </div>
            </Link>

            <nav className="hidden lg:flex gap-8 items-center">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.path}
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                  className={`text-sm tracking-wider uppercase transition-all duration-300 relative cursor-pointer ${
                    activeLink === item.id 
                      ? 'text-dairyBlack font-bold' 
                      : 'text-gray-700 font-medium hover:text-dairyBlack hover:font-bold'
                  }`}
                >
                  {item.label}
                  
                  {hoveredItem === item.id && activeLink !== item.id && (
                    <motion.div layoutId="navHover" className="absolute -bottom-2 left-0 right-0 h-[2px] bg-dairyRed/50" />
                  )}
                  {activeLink === item.id && (
                    <div className="absolute -bottom-2 left-0 right-0 h-[2px] bg-dairyRed shadow-[0_2px_8px_rgba(200,16,46,0.5)]" />
                  )}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-5">
              <button onClick={() => setIsContactOpen(true)} className="hidden sm:flex text-dairyBlack hover:text-dairyRed transition-colors">
                <PhoneCall size={20} />
              </button>

              {isAuthenticated ? (
                <Link to={user?.role === 'admin' ? '/admin' : '/history'} className="text-dairyBlack hover:text-dairyRed transition-colors">
                  <User size={22} />
                </Link>
              ) : (
                <Link to="/login" className="hidden sm:block text-sm font-bold text-dairyBlack hover:text-dairyRed transition-colors uppercase tracking-wider">
                  Login
                </Link>
              )}

              <button onClick={() => setIsCartOpen(true)} className="relative text-dairyBlack hover:text-dairyRed transition-colors p-1">
                <ShoppingCart size={24} />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-dairyRed text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-redGlow">
                    {cartCount}
                  </span>
                )}
              </button>

              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden text-dairyBlack">
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default Header;