// frontend/src/components/Layout/Header.jsx
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import ContactModal from '../ContactModal';

const Header = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [cartCount, setCartCount] = useState(3); // Example cart count
  const location = useLocation();
  
  const getActiveLink = () => {
    const path = location.pathname;
    if (path === '/') return 'home';
    return path.slice(1);
  };
  
  const [activeLink, setActiveLink] = useState(getActiveLink());
  const [hoveredItem, setHoveredItem] = useState(null);

  const navItems = [
    { id: 'home', label: 'Home', path: '/' },
    { id: 'products', label: 'Products', path: '/products' },
    { id: 'about', label: 'About Us', path: '/about' },
    { id: 'services', label: 'Services', path: '/services' }, // Changed from Dealers to Services
    { id: 'notices', label: 'Notices', path: '/notices' },
  ];

  const handleNavClick = (id) => {
    setActiveLink(id);
  };

  return (
    <>
      <header className="bg-white shadow-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" onClick={() => handleNavClick('home')} className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center group-hover:bg-red-700 transition-all duration-300 transform group-hover:scale-110">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <h1 className="text-2xl font-fraunces font-bold text-red-700 group-hover:text-red-600 transition-colors">
                Sita Ram Dairy
              </h1>
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.path}
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                  onClick={() => handleNavClick(item.id)}
                  className={`font-dmsans font-semibold transition-all duration-300 relative ${
                    activeLink === item.id
                      ? 'text-red-600'
                      : 'text-gray-600 hover:text-red-500'
                  }`}
                >
                  <span className="relative inline-block">
                    {item.label}
                    {/* Hover animation line */}
                    {hoveredItem === item.id && activeLink !== item.id && (
                      <motion.span
                        initial={{ width: 0 }}
                        animate={{ width: '100%' }}
                        exit={{ width: 0 }}
                        className="absolute -bottom-1 left-0 h-0.5 bg-red-400"
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </span>
                  {activeLink === item.id && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-red-600"
                      initial={false}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </Link>
              ))}
            </nav>

            {/* Right side buttons - Cart and Login */}
            <div className="flex items-center gap-4">
              {/* Cart Button */}
              <Link to="/cart" className="relative group">
                <button className="relative p-2 rounded-full hover:bg-red-50 transition-all duration-300">
                  <svg 
                    className="w-6 h-6 text-gray-700 group-hover:text-red-600 transition-colors" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1.5 6M18 13l1.5 6M9 21h6M12 15v6" />
                  </svg>
                  {cartCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                      {cartCount}
                    </span>
                  )}
                </button>
              </Link>

              {/* Login Button */}
              <Link to="/login">
                <button className="bg-transparent border-2 border-red-600 text-red-600 px-5 py-2 rounded-full font-dmsans font-semibold hover:bg-red-600 hover:text-white transition-all duration-300 transform hover:scale-105">
                  Login
                </button>
              </Link>

              {/* Contact Button */}
              <button
                onClick={() => setIsContactOpen(true)}
                className="bg-red-600 text-white px-5 py-2 rounded-full font-dmsans font-semibold hover:bg-red-700 transition-all duration-300 transform hover:scale-105"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </header>

      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </>
  );
};

export default Header;