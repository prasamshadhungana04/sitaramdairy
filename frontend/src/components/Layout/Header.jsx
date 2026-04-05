// frontend/src/components/Layout/Header.jsx
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { motion } from 'framer-motion';

export default function Header() {
  const { cartItems } = useCart();
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="sticky top-0 z-50 bg-milk/90 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-textMain tracking-tight">
          Sita Ram <span className="text-green-600">Dairy</span>
        </Link>

        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="text-textMain hover:text-green-600 font-medium transition-colors">Home</Link>
          <Link to="/products" className="text-textMain hover:text-green-600 font-medium transition-colors">Shop</Link>
          <Link to="/about" className="text-textMain hover:text-green-600 font-medium transition-colors">Our Farm</Link>
        </nav>

        <div className="flex items-center space-x-6">
          <motion.div whileHover={{ scale: 1.05, borderRadius: "16px" }} whileTap={{ scale: 0.95 }}>
            <Link to="/login" className="text-sm font-semibold text-textMain px-4 py-2 border border-gray-300 rounded-lg hover:bg-cream transition-colors">
              Login
            </Link>
          </motion.div>

          <Link to="/cart" className="relative p-2">
            <svg className="w-6 h-6 text-textMain" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            {cartCount > 0 && (
              <motion.span 
                initial={{ scale: 0 }} animate={{ scale: 1 }}
                className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-green-600 rounded-full"
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