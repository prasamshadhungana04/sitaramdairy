// frontend/src/components/Products/ProductCard.jsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <motion.div 
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-[2rem] shadow-sm border border-cream overflow-hidden group relative flex flex-col h-full"
    >
      {/* Premium Badge */}
      <div className="absolute top-4 left-4 z-10 bg-accentYellow text-textMain text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
        Fresh
      </div>

      <Link to={`/products/${product.id}`} className="block relative bg-lightGreen pt-8 pb-4 px-4 overflow-hidden">
        {/* Abstract background shape behind product */}
        <div className="absolute inset-0 bg-farmGreen/5 rounded-full blur-3xl transform group-hover:scale-110 transition-transform duration-500" />
        
        <img 
          src={product.image} 
          alt={product.name} 
          className="h-48 w-full object-contain relative z-10 transform group-hover:scale-105 transition-transform duration-500 drop-shadow-xl" 
        />
      </Link>
      
      <div className="p-6 flex flex-col flex-grow text-center">
        <p className="text-sm text-textMuted mb-2 uppercase tracking-wider">{product.category}</p>
        <Link to={`/products/${product.id}`}>
          <h3 className="text-xl font-serif font-bold text-textMain hover:text-farmGreen transition-colors mb-4 line-clamp-2">
            {product.name}
          </h3>
        </Link>
        
        <div className="mt-auto pt-4 border-t border-cream flex justify-between items-center">
          <span className="text-2xl font-bold text-farmGreen">Rs. {product.price_npr}</span>
          <motion.button 
            whileTap={{ scale: 0.9 }}
            onClick={() => addToCart(product, 1)}
            className="w-10 h-10 bg-farmGreen text-white rounded-full flex items-center justify-center hover:bg-textMain transition-colors shadow-md"
            title="Add to Cart"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}