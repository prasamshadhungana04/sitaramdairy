// frontend/src/pages/LoginPage.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ email: '', password: '', name: '', confirmPassword: '' });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => { e.preventDefault(); console.log('Auth:', formData); };

  return (
    <main className="min-h-screen bg-[#F9F6F0] flex items-center justify-center py-20 px-4 relative overflow-hidden">
      {/* Liquid Blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#E2B254]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#002147]/5 rounded-full blur-[150px] pointer-events-none" />

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 relative z-10">
        <div className="bg-[#002147] p-8 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none" />
          <h1 className="text-3xl font-serif font-bold text-white relative z-10">{isLogin ? 'Welcome Back' : 'Join Sita Ram'}</h1>
          <p className="text-[#E2B254] text-sm mt-2 relative z-10">{isLogin ? 'Log in to your premium account' : 'Start your organic journey today'}</p>
        </div>

        <div className="p-8">
          <div className="flex p-1 bg-[#F9F6F0] rounded-xl mb-8">
            <button onClick={() => setIsLogin(true)} className={`flex-1 py-2.5 rounded-lg font-bold text-sm transition-all duration-300 ${isLogin ? 'bg-white text-[#002147] shadow-sm' : 'text-gray-500 hover:text-[#002147]'}`}>Login</button>
            <button onClick={() => setIsLogin(false)} className={`flex-1 py-2.5 rounded-lg font-bold text-sm transition-all duration-300 ${!isLogin ? 'bg-white text-[#002147] shadow-sm' : 'text-gray-500 hover:text-[#002147]'}`}>Sign Up</button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {!isLogin && (
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Full Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:border-[#E2B254] focus:ring-2 focus:ring-[#E2B254]/20 outline-none transition-all" required={!isLogin} />
              </div>
            )}
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Email Address</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:border-[#E2B254] focus:ring-2 focus:ring-[#E2B254]/20 outline-none transition-all" required />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Password</label>
              <input type="password" name="password" value={formData.password} onChange={handleChange} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:border-[#E2B254] focus:ring-2 focus:ring-[#E2B254]/20 outline-none transition-all" required />
            </div>
            {!isLogin && (
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Confirm Password</label>
                <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:border-[#E2B254] focus:ring-2 focus:ring-[#E2B254]/20 outline-none transition-all" required />
              </div>
            )}

            <button type="submit" className="w-full bg-[#002147] text-white py-4 rounded-xl font-bold text-lg hover:bg-[#E2B254] hover:text-[#002147] transition-all duration-300 shadow-[0_10px_20px_rgba(0,33,71,0.1)] mt-4">
              {isLogin ? 'Secure Login' : 'Create Account'}
            </button>
          </form>

          {isLogin && <div className="text-center mt-6"><a href="#" className="text-sm font-bold text-gray-400 hover:text-[#002147] transition-colors">Forgot Password?</a></div>}
        </div>
      </motion.div>
    </main>
  );
}