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
      <header className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-40 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            
            {/* Premium Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 bg-[#002147] rounded-full flex items-center justify-center group-hover:bg-[#E2B254] transition-colors duration-500 shadow-md">
                <span className="text-[#E2B254] group-hover:text-[#002147] font-serif font-bold text-xl transition-colors duration-500">SR</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-serif font-bold text-[#002147] leading-none">Sita Ram</h1>
                <span className="text-[10px] font-bold text-[#E2B254] uppercase tracking-[0.2em]">Organic Dairy</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex gap-8 items-center">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.path}
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                  className={`text-sm font-bold tracking-wider uppercase transition-colors duration-300 relative ${
                    activeLink === item.id ? 'text-[#002147]' : 'text-gray-400 hover:text-[#002147]'
                  }`}
                >
                  {item.label}
                  {hoveredItem === item.id && activeLink !== item.id && (
                    <motion.div layoutId="navHover" className="absolute -bottom-2 left-0 right-0 h-0.5 bg-[#E2B254]" />
                  )}
                  {activeLink === item.id && (
                    <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-[#002147]" />
                  )}
                </Link>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-5">
              {/* Contact Icon */}
              <button onClick={() => setIsContactOpen(true)} className="hidden sm:flex text-gray-400 hover:text-[#002147] transition-colors">
                <PhoneCall size={20} />
              </button>

              {/* User/Auth */}
              {isAuthenticated ? (
                <Link to={user?.role === 'admin' ? '/admin' : '/history'} className="text-gray-400 hover:text-[#002147] transition-colors">
                  <User size={22} />
                </Link>
              ) : (
                <Link to="/login" className="hidden sm:block text-sm font-bold text-[#002147] hover:text-[#E2B254] transition-colors uppercase tracking-wider">
                  Login
                </Link>
              )}

              {/* Cart Drawer Toggle */}
              <button onClick={() => setIsCartOpen(true)} className="relative text-gray-400 hover:text-[#002147] transition-colors p-1">
                <ShoppingCart size={24} />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#E2B254] text-[#002147] text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white shadow-sm">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Mobile Menu Toggle */}
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden text-[#002147]">
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