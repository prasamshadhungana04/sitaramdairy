// frontend/src/admin/ProductManagement.jsx
import { useState } from 'react';
import { Edit, Trash2, Plus, Package, Search } from 'lucide-react';

export default function ProductManagement() {
  const [products] = useState([
    { id: 1, name: "Sita Ram Ghee", category: "Pure Ghee", price: 950, stock: 120, unit: "/ L", img: "/ghee.png" },
    { id: 2, name: "Sita Ram Butter", category: "Butter", price: 250, stock: 85, unit: "/ 200g", img: "/butter.png" },
    { id: 3, name: "Sita Ram Dahi", category: "Curd", price: 120, stock: 200, unit: "/ 500g", img: "/dahi.png" },
    { id: 4, name: "Sita Ram Paneer", category: "Cheese", price: 380, stock: 45, unit: "/ 500g", img: "/paneer.png" },
    { id: 5, name: "Strawberry Lassi", category: "Beverage", price: 60, stock: 150, unit: "/ 200ml", img: "/strawberrylassi.png" },
  ]);

  return (
    <div className="space-y-8">
      <div className="bg-[#1A1A1A] p-8 rounded-[3rem] flex flex-col md:flex-row justify-between items-center gap-6 shadow-xl">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-[#9e111a] rounded-2xl flex items-center justify-center text-white shadow-lg"><Package size={24}/></div>
          <div>
            <h2 className="text-xl font-serif font-black text-white">Inventory Catalog</h2>
            <p className="text-[10px] font-bold text-[#9e111a] uppercase tracking-widest">Managing 48 total variants</p>
          </div>
        </div>
        <button className="bg-[#9e111a] text-white px-8 py-3 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white hover:text-[#1A1A1A] transition-all flex items-center gap-2">
          <Plus size={18} /> Add New Product
        </button>
      </div>

      <div className="bg-white rounded-[3rem] shadow-sm border border-[#9e111a]/5 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-[#FDF8E7]/50 border-b border-[#9e111a]/5 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
            <tr>
              <th className="p-8">Product Details</th>
              <th className="p-8">Category</th>
              <th className="p-8">Price & Unit</th>
              <th className="p-8">Available Stock</th>
              <th className="p-8 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#9e111a]/5">
            {products.map(p => (
              <tr key={p.id} className="hover:bg-[#FDF8E7]/20 transition-colors group">
                <td className="p-6 flex items-center gap-6">
                  <div className="w-16 h-16 bg-[#FDF8E7] rounded-2xl p-2 flex items-center justify-center border border-[#9e111a]/5">
                    <img src={p.img} alt={p.name} className="w-full h-full object-contain mix-blend-multiply" />
                  </div>
                  <div>
                    <p className="font-serif font-black text-lg text-[#1A1A1A]">{p.name}</p>
                    <p className="text-[10px] text-gray-400 font-bold tracking-widest">SKU-SR-{1000 + p.id}</p>
                  </div>
                </td>
                <td className="p-6">
                  <span className="text-[10px] font-black uppercase bg-gray-50 text-gray-500 px-3 py-1 rounded-full border border-gray-100">{p.category}</span>
                </td>
                <td className="p-6">
                  <p className="font-black text-[#1A1A1A]">NPR {p.price} <span className="text-[10px] text-gray-400">{p.unit}</span></p>
                </td>
                <td className="p-6">
                  <p className={`font-black ${p.stock < 50 ? 'text-[#9e111a]' : 'text-green-600'}`}>{p.stock} Units</p>
                </td>
                <td className="p-6 text-right space-x-2">
                  <button className="p-3 text-gray-400 hover:text-[#9e111a] bg-gray-50 rounded-xl transition-all"><Edit size={18}/></button>
                  <button className="p-3 text-gray-400 hover:text-red-600 bg-gray-50 rounded-xl transition-all"><Trash2 size={18}/></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}