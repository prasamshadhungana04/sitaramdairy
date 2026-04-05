// src/admin/ProductManagement.jsx
import { useState, useEffect } from 'react';
import api from '../services/api';

export default function ProductManagement() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products
    api.get('/admin/products').then(res => setProducts(res.data)).catch(console.error);
  }, []);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-textMain">Inventory Management</h2>
        <button className="bg-green-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-700">
          + Add Product
        </button>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-gray-200 text-gray-500">
              <th className="p-4 font-medium">ID</th>
              <th className="p-4 font-medium">Name</th>
              <th className="p-4 font-medium">Category</th>
              <th className="p-4 font-medium">Price (NPR)</th>
              <th className="p-4 font-medium">Stock</th>
              <th className="p-4 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* Map through products, showing mock data if empty */}
            {(products.length ? products : [{id: 1, name: "Sample Paneer", category: "Cheese", price_npr: 350, stock_quantity: 50}]).map(p => (
              <tr key={p.id} className="border-b border-gray-50 hover:bg-milk transition-colors">
                <td className="p-4 text-gray-600">#{p.id}</td>
                <td className="p-4 font-semibold text-textMain">{p.name}</td>
                <td className="p-4 text-gray-600">{p.category}</td>
                <td className="p-4 text-green-700 font-medium">Rs. {p.price_npr}</td>
                <td className="p-4 text-gray-600">{p.stock_quantity} units</td>
                <td className="p-4 flex gap-2">
                  <button className="text-blue-600 hover:underline">Edit</button>
                  <button className="text-red-600 hover:underline">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}