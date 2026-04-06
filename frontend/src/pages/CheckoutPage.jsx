// frontend/src/pages/CheckoutPage.jsx
import { useCart } from '../context/CartContext';
import CheckoutComponent from '../components/Checkout/CheckoutPage';
import { ShieldCheck, Lock, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CheckoutPage() {
  const { cartTotal } = useCart();
  const transactionUuid = `ORD-${Date.now()}`;

  const handleEsewaPayment = (e) => { 
    e.preventDefault(); 
    document.getElementById('esewa-form').submit(); 
  };

  return (
    <main className="bg-cheeseCream min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-5xl mx-auto">
        
        {/* === BREADCRUMB / BACK LINK === */}
        <div className="mb-10">
          <Link to="/cart" className="inline-flex items-center gap-2 text-[10px] font-black text-gray-400 uppercase tracking-widest hover:text-dairyRed transition-colors group">
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> 
            Back to Selection
          </Link>
        </div>

        {/* === PAGE HEADER === */}
        <div className="text-center mb-16 space-y-4">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-dairyRed/10 rounded-2xl flex items-center justify-center text-dairyRed shadow-inner">
              <Lock size={32} strokeWidth={2.5} />
            </div>
          </div>
          <h1 className="text-5xl font-serif font-bold text-dairyRed red-text-shadow leading-tight">
            Secure Gateway
          </h1>
          <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em]">
            Finalizing your premium organic order via eSewa
          </p>
        </div>

        {/* === MAIN CHECKOUT CONTAINER === */}
        {/* Updated with Cream Cheesy details and rounded corners */}
        <div className="bg-white rounded-[3rem] shadow-premium p-10 md:p-16 border border-gray-100 relative overflow-hidden">
          
          {/* Subtle red branding glow in the background */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-dairyRed/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />
          
          <div className="relative z-10">
            {/* Maintaining your original component call. 
                Ensure CheckoutComponent is updated to use the new Red/Black theme for buttons.
            */}
            <CheckoutComponent 
              cartTotal={cartTotal} 
              handleEsewaPayment={handleEsewaPayment} 
              transactionUuid={transactionUuid} 
            />
          </div>

          {/* === TRUST & COMPLIANCE FOOTER === */}
          <div className="mt-16 pt-10 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center text-green-600">
                <ShieldCheck size={20} />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-black text-dairyBlack uppercase tracking-widest">Encrypted Payment</span>
                <span className="text-[9px] text-gray-400 font-bold">Processed by eSewa Nepal</span>
              </div>
            </div>

            {/* Visual confirmation of payment methods */}
            <div className="flex items-center gap-8 opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
               <img src="https://esewa.com.np/common/images/esewa_logo.png" alt="eSewa" className="h-6 object-contain" />
               <div className="h-6 w-[1px] bg-gray-300" />
               <span className="text-[10px] font-black text-dairyBlack uppercase tracking-[0.2em]">Verified Merchant</span>
            </div>
          </div>
        </div>

        {/* Support Contact */}
        <p className="text-center mt-12 text-[10px] font-black text-gray-400 uppercase tracking-widest">
          Transaction issues? <a href="/contacts" className="text-dairyRed border-b border-dairyRed/30 hover:border-dairyRed transition-all">Contact Sita Ram Support</a>
        </p>

      </div>
    </main>
  );
}