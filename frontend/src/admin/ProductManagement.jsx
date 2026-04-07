// frontend/src/admin/ProductManagement.jsx
import { useState, useEffect } from 'react';
import api from '../services/api';
import { Edit, Trash2, Plus, Package } from 'lucide-react';

export default function ProductManagement() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  
  const [formData, setFormData] = useState({ 
    name: '', category: 'Milk', price_npr: '', stock_quantity: '', description: '',
    subtitle: '', badge: '', unit: '', ingredients: '', nutrition: ''
  });
  const [imageFile, setImageFile] = useState(null);

  useEffect(() => { fetchProducts(); }, []);

  const fetchProducts = async () => {
    try {
      const res = await api.get('/products/index.php');
      setProducts(res.data || []);
    } catch (error) { console.error("Failed to fetch products"); } 
    finally { setLoading(false); }
  };

  const handleDelete = async (id) => {
    if(window.confirm("Delete this product?")) {
      try {
        await api.get(`/admin/products/delete.php?id=${id}`);
        setProducts(products.filter(p => p.id !== id));
      } catch (error) { alert("Deletion failed."); }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    Object.keys(formData).forEach(key => data.append(key, formData[key]));
    if (imageFile) data.append('image', imageFile);
    if (editingId) data.append('id', editingId);

    try {
      const endpoint = editingId ? '/admin/products/update.php' : '/admin/products/create.php';
      await api.post(endpoint, data);
      setIsModalOpen(false);
      fetchProducts(); 
    } catch (error) { console.error("Upload failed", error); }
  };

  const openEditModal = (product) => {
    setEditingId(product.id);
    setImageFile(null);
    setFormData({ 
      name: product.name || '', category: product.category || 'Milk', price_npr: product.price_npr || '', 
      stock_quantity: product.stock_quantity || '', description: product.description || '',
      subtitle: product.subtitle || '', badge: product.badge || '', unit: product.unit || '', 
      ingredients: product.ingredients || '', nutrition: product.nutrition || ''
    });
    setIsModalOpen(true);
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 flex justify-between items-center">
        <div>
          <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2"><Package size={22} /> Inventory</h2>
          <p className="text-sm text-slate-500 mt-1">Manage catalog and stock</p>
        </div>
        <button 
          onClick={() => { setEditingId(null); setImageFile(null); setFormData({ name: '', category: 'Milk', price_npr: '', stock_quantity: '', description: '', subtitle: '', badge: '', unit: '', ingredients: '', nutrition: '' }); setIsModalOpen(true); }}
          className="bg-indigo-600 text-white px-5 py-2.5 rounded-lg font-medium text-sm hover:bg-indigo-700 transition-colors flex items-center gap-2"
        >
          <Plus size={18} /> Add Product
        </button>
      </div>
      
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 text-slate-500 text-xs uppercase tracking-wider font-semibold border-b border-slate-200">
              <th className="p-5">Product</th>
              <th className="p-5">Category</th>
              <th className="p-5">Price</th>
              <th className="p-5">Stock</th>
              <th className="p-5 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {loading ? <tr><td colSpan="5" className="p-8 text-center text-slate-500">Loading...</td></tr> : products.map(p => (
              <tr key={p.id} className="hover:bg-slate-50 transition-colors">
                <td className="p-5 flex items-center gap-4">
                  <img src={p.image_url || 'https://via.placeholder.com/50'} alt={p.name} className="w-12 h-12 rounded-lg object-cover border border-slate-200" />
                  <div>
                    <p className="font-bold text-slate-800">{p.name}</p>
                    <p className="text-xs text-slate-500">SKU: #{p.id}</p>
                  </div>
                </td>
                <td className="p-5 text-sm text-slate-600">{p.category}</td>
                <td className="p-5 font-bold text-slate-800">NPR {p.price_npr}</td>
                <td className="p-5 text-sm text-slate-600">{p.stock_quantity} Units</td>
                <td className="p-5 text-right space-x-2">
                  <button onClick={() => openEditModal(p)} className="p-2 text-slate-400 hover:text-indigo-600 bg-slate-50 rounded-lg"><Edit size={18} /></button>
                  <button onClick={() => handleDelete(p.id)} className="p-2 text-slate-400 hover:text-rose-600 bg-slate-50 rounded-lg"><Trash2 size={18} /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 overflow-y-auto">
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl w-full max-w-2xl my-auto">
            <div className="p-6 border-b border-slate-100"><h3 className="text-lg font-bold text-slate-800">{editingId ? 'Edit Product' : 'New Product'}</h3></div>
            <div className="p-6 grid grid-cols-2 gap-4 max-h-[60vh] overflow-y-auto custom-scrollbar">
              <div className="col-span-2 sm:col-span-1">
                <label className="block text-xs font-semibold text-slate-500 mb-1">Name</label>
                <input type="text" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full px-3 py-2 rounded-lg border border-slate-200 outline-none" />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label className="block text-xs font-semibold text-slate-500 mb-1">Category</label>
                <input type="text" value={formData.category} onChange={e => setFormData({...formData, category: e.target.value})} className="w-full px-3 py-2 rounded-lg border border-slate-200 outline-none" />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label className="block text-xs font-semibold text-slate-500 mb-1">Price (NPR)</label>
                <input type="number" required value={formData.price_npr} onChange={e => setFormData({...formData, price_npr: e.target.value})} className="w-full px-3 py-2 rounded-lg border border-slate-200 outline-none" />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label className="block text-xs font-semibold text-slate-500 mb-1">Stock Quantity</label>
                <input type="number" required value={formData.stock_quantity} onChange={e => setFormData({...formData, stock_quantity: e.target.value})} className="w-full px-3 py-2 rounded-lg border border-slate-200 outline-none" />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label className="block text-xs font-semibold text-slate-500 mb-1">Unit (e.g., / L)</label>
                <input type="text" value={formData.unit} onChange={e => setFormData({...formData, unit: e.target.value})} className="w-full px-3 py-2 rounded-lg border border-slate-200 outline-none" />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label className="block text-xs font-semibold text-slate-500 mb-1">Badge (e.g., BESTSELLER)</label>
                <input type="text" value={formData.badge} onChange={e => setFormData({...formData, badge: e.target.value})} className="w-full px-3 py-2 rounded-lg border border-slate-200 outline-none" />
              </div>
              <div className="col-span-2">
                <label className="block text-xs font-semibold text-slate-500 mb-1">Subtitle</label>
                <input type="text" value={formData.subtitle} onChange={e => setFormData({...formData, subtitle: e.target.value})} className="w-full px-3 py-2 rounded-lg border border-slate-200 outline-none" />
              </div>
              <div className="col-span-2">
                <label className="block text-xs font-semibold text-slate-500 mb-1">Ingredients (comma separated)</label>
                <input type="text" value={formData.ingredients} onChange={e => setFormData({...formData, ingredients: e.target.value})} className="w-full px-3 py-2 rounded-lg border border-slate-200 outline-none" />
              </div>
              <div className="col-span-2">
                <label className="block text-xs font-semibold text-slate-500 mb-1">Nutrition Fact</label>
                <textarea rows="2" value={formData.nutrition} onChange={e => setFormData({...formData, nutrition: e.target.value})} className="w-full px-3 py-2 rounded-lg border border-slate-200 outline-none"></textarea>
              </div>
              <div className="col-span-2">
                <label className="block text-xs font-semibold text-slate-500 mb-1">Image {editingId && "(Leave empty to keep current image)"}</label>
                <input type="file" accept="image/*" onChange={e => setImageFile(e.target.files[0])} className="w-full text-sm" />
              </div>
            </div>
            <div className="p-6 border-t border-slate-100 bg-slate-50 flex justify-end gap-3">
              <button type="button" onClick={() => setIsModalOpen(false)} className="px-5 py-2.5 rounded-lg font-medium text-slate-600 hover:bg-slate-200 transition-colors">Cancel</button>
              <button type="submit" className="px-5 py-2.5 rounded-lg font-medium bg-indigo-600 text-white hover:bg-indigo-700 transition-colors">Save Product</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}