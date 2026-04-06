// frontend/src/admin/OrderManagement.jsx
import { useState, useEffect } from 'react';
import { Eye, Clock, CheckCircle, XCircle, Search, Filter } from 'lucide-react';

export default function OrderManagement() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulated fetch for eSewa Transaction History
    setTimeout(() => {
      setOrders([
        { id: 1045, user: { name: "Ram Bahadur", email: "ram@test.com" }, total_amount: 1450, payment_status: "completed", date: "2026-04-05", esewa_ref: "ESW-001X" },
        { id: 1046, user: { name: "Sita Sharma", email: "sita@test.com" }, total_amount: 350, payment_status: "pending", date: "2026-04-05", esewa_ref: null },
        { id: 1047, user: { name: "Gopal Verma", email: "gopal@test.com" }, total_amount: 2100, payment_status: "failed", date: "2026-04-04", esewa_ref: "ESW-ERR9" }
      ]);
      setLoading(false);
    }, 800);
  }, []);

  const StatusBadge = ({ status }) => {
    const styles = {
      completed: 'bg-green-50 text-green-700 border-green-200',
      pending: 'bg-dairyBlack/5 text-dairyBlack/70 border-dairyBlack/10', // Neutral/Professional for pending
      failed: 'bg-dairyRed/5 text-dairyRed border-dairyRed/20' // Red for failed
    };
    const Icons = { completed: CheckCircle, pending: Clock, failed: XCircle };
    const Icon = Icons[status];

    return (
      <span className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[10px] font-black border ${styles[status]} uppercase tracking-widest`}>
        <Icon size={12} /> {status}
      </span>
    );
  };

  return (
    <div className="space-y-6">
      {/* Search and Filter Bar */}
      <div className="flex flex-col md:flex-row gap-4 justify-between items-center bg-white p-6 rounded-[2rem] shadow-sm border border-gray-100">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input 
            type="text" 
            placeholder="Search by Order ID or Name..." 
            className="w-full pl-12 pr-4 py-3 bg-cheeseCream rounded-xl border-none focus:ring-2 focus:ring-dairyRed/20 font-medium text-sm"
          />
        </div>
        <button className="flex items-center gap-2 bg-dairyBlack text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-dairyRed transition-all">
          <Filter size={18} /> Filter Transactions
        </button>
      </div>

      {/* Transactions Table Container */}
      <div className="bg-white rounded-[2.5rem] shadow-premium border border-gray-100 overflow-hidden">
        <div className="p-8 border-b border-gray-100 bg-white flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-serif font-bold text-dairyRed red-text-shadow">Transaction History</h2>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">Monitor eSewa payments and fulfillment status</p>
          </div>
          <div className="flex items-center gap-2">
             <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
             <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Live Updates</span>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-cheeseCream text-dairyBlack/60 text-[10px] uppercase tracking-[0.2em] font-black">
                <th className="p-6">Order ID</th>
                <th className="p-6">Customer Details</th>
                <th className="p-6">Date</th>
                <th className="p-6">Amount</th>
                <th className="p-6">Payment Status</th>
                <th className="p-6 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {loading ? (
                <tr>
                  <td colSpan="6" className="p-20 text-center">
                    <div className="flex flex-col items-center gap-4">
                      <div className="w-12 h-12 border-4 border-dairyRed/20 border-t-dairyRed rounded-full animate-spin"></div>
                      <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Loading secure ledger...</p>
                    </div>
                  </td>
                </tr>
              ) : orders.map(order => (
                <tr key={order.id} className="group hover:bg-cheeseCream/30 transition-all duration-300">
                  <td className="p-6">
                    <span className="text-dairyRed font-black text-sm bg-dairyRed/5 px-3 py-1 rounded-lg">
                      #{order.id}
                    </span>
                  </td>
                  <td className="p-6">
                    <p className="font-serif font-bold text-dairyBlack text-lg">{order.user.name}</p>
                    <p className="text-xs font-medium text-gray-400">{order.user.email}</p>
                  </td>
                  <td className="p-6 text-sm font-bold text-gray-500">
                    {new Date(order.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </td>
                  <td className="p-6">
                    <p className="text-dairyBlack font-black text-lg">NPR {Number(order.total_amount).toLocaleString()}</p>
                    {order.esewa_ref && <p className="text-[9px] text-green-600 font-black uppercase tracking-tighter">REF: {order.esewa_ref}</p>}
                  </td>
                  <td className="p-6">
                    <StatusBadge status={order.payment_status} />
                  </td>
                  <td className="p-6 text-right">
                    <button className="text-dairyRed hover:text-white bg-transparent hover:bg-dairyRed border border-dairyRed/20 px-5 py-2 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all inline-flex items-center gap-2">
                      <Eye size={14} /> Full Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination Placeholder */}
        <div className="p-6 bg-cheeseCream/20 border-t border-gray-50 flex justify-center">
          <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Showing {orders.length} entries in the current billing cycle</p>
        </div>
      </div>
    </div>
  );
}