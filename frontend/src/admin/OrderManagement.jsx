// frontend/src/admin/OrderManagement.jsx
import { useState, useEffect } from 'react';
import api from '../services/api';

export default function OrderManagement() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // In production, this fetches from the Laravel Admin API
    // api.get('/admin/orders').then(res => setOrders(res.data));
    
    // Mock data for UI presentation
    setOrders([
      { id: 101, user: { name: "Ram Bahadur" }, total_amount: 1450, payment_status: "completed", date: "2023-10-25" },
      { id: 102, user: { name: "Sita Sharma" }, total_amount: 350, payment_status: "pending", date: "2023-10-26" }
    ]);
  }, []);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <h2 className="text-xl font-bold text-textMain mb-6">Recent Orders</h2>
      
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-gray-200 text-gray-500">
              <th className="p-4 font-medium">Order ID</th>
              <th className="p-4 font-medium">Customer</th>
              <th className="p-4 font-medium">Date</th>
              <th className="p-4 font-medium">Total (NPR)</th>
              <th className="p-4 font-medium">Status</th>
              <th className="p-4 font-medium">Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order.id} className="border-b border-gray-50 hover:bg-milk transition-colors">
                <td className="p-4 text-gray-600 font-mono">#{order.id}</td>
                <td className="p-4 font-semibold text-textMain">{order.user.name}</td>
                <td className="p-4 text-gray-600">{order.date}</td>
                <td className="p-4 text-green-700 font-medium">Rs. {order.total_amount}</td>
                <td className="p-4">
                  <span className={`px-2 py-1 rounded text-xs font-bold uppercase ${
                    order.payment_status === 'completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {order.payment_status}
                  </span>
                </td>
                <td className="p-4">
                  <button className="text-blue-600 hover:underline text-sm">Update Status</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}