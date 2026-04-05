// frontend/src/pages/CartPage.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Fresh Cow Milk", price: 60, quantity: 2, image: "https://images.pexels.com/photos/139172/pexels-photo-139172.jpeg?auto=compress&cs=tinysrgb&w=200" },
    { id: 2, name: "Desi Ghee", price: 450, quantity: 1, image: "https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=200" },
    { id: 3, name: "Thick Curd", price: 45, quantity: 3, image: "https://images.pexels.com/photos/4146459/pexels-photo-4146459.jpeg?auto=compress&cs=tinysrgb&w=200" }
  ]);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const deliveryCharge = subtotal > 500 ? 0 : 40;
  const total = subtotal + deliveryCharge;

  return (
    <main>
      <div className="bg-red-600 text-white py-16 text-center">
        <h1 className="text-4xl font-fraunces font-bold">Your Cart</h1>
        <p className="mt-2 text-red-100">Review your items before checkout</p>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {cartItems.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🛒</div>
            <h2 className="text-2xl font-fraunces font-bold text-gray-700 mb-4">Your cart is empty</h2>
            <Link to="/products">
              <button className="bg-red-600 text-white px-8 py-3 rounded-full font-dmsans font-semibold hover:bg-red-700 transition-all duration-300">
                Continue Shopping
              </button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-md p-4 flex gap-4 items-center border border-red-100"
                >
                  <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-lg" />
                  <div className="flex-1">
                    <h3 className="font-fraunces font-bold text-lg text-red-700">{item.name}</h3>
                    <p className="text-gray-600">₹{item.price}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-8 h-8 rounded-full bg-gray-200 hover:bg-red-600 hover:text-white transition-colors"
                    >
                      -
                    </button>
                    <span className="w-8 text-center font-semibold">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-8 h-8 rounded-full bg-gray-200 hover:bg-red-600 hover:text-white transition-colors"
                    >
                      +
                    </button>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-red-500 hover:text-red-700 ml-4"
                    >
                      🗑️
                    </button>
                  </div>
                  <div className="text-right min-w-[80px]">
                    <p className="font-bold text-red-700">₹{item.price * item.quantity}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-md p-6 border border-red-100 sticky top-24">
                <h2 className="text-2xl font-fraunces font-bold text-red-700 mb-4">Order Summary</h2>
                <div className="space-y-3 border-b border-gray-200 pb-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-semibold">₹{subtotal}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Delivery Charge</span>
                    <span className="font-semibold">₹{deliveryCharge}</span>
                  </div>
                </div>
                <div className="flex justify-between mt-4 text-lg font-bold">
                  <span>Total</span>
                  <span className="text-red-600">₹{total}</span>
                </div>
                <button className="w-full bg-red-600 text-white py-3 rounded-full font-dmsans font-semibold mt-6 hover:bg-red-700 transition-all duration-300 transform hover:scale-105">
                  Proceed to Checkout
                </button>
                <Link to="/products">
                  <button className="w-full bg-transparent border-2 border-red-600 text-red-600 py-3 rounded-full font-dmsans font-semibold mt-3 hover:bg-red-600 hover:text-white transition-all duration-300">
                    Continue Shopping
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default CartPage;