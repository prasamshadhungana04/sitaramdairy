// frontend/src/components/Products/ProductDetail.jsx
import { motion } from 'framer-motion';

export default function ProductDetail({ product, quantity, setQuantity, handleAddToCart, onBack }) {
  if (!product) return null;

  return (
    <div className="flex flex-col md:flex-row gap-12">
      {/* Product Image */}
      <div className="w-full md:w-1/2 flex justify-center bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
        <motion.img 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          src={product.image} 
          alt={product.name} 
          className="max-h-[500px] object-contain"
        />
      </div>

      {/* Product Info */}
      <div className="w-full md:w-1/2 flex flex-col justify-center">
        <button onClick={onBack} className="text-gray-500 hover:text-green-600 mb-4 flex items-center gap-2 w-fit">
          ← Back to Catalog
        </button>
        <h1 className="text-4xl font-bold text-textMain mb-4">{product.name}</h1>
        <p className="text-3xl font-extrabold text-green-700 mb-6">Rs. {product.price_npr}</p>
        
        <p className="text-gray-600 mb-8 leading-relaxed">
          {product.description}
        </p>

        <div className="flex items-center gap-4 mb-8">
          <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden bg-white">
            <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 py-3 bg-gray-50 hover:bg-gray-100 font-bold text-lg">-</button>
            <span className="w-12 text-center font-semibold">{quantity}</span>
            <button onClick={() => setQuantity(Math.min(product.stock_quantity || 10, quantity + 1))} className="px-4 py-3 bg-gray-50 hover:bg-gray-100 font-bold text-lg">+</button>
          </div>
          <span className="text-sm text-gray-500">{product.stock_quantity} available in stock</span>
        </div>

        <motion.button 
          whileHover={{ scale: 1.02, borderRadius: "20px" }}
          whileTap={{ scale: 0.98 }}
          onClick={handleAddToCart}
          className="bg-textMain text-white py-4 px-8 text-lg font-bold rounded-xl shadow-md hover:bg-gray-800 transition-colors w-full md:w-auto"
        >
          Add to Cart
        </motion.button>
      </div>
    </div>
  );
}