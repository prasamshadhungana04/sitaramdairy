// frontend/src/components/Layout/Header.jsx
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { motion } from 'framer-motion';

export default function Header() {
  const { cartItems } = useCart();
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About us', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contacts', path: '/contacts' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm py-4">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-3xl font-serif font-extrabold text-dairyNavy tracking-tight">
          Sita Ram
        </Link>

        {/* Center Navigation (Matches Image 1) */}
        <nav className="hidden md:flex space-x-10 items-center">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link 
                key={link.name} 
                to={link.path} 
                className={`text-lg font-bold flex items-center gap-1 transition-colors ${
                  isActive ? 'text-dairyGold' : 'text-dairyNavy hover:text-dairyGold'
                }`}
              >
                {link.name}
                {/* The Golden Caret from your screenshot */}
                <span className="text-dairyGold text-sm mt-1">❯</span>
              </Link>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-6">
          <Link to="/login" className="text-dairyNavy font-bold hover:text-dairyGold transition-colors">
            Login
          </Link>

          <Link to="/cart" className="relative">
            <svg className="w-7 h-7 text-dairyNavy hover:text-dairyGold transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            {cartCount > 0 && (
              <motion.span 
                initial={{ scale: 0 }} animate={{ scale: 1 }}
                className="absolute -top-2 -right-2 inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-dairyGold rounded-full"
              >
                {cartCount}
              </motion.span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}