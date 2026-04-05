// frontend/src/components/Checkout/CheckoutPage.jsx
import { motion } from 'framer-motion';

export default function CheckoutComponent({ cartTotal, handleEsewaPayment, transactionUuid }) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
      <h2 className="text-xl font-semibold mb-6 text-textMain">Payment Details</h2>
      <div className="bg-cream p-4 rounded-lg mb-8 border border-yellow-100">
        <p className="text-lg text-textMain">
          Amount to Pay: <strong className="text-green-700 ml-2">Rs. {cartTotal}</strong>
        </p>
      </div>

      <div className="mb-6">
        <h3 className="font-medium text-textMain mb-2">Order Information</h3>
        <p className="text-sm text-gray-600">Order ID: <span className="font-mono">{transactionUuid}</span></p>
        <p className="text-sm text-gray-600">Payment Method: eSewa Mobile Wallet</p>
      </div>

      {/* Hidden Form for eSewa Test Environment */}
      <form id="esewa-form" action="https://rc-epay.esewa.com.np/api/epay/main/v2/form" method="POST">
          <input type="hidden" id="amount" name="amount" value={cartTotal} required />
          <input type="hidden" id="tax_amount" name="tax_amount" value="0" required />
          <input type="hidden" id="total_amount" name="total_amount" value={cartTotal} required />
          <input type="hidden" id="transaction_uuid" name="transaction_uuid" value={transactionUuid} required />
          <input type="hidden" id="product_code" name="product_code" value="EPAYTEST" required />
          <input type="hidden" id="product_delivery_charge" name="product_delivery_charge" value="0" required />
          <input type="hidden" id="success_url" name="success_url" value="http://localhost:5173/checkout/success" required />
          <input type="hidden" id="failure_url" name="failure_url" value="http://localhost:5173/checkout/failure" required />
          <input type="hidden" id="signed_field_names" name="signed_field_names" value="total_amount,transaction_uuid,product_code" required />
          {/* Note: In production, the signature MUST be generated via Backend API */}
          <input type="hidden" id="signature" name="signature" value="SIMULATED_HMAC_SHA256_STRING" required />
          
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleEsewaPayment}
            className="w-full bg-[#60bb46] text-white font-bold py-4 rounded-lg hover:bg-[#509f39] transition-colors shadow-md flex items-center justify-center gap-2"
          >
            Pay with eSewa
          </motion.button>
      </form>
    </div>
  );
}