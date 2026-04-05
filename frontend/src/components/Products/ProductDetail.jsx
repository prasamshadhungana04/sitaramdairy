// frontend/src/components/Products/ProductDetail.jsx
import { motion } from 'framer-motion';
import { ArrowLeft, ShoppingCart, Star, ShieldCheck } from 'lucide-react';

export default function ProductDetail({ product, quantity, setQuantity, handleAddToCart, onBack }) {
  if (!product) return null;

  return (
    <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
      {/* Product Image Stage */}
      <div className="w-full lg:w-1/2 relative">
        <div className="absolute inset-0 bg-[#E2B254] rounded-[3rem] rotate-3 transform scale-105 opacity-20 -z-10 transition-transform duration-700 hover:rotate-6"></div>
        <div className="bg-white p-12 rounded-[3rem] border border-gray-100 shadow-xl relative overflow-hidden flex justify-center items-center min-h-[400px] md:min-h-[500px]">
          <div className="absolute top-6 left-6 bg-[#002147] text-[#E2B254] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
            Tokha Farm Fresh
          </div>
          <motion.img 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            src={product.image || product.image_url} 
            alt={product.name} 
            className="w-full max-h-[400px] object-contain drop-shadow-[0_20px_30px_rgba(0,33,71,0.2)]"
          />
        </div>
      </div>

      {/* Product Info */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center">
        <button onClick={onBack} className="text-gray-400 hover:text-[#002147] mb-6 flex items-center gap-2 w-fit font-bold uppercase tracking-wider text-xs transition-colors">
          <ArrowLeft size={16} /> Back to Catalog
        </button>
        
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#002147] mb-4 leading-tight">
          {product.name}
        </h1>
        
        {/* Premium Reviews */}
        <div className="flex items-center gap-3 mb-6">
          <div className="flex text-[#E2B254]">
            <Star size={18} fill="currentColor" />
            <Star size={18} fill="currentColor" />
            <Star size={18} fill="currentColor" />
            <Star size={18} fill="currentColor" />
            <Star size={18} fill="currentColor" />
          </div>
          <span className="text-sm text-gray-500 font-medium">Verified Quality</span>
        </div>

        <p className="text-3xl font-bold text-[#E2B254] mb-6">Rs. {product.price_npr}</p>
        
        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
          {product.description}
        </p>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8">
          {/* Luxury Quantity Selector */}
          <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden bg-white h-14 shadow-sm">
            <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-5 h-full text-gray-400 hover:bg-gray-50 hover:text-[#002147] transition-colors font-bold text-xl">-</button>
            <span className="w-12 text-center font-bold text-lg text-[#002147]">{quantity}</span>
            <button onClick={() => setQuantity(Math.min(product.stock_quantity || 10, quantity + 1))} className="px-5 h-full text-gray-400 hover:bg-gray-50 hover:text-[#002147] transition-colors font-bold text-xl">+</button>
          </div>
          
          <motion.button 
            whileHover={{ scale: 1.02 }} 
            whileTap={{ scale: 0.98 }}
            onClick={handleAddToCart}
            className="w-full sm:w-auto h-14 px-8 text-lg font-bold flex items-center justify-center gap-3 bg-[#002147] text-white rounded-xl shadow-lg hover:bg-[#E2B254] hover:text-[#002147] transition-colors duration-300"
          >
            <ShoppingCart size={20} />
            Add to Order
          </motion.button>
        </div>

        <div className="pt-6 border-t border-gray-100 flex flex-col gap-3">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <ShieldCheck size={18} className="text-green-500" />
            <span>Availability: <strong className="text-[#002147]">{product.stock_quantity > 0 ? 'In Stock' : 'Sold Out'}</strong></span>
          </div>
          <p className="text-sm text-gray-600 pl-7">Category: <strong className="text-[#002147]">{product.category}</strong></p>
        </div>
      </div>
    </div>
  );
}