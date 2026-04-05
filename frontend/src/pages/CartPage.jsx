// frontend/src/pages/CartPage.jsx
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import CartComponent from '../components/Cart/CartPage'; // Assuming the UI component is named this based on the tree

export default function CartPage() {
  const { cartItems, cartTotal, updateQuantity, removeFromCart } = useCart();
  const navigate = useNavigate();

  if (cartItems.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold text-textMain mb-4">Your Cart is Empty</h2>
        <button onClick={() => navigate('/products')} className="text-green-600 font-semibold hover:underline">Continue Shopping</button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <CartComponent 
        cartItems={cartItems} 
        cartTotal={cartTotal} 
        updateQuantity={updateQuantity} 
        removeFromCart={removeFromCart} 
        onCheckout={() => navigate('/checkout')}
      />
    </div>
  );
}