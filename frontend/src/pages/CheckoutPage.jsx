// frontend/src/pages/CheckoutPage.jsx
import { useCart } from '../context/CartContext';
import CheckoutComponent from '../components/Checkout/CheckoutPage';

export default function CheckoutPage() {
  const { cartTotal } = useCart();
  const transactionUuid = `ORDER-${Date.now()}`;

  const handleEsewaPayment = (e) => {
    e.preventDefault();
    document.getElementById('esewa-form').submit();
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-textMain mb-8 text-center">Complete Your Order</h1>
      <CheckoutComponent 
        cartTotal={cartTotal} 
        handleEsewaPayment={handleEsewaPayment} 
        transactionUuid={transactionUuid}
      />
    </div>
  );
}