// frontend/src/admin/ProductManagement.jsx
import { useState, useEffect } from 'react';
import api from '../services/api';
import { Edit, Trash2, Plus, AlertCircle, CheckCircle2, Package, Search } from 'lucide-react';

export default function ProductManagement() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  
  // Form State
  const [formData, setFormData] = useState({ 
    name: '', 
    category: 'Milk', 
    price_npr: '', 
    stock_quantity: '', 
    description: '' 
  });
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
      fetchProducts(); 
    } catch (error) {
      console.error("Upload failed", error);
    }
  };

  const openEditModal = (product) => {
    setEditingId(product.id);
    setFormData({ 
      name: product.name, 
      category: product.category, 
      price_npr: product.price_npr, 
      stock_quantity: product.stock_quantity, 
      description: product.description 
    });
    setIsModalOpen(true);
  };

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="bg-white rounded-[2rem] shadow-premium border border-gray-100 p-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <h2 className="text-3xl font-serif font-bold text-dairyRed red-text-shadow flex items-center gap-3">
            <Package size={28} /> Inventory Catalog
          </h2>
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">
            Manage your premium organic dairy stock
          </p>
        </div>
        <button 
          onClick={() => { 
            setEditingId(null); 
            setFormData({ name: '', category: 'Milk', price_npr: '', stock_quantity: '', description: '' }); 
            setIsModalOpen(true); 
          }}
          className="bg-dairyRed text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-dairyBlack transition-all duration-300 flex items-center gap-2 shadow-redGlow"
        >
          <Plus size={18} strokeWidth={3} /> Add New Product
        </button>
      </div>
      
      {/* Table Container */}
      <div className="bg-white rounded-[2.5rem] shadow-premium border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-cheeseCream text-dairyBlack/60 text-[10px] uppercase tracking-[0.2em] font-black">
                <th className="p-6">Product Image & Name</th>
                <th className="p-6">Category</th>
                <th className="p-6">Price</th>
                <th className="p-6">Stock Status</th>
                <th className="p-6 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {loading ? (
                <tr>
                  <td colSpan="5" className="p-20 text-center">
                    <div className="flex flex-col items-center gap-4">
                      <div className="w-12 h-12 border-4 border-dairyRed/20 border-t-dairyRed rounded-full animate-spin"></div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Accessing Ledger...</p>
                    </div>
                  </td>
                </tr>
              ) : products.map(p => (
                <tr key={p.id} className="hover:bg-cheeseCream/30 transition-all duration-300 group">
                  <td className="p-6 flex items-center gap-5">
                    <div className="relative">
                      <img 
                        src={p.image_url || 'https://via.placeholder.com/150'} 
                        alt={p.name} 
                        className="w-16 h-16 rounded-2xl object-cover border-2 border-cheeseCream shadow-sm group-hover:scale-105 transition-transform" 
                      />
                    </div>
                    <div>
                      <p className="font-serif font-bold text-dairyBlack text-lg">{p.name}</p>
                      <p className="text-[10px] font-black text-dairyRed uppercase tracking-tighter">SKU: #{p.id}</p>
                    </div>
                  </td>
                  <td className="p-6 font-bold text-gray-500 text-sm">{p.category}</td>
                  <td className="p-6 text-dairyBlack font-black text-lg">NPR {Number(p.price_npr).toLocaleString()}</td>
                  <td className="p-6">
                    {p.stock_quantity > 10 ? (
                      <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[10px] font-black bg-green-50 text-green-700 border border-green-100 uppercase tracking-widest">
                        <CheckCircle2 size={12}/> Healthy ({p.stock_quantity})
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[10px] font-black bg-dairyRed/5 text-dairyRed border border-dairyRed/10 uppercase tracking-widest">
                        <AlertCircle size={12}/> Low Stock ({p.stock_quantity})
                      </span>
                    )}
                  </td>
                  <td className="p-6 text-right space-x-3">
                    <button 
                      onClick={() => openEditModal(p)} 
                      className="p-3 text-gray-400 hover:text-dairyRed hover:bg-dairyRed/5 rounded-xl transition-all"
                    >
                      <Edit size={20} />
                    </button>
                    <button 
                      onClick={() => handleDelete(p.id)} 
                      className="p-3 text-gray-400 hover:text-white hover:bg-dairyRed rounded-xl transition-all"
                    >
                      <Trash2 size={20} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* === MODERN PREMIUM MODAL === */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-dairyBlack/60 backdrop-blur-md flex items-center justify-center z-50 p-6">
          <form 
            onSubmit={handleSubmit} 
            className="bg-white rounded-[2.5rem] shadow-2xl w-full max-w-xl overflow-hidden border border-white/20"
          >
            <div className="p-8 border-b border-gray-100 bg-cheeseCream flex justify-between items-center">
              <div>
                <h3 className="text-2xl font-serif font-bold text-dairyRed red-text-shadow">
                  {editingId ? 'Refine Product' : 'Register New Batch'}
                </h3>
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mt-1">Enterprise Inventory Management</p>
              </div>
              <button 
                type="button" 
                onClick={() => setIsModalOpen(false)} 
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-gray-400 hover:text-dairyRed shadow-sm transition-colors"
              >
                ✕
              </button>
            </div>

            <div className="p-8 space-y-5 bg-white">
              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest ml-1">Product Title</label>
                <input 
                  type="text" 
                  placeholder="e.g., Pure Artisanal Ghee" 
                  required 
                  value={formData.name} 
                  onChange={e => setFormData({...formData, name: e.target.value})} 
                  className="w-full px-5 py-4 rounded-2xl bg-cheeseCream border-none focus:ring-2 focus:ring-dairyRed/20 outline-none font-bold text-dairyBlack" 
                />
              </div>

              <div className="flex gap-5">
                <div className="w-1/2 space-y-1">
                  <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest ml-1">Price (NPR)</label>
                  <input 
                    type="number" 
                    placeholder="0.00" 
                    required 
                    value={formData.price_npr} 
                    onChange={e => setFormData({...formData, price_npr: e.target.value})} 
                    className="w-full px-5 py-4 rounded-2xl bg-cheeseCream border-none focus:ring-2 focus:ring-dairyRed/20 outline-none font-bold text-dairyBlack" 
                  />
                </div>
                <div className="w-1/2 space-y-1">
                  <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest ml-1">Current Stock</label>
                  <input 
                    type="number" 
                    placeholder="Qty" 
                    required 
                    value={formData.stock_quantity} 
                    onChange={e => setFormData({...formData, stock_quantity: e.target.value})} 
                    className="w-full px-5 py-4 rounded-2xl bg-cheeseCream border-none focus:ring-2 focus:ring-dairyRed/20 outline-none font-bold text-dairyBlack" 
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest ml-1">Category Selection</label>
                <select 
                  value={formData.category} 
                  onChange={e => setFormData({...formData, category: e.target.value})} 
                  className="w-full px-5 py-4 rounded-2xl bg-cheeseCream border-none focus:ring-2 focus:ring-dairyRed/20 outline-none font-bold text-dairyBlack appearance-none"
                >
                  <option>Milk</option>
                  <option>Cheese</option>
                  <option>Ghee</option>
                  <option>Yogurt</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest ml-1">Brief Description</label>
                <textarea 
                  placeholder="Tell the story of this product..." 
                  rows="3" 
                  value={formData.description} 
                  onChange={e => setFormData({...formData, description: e.target.value})} 
                  className="w-full px-5 py-4 rounded-2xl bg-cheeseCream border-none focus:ring-2 focus:ring-dairyRed/20 outline-none font-bold text-dairyBlack resize-none"
                ></textarea>
              </div>

              {!editingId && (
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest ml-1">Product Visual</label>
                  <input 
                    type="file" 
                    accept="image/*" 
                    onChange={e => setImageFile(e.target.files[0])} 
                    className="w-full text-xs text-gray-400 file:mr-4 file:py-3 file:px-6 file:rounded-full file:border-0 file:text-[10px] file:font-black file:uppercase file:tracking-widest file:bg-dairyRed file:text-white hover:file:bg-dairyBlack transition-all" 
                  />
                </div>
              )}
            </div>

            <div className="p-8 border-t border-gray-50 bg-cheeseCream/30 flex justify-end gap-4">
              <button 
                type="button" 
                onClick={() => setIsModalOpen(false)} 
                className="px-8 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest text-gray-400 hover:bg-gray-100 transition-all"
              >
                Discard
              </button>
              <button 
                type="submit" 
                className="px-10 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest bg-dairyRed text-white hover:bg-dairyBlack transition-all shadow-redGlow"
              >
                {editingId ? 'Finalize Changes' : 'Publish Product'}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}