// frontend/src/pages/CheckoutPage.jsx
import { useCart } from '../context/CartContext';
import CheckoutComponent from '../components/Checkout/CheckoutPage';

export default function CheckoutPage() {
  const { cartTotal } = useCart();
  const transactionUuid = `ORD-${Date.now()}`;

  const handleEsewaPayment = (e) => { e.preventDefault(); document.getElementById('esewa-form').submit(); };

  return (
    <div className="bg-[#F9F6F0] min-h-screen py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-bold text-[#002147]">Secure Checkout</h1>
          <p className="text-gray-500 mt-2">Complete your premium order safely via eSewa.</p>
        </div>
        <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
          <CheckoutComponent cartTotal={cartTotal} handleEsewaPayment={handleEsewaPayment} transactionUuid={transactionUuid} />
        </div>
      </div>
    </div>
  );
}