// frontend/src/pages/OrderHistoryPage.jsx
export default function OrderHistoryPage() {
  const mockOrders = [
    { id: "ORD-1234", date: "2023-10-25", total: 1450, status: "completed" }
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-textMain mb-8 border-b pb-4">My Orders</h1>
      <div className="space-y-4">
        {mockOrders.map(order => (
          <div key={order.id} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex justify-between items-center">
            <div>
              <p className="font-semibold text-textMain">{order.id}</p>
              <p className="text-sm text-gray-500">{order.date}</p>
            </div>
            <div className="text-right">
              <p className="text-green-700 font-bold">Rs. {order.total}</p>
              <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded uppercase tracking-wider">{order.status}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}