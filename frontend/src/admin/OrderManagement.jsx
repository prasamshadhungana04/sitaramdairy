// frontend/src/admin/OrderManagement.jsx
import { useState, useEffect } from 'react';
import api from '../services/api';
import { Eye, Clock, CheckCircle, XCircle } from 'lucide-react';

export default function OrderManagement() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulated fetch for now until API is ready
    setTimeout(() => {
      setOrders([
        { id: 1045, user: { name: "Ram Bahadur", email: "ram@test.com" }, total_amount: 1450, payment_status: "completed", date: "2026-04-05", esewa_ref: "ESW-001X" },
        { id: 1046, user: { name: "Sita Sharma", email: "sita@test.com" }, total_amount: 350, payment_status: "pending", date: "2026-04-05", esewa_ref: null }
      ]);
      setLoading(false);
    }, 800);
  }, []);

  const StatusBadge = ({ status }) => {
    const styles = {
      completed: 'bg-green-100 text-green-700 border-green-200',
      pending: 'bg-yellow-100 text-yellow-700 border-yellow-200',
      failed: 'bg-red-100 text-red-700 border-red-200'
    };
    const Icons = { completed: CheckCircle, pending: Clock, failed: XCircle };
    const Icon = Icons[status];

    return (
      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${styles[status]} uppercase tracking-wider`}>
        <Icon size={12} /> {status}
      </span>
    );
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="p-6 border-b border-gray-100 bg-gray-50/50">
        <h2 className="text-xl font-bold text-[#002147]">Transaction History</h2>
        <p className="text-sm text-gray-500">Monitor eSewa payments and fulfillment status.</p>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 text-gray-500 text-sm uppercase tracking-wider">
              <th className="p-4 font-semibold">Order ID</th>
              <th className="p-4 font-semibold">Customer Details</th>
              <th className="p-4 font-semibold">Date</th>
              <th className="p-4 font-semibold">Total (NPR)</th>
              <th className="p-4 font-semibold">Payment Status</th>
              <th className="p-4 font-semibold text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {loading ? (
              <tr><td colSpan="6" className="p-8 text-center text-gray-400">Loading orders...</td></tr>
            ) : orders.map(order => (
              <tr key={order.id} className="hover:bg-gray-50/50 transition-colors">
                <td className="p-4 text-gray-600 font-mono font-medium">#{order.id}</td>
                <td className="p-4">
                  <p className="font-bold text-[#002147]">{order.user.name}</p>
                  <p className="text-xs text-gray-500">{order.user.email}</p>
                </td>
                <td className="p-4 text-gray-600">{new Date(order.date).toLocaleDateString()}</td>
                <td className="p-4 text-[#002147] font-bold">Rs. {Number(order.total_amount).toLocaleString('en-IN')}</td>
                <td className="p-4"><StatusBadge status={order.payment_status} /></td>
                <td className="p-4 text-right">
                  <button className="text-[#E2B254] hover:text-[#002147] bg-[#E2B254]/10 hover:bg-[#E2B254] px-3 py-1.5 rounded-lg font-bold text-sm transition-colors flex items-center gap-2 ml-auto">
                    <Eye size={16} /> View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}