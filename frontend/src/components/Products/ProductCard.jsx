// frontend/src/components/Products/ProductCard.jsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <motion.div 
      whileHover={{ scale: 1.03, borderRadius: ["12px", "24px", "16px"] }}
      transition={{ duration: 0.3 }}
      className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col justify-between h-full"
    >
      <Link to={`/products/${product.id}`}>
        <img src={product.image} alt={product.name} className="h-48 w-full object-contain mb-4 rounded-md bg-milk p-2" />
        <h3 className="text-lg font-semibold text-textMain">{product.name}</h3>
        <p className="text-sm text-gray-500 mb-2">{product.category}</p>
      </Link>
      
      <div className="flex justify-between items-center mt-4">
        <span className="text-xl font-bold text-green-700">Rs. {product.price_npr}</span>
        <motion.button 
          whileTap={{ scale: 0.9 }}
          onClick={() => addToCart(product, 1)}
          className="bg-dairyBlue text-blue-800 px-4 py-2 rounded-full font-medium hover:bg-blue-100 transition-colors"
        >
          Add
        </motion.button>
      </div>
    </motion.div>
  );
}