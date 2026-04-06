// frontend/src/pages/CartPage.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag, ShieldCheck } from 'lucide-react';

export default function CartPage() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Premium A2 Cow Milk", price: 130, quantity: 2, image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=400&q=80", category: "Fresh Milk" },
    { id: 2, name: "Golden Bilona Ghee", price: 1200, quantity: 1, image: "https://images.unsplash.com/photo-1601314101416-3687edec84b3?auto=format&fit=crop&w=400&q=80", category: "Pure Ghee" }
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
    <main className="bg-cheeseCream min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* === PAGE HEADER === */}
        <div className="mb-12">
          <h1 className="text-5xl font-serif font-bold text-dairyRed red-text-shadow">Your Selection</h1>
          <p className="text-gray-500 mt-3 font-medium uppercase tracking-widest text-xs">Premium Dairy Procurement</p>
        </div>

        {cartItems.length === 0 ? (
          /* === EMPTY STATE === */
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="text-center py-24 bg-white rounded-[3rem] shadow-premium border border-gray-100"
          >
            <div className="w-24 h-24 bg-cheeseCream rounded-full flex items-center justify-center mx-auto mb-8 text-dairyRed shadow-inner">
              <ShoppingBag size={48} />
            </div>
            <h2 className="text-3xl font-serif font-bold text-dairyBlack mb-6">Your basket is currently empty</h2>
            <Link to="/products">
              <button className="bg-dairyBlack text-white px-10 py-4 rounded-full font-bold hover:bg-dairyRed transition-all duration-300 shadow-xl">
                Continue Shopping
              </button>
            </Link>
          </motion.div>
        ) : (
          /* === CART CONTENT === */
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            
            {/* List of Cart Items */}
            <div className="lg:col-span-2 space-y-6">
              <AnimatePresence mode="popLayout">
                {cartItems.map((item) => (
                  <motion.div 
                    key={item.id} 
                    layout 
                    initial={{ opacity: 0, x: -20 }} 
                    animate={{ opacity: 1, x: 0 }} 
                    exit={{ opacity: 0, x: -50 }} 
                    className="bg-white rounded-[2rem] shadow-sm p-6 flex flex-col sm:flex-row gap-8 items-center border border-gray-50 hover:shadow-premium transition-all duration-500 group"
                  >
                    {/* High-res Product Image */}
                    <div className="relative overflow-hidden rounded-2xl bg-cheeseCream w-32 h-32 shrink-0">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover mix-blend-multiply group-hover:scale-110 transition-transform duration-700" 
                      />
                    </div>

                    <div className="flex-1 text-center sm:text-left">
                      <p className="text-[10px] font-black text-dairyRed uppercase tracking-[0.2em] mb-1">{item.category}</p>
                      <h3 className="font-serif font-bold text-2xl text-dairyBlack">{item.name}</h3>
                      <p className="text-gray-400 font-bold mt-1">NPR {item.price}</p>
                    </div>
                    
                    {/* Quantity Controller */}
                    <div className="flex items-center gap-5 bg-cheeseCream p-2 rounded-2xl border border-dairyRed/10">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)} 
                        className="w-10 h-10 rounded-xl bg-white flex items-center justify-center hover:bg-dairyRed hover:text-white transition-all text-dairyBlack shadow-sm"
                      >
                        <Minus size={16} strokeWidth={3} />
                      </button>
                      <span className="w-6 text-center font-black text-dairyBlack text-lg">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)} 
                        className="w-10 h-10 rounded-xl bg-white flex items-center justify-center hover:bg-dairyRed hover:text-white transition-all text-dairyBlack shadow-sm"
                      >
                        <Plus size={16} strokeWidth={3} />
                      </button>
                    </div>
                    
                    {/* Item Total & Remove */}
                    <div className="text-right min-w-[120px] flex flex-col items-end gap-4">
                      <button 
                        onClick={() => removeItem(item.id)} 
                        className="text-gray-300 hover:text-dairyRed transition-colors bg-cheeseCream p-2.5 rounded-xl"
                      >
                        <Trash2 size={20} />
                      </button>
                      <p className="font-black text-2xl text-dairyBlack">NPR {item.price * item.quantity}</p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Sticky Order Summary Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-[3rem] shadow-2xl p-10 border border-gray-100 sticky top-32">
                <h2 className="text-3xl font-serif font-bold text-dairyBlack mb-8">Order Summary</h2>
                
                <div className="space-y-5 text-gray-500 mb-8 border-b border-gray-50 pb-8">
                  <div className="flex justify-between font-bold text-sm uppercase tracking-widest">
                    <span>Subtotal</span>
                    <span className="text-dairyBlack">NPR {subtotal}</span>
                  </div>
                  <div className="flex justify-between font-bold text-sm uppercase tracking-widest">
                    <span>Delivery Charge</span>
                    <span>
                      {deliveryCharge === 0 
                        ? <span className="text-green-600 font-black">Complimentary</span> 
                        : `NPR ${deliveryCharge}`
                      }
                    </span>
                  </div>
                </div>

                <div className="mb-10">
                  <div className="flex justify-between items-end">
                    <span className="text-sm font-black text-dairyBlack uppercase tracking-widest">Total Amount</span>
                    <span className="text-4xl font-black text-dairyRed red-text-shadow">NPR {total}</span>
                  </div>
                  
                  {deliveryCharge > 0 && (
                    <div className="mt-4 bg-dairyRed/5 p-4 rounded-2xl border border-dairyRed/10">
                      <p className="text-[10px] font-black text-dairyRed uppercase tracking-widest text-center">
                        Add NPR {2000 - subtotal} more for <span className="underline">Free Delivery</span>
                      </p>
                    </div>
                  )}
                </div>

                <Link to="/checkout" className="block">
                  <button className="w-full bg-dairyRed text-white py-5 rounded-[1.5rem] font-black text-xs uppercase tracking-[0.2em] hover:bg-dairyBlack transition-all duration-500 shadow-redGlow flex justify-center items-center gap-3 group">
                    Secure eSewa Checkout 
                    <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                  </button>
                </Link>
                
                <div className="mt-8 pt-8 border-t border-gray-50 flex items-center justify-center gap-3 text-[10px] font-black uppercase tracking-widest text-gray-400">
                  <ShieldCheck size={16} className="text-green-600" /> 
                  Enterprise Grade Security
                </div>
              </div>
            </div>

          </div>
        )}
      </div>
    </main>
  );
}