// frontend/src/components/Products/ProductDetail.jsx
import { motion } from 'framer-motion';

export default function ProductDetail({ product, quantity, setQuantity, handleAddToCart, onBack }) {
  if (!product) return null;

  return (
    <div className="flex flex-col lg:flex-row gap-16 items-center">
      {/* Product Image Stage */}
      <div className="w-full lg:w-1/2 relative">
        <div className="absolute inset-0 bg-lightGreen rounded-[3rem] rotate-3 transform scale-105 -z-10"></div>
        <div className="bg-white p-12 rounded-[3rem] border border-cream shadow-sm relative overflow-hidden flex justify-center items-center min-h-[500px]">
          <div className="absolute top-8 left-8 bg-accentYellow text-textMain text-sm font-bold px-4 py-1 rounded-full uppercase tracking-wide">
            100% Organic
          </div>
          <motion.img 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            src={product.image} 
            alt={product.name} 
            className="w-full max-h-[400px] object-contain drop-shadow-2xl"
          />
        </div>
      </div>

      {/* Product Info */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center">
        <button onClick={onBack} className="text-textMuted hover:text-farmGreen mb-6 flex items-center gap-2 w-fit font-bold uppercase tracking-wider text-sm transition-colors">
          ← Back to Shop
        </button>
        
        <h1 className="text-5xl font-serif font-bold text-textMain mb-4 leading-tight">{product.name}</h1>
        
        {/* Fake Reviews for Premium Feel */}
        <div className="flex items-center gap-2 mb-6">
          <div className="flex text-accentYellow">
            ★★★★★
          </div>
          <span className="text-sm text-textMuted font-medium">(12 Customer Reviews)</span>
        </div>

        <p className="text-4xl font-serif font-bold text-farmGreen mb-8">Rs. {product.price_npr}</p>
        
        <p className="text-textMuted text-lg mb-10 leading-relaxed font-medium">
          {product.description}
        </p>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-8">
          {/* Custom Elegant Quantity Selector */}
          <div className="flex items-center border-2 border-cream rounded-full overflow-hidden bg-white h-14">
            <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-6 h-full text-textMuted hover:bg-lightGreen hover:text-textMain transition-colors font-bold text-xl">-</button>
            <span className="w-12 text-center font-bold text-lg text-textMain">{quantity}</span>
            <button onClick={() => setQuantity(Math.min(product.stock_quantity || 10, quantity + 1))} className="px-6 h-full text-textMuted hover:bg-lightGreen hover:text-textMain transition-colors font-bold text-xl">+</button>
          </div>
          
          <motion.button 
            whileHover={{ scale: 1.02 }} 
            whileTap={{ scale: 0.98 }}
            onClick={handleAddToCart}
            className="btn-premium w-full sm:w-auto h-14 text-lg flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            Add to Cart
          </motion.button>
        </div>

        <div className="pt-8 border-t border-cream text-sm font-bold text-textMuted flex flex-col gap-2">
          <p>Availability: <span className="text-farmGreen">{product.stock_quantity > 0 ? `${product.stock_quantity} in stock` : 'Out of stock'}</span></p>
          <p>Category: <span className="text-textMain">{product.category}</span></p>
        </div>
      </div>
    </div>
  );
}