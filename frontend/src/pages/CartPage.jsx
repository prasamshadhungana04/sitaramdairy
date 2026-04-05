// frontend/src/pages/CartPage.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag, ShieldCheck } from 'lucide-react';

export default function CartPage() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Premium A2 Cow Milk", price: 130, quantity: 2, image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=200&q=80", category: "Milk" },
    { id: 2, name: "Golden Bilona Ghee", price: 1200, quantity: 1, image: "https://images.unsplash.com/photo-1601314101416-3687edec84b3?w=200&q=80", category: "Ghee" }
  ]);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(items => items.map(item => item.id === id ? { ...item, quantity: newQuantity } : item));
  };

  const removeItem = (id) => setCartItems(items => items.filter(item => item.id !== id));

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const deliveryCharge = subtotal > 2000 ? 0 : 100;
  const total = subtotal + deliveryCharge;

  return (
    <main className="bg-[#F9F6F0] min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10">
          <h1 className="text-4xl font-serif font-bold text-[#002147]">Shopping Cart</h1>
          <p className="text-gray-500 mt-2">Review your premium dairy selections.</p>
        </div>

        {cartItems.length === 0 ? (
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-24 bg-white rounded-3xl shadow-sm border border-gray-100">
            <div className="w-24 h-24 bg-[#F9F6F0] rounded-full flex items-center justify-center mx-auto mb-6 text-[#E2B254]">
              <ShoppingBag size={48} />
            </div>
            <h2 className="text-2xl font-serif font-bold text-[#002147] mb-4">Your cart is empty</h2>
            <Link to="/products">
              <button className="bg-[#002147] text-white px-8 py-4 rounded-full font-bold hover:bg-[#E2B254] hover:text-[#002147] transition-all duration-300 shadow-lg">
                Return to Shop
              </button>
            </Link>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Cart Items List */}
            <div className="lg:col-span-2 space-y-6">
              <AnimatePresence>
                {cartItems.map((item) => (
                  <motion.div key={item.id} layout initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, x: -50 }} className="bg-white rounded-2xl shadow-sm p-6 flex flex-col sm:flex-row gap-6 items-center border border-gray-100 hover:shadow-md transition-shadow">
                    <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-xl bg-[#F9F6F0]" />
                    <div className="flex-1 text-center sm:text-left">
                      <p className="text-xs font-bold text-[#E2B254] uppercase tracking-wider mb-1">{item.category}</p>
                      <h3 className="font-serif font-bold text-xl text-[#002147]">{item.name}</h3>
                      <p className="text-gray-500 font-medium mt-1">Rs. {item.price}</p>
                    </div>
                    
                    <div className="flex items-center gap-4 bg-[#F9F6F0] p-2 rounded-full border border-gray-200">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:bg-[#002147] hover:text-white transition-colors text-gray-600 shadow-sm"><Minus size={16} /></button>
                      <span className="w-6 text-center font-bold text-[#002147]">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:bg-[#002147] hover:text-white transition-colors text-gray-600 shadow-sm"><Plus size={16} /></button>
                    </div>
                    
                    <div className="text-right min-w-[100px] flex flex-col items-end gap-3">
                      <button onClick={() => removeItem(item.id)} className="text-gray-400 hover:text-red-500 transition-colors bg-red-50 p-2 rounded-lg"><Trash2 size={18} /></button>
                      <p className="font-bold text-xl text-[#002147]">Rs. {item.price * item.quantity}</p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Order Summary Sticky Panel */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100 sticky top-28">
                <h2 className="text-2xl font-serif font-bold text-[#002147] mb-6">Order Summary</h2>
                
                <div className="space-y-4 text-gray-600 mb-6">
                  <div className="flex justify-between font-medium">
                    <span>Subtotal</span>
                    <span>Rs. {subtotal}</span>
                  </div>
                  <div className="flex justify-between font-medium">
                    <span>Delivery Charge</span>
                    <span>{deliveryCharge === 0 ? <span className="text-green-500 font-bold">Free</span> : `Rs. ${deliveryCharge}`}</span>
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-100 mb-8">
                  <div className="flex justify-between items-end">
                    <span className="text-lg font-bold text-[#002147]">Total Amount</span>
                    <span className="text-3xl font-bold text-[#E2B254]">Rs. {total}</span>
                  </div>
                  {deliveryCharge > 0 && <p className="text-xs text-gray-400 mt-2 text-right">Add Rs. {2000 - subtotal} more for Free Delivery</p>}
                </div>

                <Link to="/checkout" className="block">
                  <button className="w-full bg-[#002147] text-white py-4 rounded-xl font-bold text-lg hover:bg-[#E2B254] hover:text-[#002147] transition-all duration-300 shadow-lg flex justify-center items-center gap-2 group">
                    Proceed to eSewa Checkout <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
                
                <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-400">
                  <ShieldCheck size={16} className="text-green-500" /> Secure encrypted payment
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}