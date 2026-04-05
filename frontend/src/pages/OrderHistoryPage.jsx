// frontend/src/pages/OrderHistoryPage.jsx
import { Package, ChevronRight } from 'lucide-react';

export default function OrderHistoryPage() {
  const mockOrders = [
    { id: "ORD-1234", date: "April 5, 2026", total: 1450, status: "Delivered", items: 3 }
  ];

  return (
    <div className="bg-[#F9F6F0] min-h-screen py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-serif font-bold text-[#002147] mb-8">Order History</h1>
        <div className="space-y-6">
          {mockOrders.map(order => (
            <div key={order.id} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-6 w-full md:w-auto">
                <div className="w-16 h-16 bg-[#002147]/5 rounded-xl flex items-center justify-center text-[#002147]"><Package size={28} /></div>
                <div>
                  <p className="text-xl font-bold text-[#002147] mb-1">{order.id}</p>
                  <p className="text-sm font-medium text-gray-500">{order.date} • {order.items} Items</p>
                </div>
              </div>
              <div className="flex items-center justify-between w-full md:w-auto gap-8">
                <div className="text-right">
                  <p className="text-xl font-bold text-[#E2B254]">Rs. {order.total}</p>
                  <span className="inline-block mt-1 text-xs font-bold bg-green-100 text-green-700 px-3 py-1 rounded-full uppercase tracking-wider">{order.status}</span>
                </div>
                <button className="p-3 bg-gray-50 hover:bg-[#002147] hover:text-white rounded-xl transition-colors text-gray-400"><ChevronRight size={20} /></button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}