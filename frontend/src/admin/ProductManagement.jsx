// frontend/src/admin/ProductManagement.jsx
import { useState, useEffect } from 'react';
import api from '../services/api';
import { Edit, Trash2, Plus, AlertCircle, CheckCircle2 } from 'lucide-react';

export default function ProductManagement() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  
  // Form State
  const [formData, setFormData] = useState({ name: '', category: 'Milk', price_npr: '', stock_quantity: '', description: '' });
  const [imageFile, setImageFile] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await api.get('/products/index.php');
      setProducts(res.data);
    } catch (error) {
      console.error("Failed to fetch products", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if(window.confirm("Are you sure you want to delete this premium product?")) {
      try {
        await api.get(`/admin/products/delete.php?id=${id}`);
        setProducts(products.filter(p => p.id !== id));
      } catch (error) {
        alert("Deletion failed.");
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    Object.keys(formData).forEach(key => data.append(key, formData[key]));
    if (imageFile) data.append('image', imageFile);
    if (editingId) data.append('id', editingId);

    try {
      const endpoint = editingId ? '/admin/products/update.php' : '/products/upload.php';
      await api.post(endpoint, data);
      setIsModalOpen(false);
      setEditingId(null);
      fetchProducts(); // Refresh list
    } catch (error) {
      console.error("Upload failed", error);
    }
  };

  const openEditModal = (product) => {
    setEditingId(product.id);
    setFormData({ name: product.name, category: product.category, price_npr: product.price_npr, stock_quantity: product.stock_quantity, description: product.description });
    setIsModalOpen(true);
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
        <div>
          <h2 className="text-xl font-bold text-[#a80000]">Inventory Catalog</h2>
          <p className="text-sm text-gray-500">Manage your 13 premium dairy products here.</p>
        </div>
        <button 
          onClick={() => { setEditingId(null); setFormData({ name: '', category: 'Milk', price_npr: '', stock_quantity: '', description: '' }); setIsModalOpen(true); }}
          className="bg-[#a80000] text-white px-5 py-2.5 rounded-xl font-medium hover:bg-[#E2B254] hover:text-[#a80000] transition-all duration-300 flex items-center gap-2 shadow-lg"
        >
          <Plus size={18} /> Add Product
        </button>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 text-gray-500 text-sm uppercase tracking-wider">
              <th className="p-4 font-semibold">Product</th>
              <th className="p-4 font-semibold">Category</th>
              <th className="p-4 font-semibold">Price (NPR)</th>
              <th className="p-4 font-semibold">Stock Status</th>
              <th className="p-4 font-semibold text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {loading ? (
              <tr><td colSpan="5" className="p-8 text-center text-gray-400">Loading premium inventory...</td></tr>
            ) : products.map(p => (
              <tr key={p.id} className="hover:bg-gray-50/50 transition-colors group">
                <td className="p-4 flex items-center gap-4">
                  <img src={p.image_url || 'https://via.placeholder.com/50'} alt={p.name} className="w-12 h-12 rounded-lg object-cover border border-gray-100 shadow-sm" />
                  <div>
                    <p className="font-bold text-[#a80000]">{p.name}</p>
                    <p className="text-xs text-gray-400">ID: #{p.id}</p>
                  </div>
                </td>
                <td className="p-4 text-gray-600 font-medium">{p.category}</td>
                <td className="p-4 text-[#a80000] font-bold">Rs. {Number(p.price_npr).toLocaleString('en-IN')}</td>
                <td className="p-4">
                  {p.stock_quantity > 10 ? (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-green-100 text-green-700"><CheckCircle2 size={12}/> In Stock ({p.stock_quantity})</span>
                  ) : (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-red-100 text-red-700"><AlertCircle size={12}/> Low Stock ({p.stock_quantity})</span>
                  )}
                </td>
                <td className="p-4 text-right space-x-2">
                  <button onClick={() => openEditModal(p)} className="p-2 text-gray-400 hover:text-[#a80000] hover:bg-gray-100 rounded-lg transition-colors"><Edit size={18} /></button>
                  <button onClick={() => handleDelete(p.id)} className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"><Trash2 size={18} /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modern Add/Edit Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-[#a80000]/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden">
            <div className="p-6 border-b border-gray-100 bg-gray-50 flex justify-between items-center">
              <h3 className="text-xl font-bold text-[#a80000]">{editingId ? 'Edit Product' : 'New Premium Product'}</h3>
              <button type="button" onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-gray-700">✕</button>
            </div>
            <div className="p-6 space-y-4">
              <input type="text" placeholder="Product Name" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#E2B254] outline-none" />
              <div className="flex gap-4">
                <input type="number" placeholder="Price (NPR)" required value={formData.price_npr} onChange={e => setFormData({...formData, price_npr: e.target.value})} className="w-1/2 px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#E2B254] outline-none" />
                <input type="number" placeholder="Stock Qty" required value={formData.stock_quantity} onChange={e => setFormData({...formData, stock_quantity: e.target.value})} className="w-1/2 px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#E2B254] outline-none" />
              </div>
              <select value={formData.category} onChange={e => setFormData({...formData, category: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#E2B254] outline-none">
                <option>Milk</option><option>Cheese</option><option>Ghee</option><option>Yogurt</option>
              </select>
              <textarea placeholder="Description" rows="3" value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#E2B254] outline-none"></textarea>
              {!editingId && (
                <input type="file" accept="image/*" onChange={e => setImageFile(e.target.files[0])} className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#E2B254]/20 file:text-[#002147] hover:file:bg-[#E2B254]/30" />
              )}
            </div>
            <div className="p-6 border-t border-gray-100 bg-gray-50 flex justify-end gap-3">
              <button type="button" onClick={() => setIsModalOpen(false)} className="px-5 py-2.5 rounded-xl font-medium text-gray-600 hover:bg-gray-200 transition-colors">Cancel</button>
              <button type="submit" className="px-5 py-2.5 rounded-xl font-bold bg-[#a80000] text-white hover:bg-[#E2B254] hover:text-[#a80000] transition-colors shadow-lg">Save Product</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}