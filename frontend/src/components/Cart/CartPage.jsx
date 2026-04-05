// frontend/src/components/Cart/CartPage.jsx
import { motion } from 'framer-motion';

export default function CartComponent({ cartItems, cartTotal, updateQuantity, removeFromCart, onCheckout }) {
  return (
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
      {/* Cart Items List */}
      <div className="flex-grow bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h1 className="text-2xl font-bold text-textMain mb-6 border-b pb-4">Shopping Cart</h1>
        <div className="space-y-6">
          {cartItems.map(item => (
            <div key={item.id} className="flex items-center gap-4 py-4 border-b border-gray-50">
              <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded bg-milk p-1" />
              <div className="flex-grow">
                <h3 className="font-semibold text-textMain">{item.name}</h3>
                <p className="text-green-700 font-medium">Rs. {item.price_npr}</p>
              </div>
              <div className="flex items-center gap-3">
                <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-2 py-1 bg-gray-100 rounded hover:bg-gray-200">-</button>
                <span className="w-8 text-center font-semibold">{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-2 py-1 bg-gray-100 rounded hover:bg-gray-200">+</button>
              </div>
              <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:text-red-700 ml-4 text-sm font-medium">Remove</button>
            </div>
          ))}
        </div>
      </div>

      {/* Order Summary Sidebar */}
      <div className="w-full lg:w-96">
        <div className="bg-dairyBlue p-6 rounded-xl shadow-sm sticky top-24 text-textMain">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>
          <div className="flex justify-between mb-2 text-sm">
            <span>Subtotal</span>
            <span className="font-semibold">Rs. {cartTotal}</span>
          </div>
          <div className="flex justify-between mb-4 pb-4 border-b border-blue-200 text-sm">
            <span>Delivery</span>
            <span className="text-green-700 font-semibold">Calculated at checkout</span>
          </div>
          <div className="flex justify-between font-bold text-lg mb-6">
            <span>Total</span>
            <span className="text-green-700">Rs. {cartTotal}</span>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.02, borderRadius: "20px" }}
            whileTap={{ scale: 0.98 }}
            onClick={onCheckout}
            className="w-full bg-textMain text-white py-3 rounded-lg font-bold shadow-md hover:bg-gray-800 transition-colors"
          >
            Proceed to Checkout
          </motion.button>
        </div>
      </div>
    </div>
  );
}