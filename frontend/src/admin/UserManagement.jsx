// frontend/src/admin/UserManagement.jsx
import { useState, useEffect } from 'react';
import api from '../services/api';
import { Shield, Plus, Mail, Lock, User as UserIcon } from 'lucide-react';

export default function UserManagement() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', password: '', role: 'admin' });

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await api.get('/admin/users/index.php');
      setUsers(res.data || []);
    } catch (error) {
      console.error("Failed to fetch users");
    } finally {
      setLoading(false);
    }
  };

  const handleAddAdmin = async (e) => {
    e.preventDefault();
    try {
      await api.post('/admin/users/create.php', formData);
      setIsModalOpen(false);
      setFormData({ name: '', email: '', password: '', role: 'admin' });
      fetchUsers();
    } catch (error) {
      alert("Failed to create admin.");
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
        <div>
          <h2 className="text-xl font-bold text-slate-800">User Management</h2>
          <p className="text-sm text-slate-500">Manage customers and system administrators</p>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-indigo-600 text-white px-5 py-2.5 rounded-lg font-medium text-sm hover:bg-indigo-700 transition-colors flex items-center gap-2"
        >
          <Plus size={18} /> Add New Admin
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 text-slate-500 text-xs uppercase tracking-wider font-semibold border-b border-slate-200">
              <th className="p-4">Name</th>
              <th className="p-4">Email</th>
              <th className="p-4">Role</th>
              <th className="p-4">Joined Date</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {loading ? (
              <tr><td colSpan="4" className="p-8 text-center text-slate-500">Loading users...</td></tr>
            ) : users.map(u => (
              <tr key={u.id} className="hover:bg-slate-50 transition-colors">
                <td className="p-4 font-medium text-slate-800">{u.name}</td>
                <td className="p-4 text-slate-600 text-sm">{u.email}</td>
                <td className="p-4">
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${
                    u.role === 'admin' ? 'bg-indigo-50 text-indigo-700 border border-indigo-200' : 'bg-slate-100 text-slate-600 border border-slate-200'
                  }`}>
                    {u.role === 'admin' && <Shield size={12} />} {u.role}
                  </span>
                </td>
                <td className="p-4 text-slate-500 text-sm">{new Date(u.created_at).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center z-50 p-6">
          <form onSubmit={handleAddAdmin} className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden">
            <div className="p-6 border-b border-slate-100">
              <h3 className="text-lg font-bold text-slate-800">Create Admin Account</h3>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Name</label>
                <input type="text" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-indigo-600 outline-none" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Email</label>
                <input type="email" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-indigo-600 outline-none" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Password</label>
                <input type="password" required value={formData.password} onChange={e => setFormData({...formData, password: e.target.value})} className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-indigo-600 outline-none" />
              </div>
            </div>
            <div className="p-6 border-t border-slate-100 bg-slate-50 flex justify-end gap-3">
              <button type="button" onClick={() => setIsModalOpen(false)} className="px-5 py-2.5 rounded-lg font-medium text-slate-600 hover:bg-slate-200 transition-colors">Cancel</button>
              <button type="submit" className="px-5 py-2.5 rounded-lg font-medium bg-indigo-600 text-white hover:bg-indigo-700 transition-colors">Create Admin</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}