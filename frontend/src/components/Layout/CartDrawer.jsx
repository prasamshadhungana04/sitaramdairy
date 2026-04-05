// frontend/src/components/Layout/CartDrawer.jsx
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';

export default function CartDrawer({ isOpen, onClose }) {
  const { cartItems, cartTotal, removeFromCart } = useCart();
  const navigate = useNavigate();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-textMain/50 backdrop-blur-sm z-40"
          />
          <motion.div 
            initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
            transition={{ type: "spring", damping: 20 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-50 flex flex-col"
          >
            <div className="p-6 border-b border-gray-100 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-textMain">Your Cart</h2>
              <button onClick={onClose} className="text-gray-500 hover:text-red-500 text-2xl">&times;</button>
            </div>
            
            <div className="flex-grow overflow-y-auto p-6 space-y-4 bg-milk">
              {cartItems.length === 0 ? (
                <p className="text-center text-gray-500 mt-10">Cart is empty</p>
              ) : (
                cartItems.map(item => (
                  <div key={item.id} className="flex gap-4 bg-white p-3 rounded-lg shadow-sm border border-gray-100">
                    <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded bg-milk" />
                    <div className="flex-grow">
                      <h4 className="font-semibold text-textMain">{item.name}</h4>
                      <p className="text-green-700 text-sm font-medium">Rs. {item.price_npr} x {item.quantity}</p>
                    </div>
                    <button onClick={() => removeFromCart(item.id)} className="text-red-400 hover:text-red-600 text-sm">Remove</button>
                  </div>
                ))
              )}
            </div>

            <div className="p-6 border-t border-gray-100 bg-white">
              <div className="flex justify-between font-bold text-lg mb-4 text-textMain">
                <span>Total:</span>
                <span className="text-green-700">Rs. {cartTotal}</span>
              </div>
              <button 
                onClick={() => { onClose(); navigate('/checkout'); }}
                disabled={cartItems.length === 0}
                className="w-full bg-textMain text-white py-4 rounded-xl font-bold disabled:opacity-50 hover:bg-gray-800 transition"
              >
                Proceed to Checkout
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}