// frontend/src/pages/LoginPage.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, EyeOff, Lock, Mail, User, ShieldCheck, ArrowRight } from 'lucide-react';

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const [formData, setFormData] = useState({ 
    email: '', 
    password: '', 
    name: ''
  });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  
  const handleSubmit = (e) => { 
    e.preventDefault(); 
    console.log('Authenticating...', formData); 
  };

  return (
    <main className="min-h-screen bg-cheeseCream flex items-center justify-center py-24 px-6 relative overflow-hidden">
      
      {/* === ARTISANAL AMBIENT BACKGROUND === */}
      <div className="absolute top-0 right-0 w-[45rem] h-[45rem] bg-[#7A0000]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[50rem] h-[50rem] bg-[#1A1A1A]/5 rounded-full blur-[160px] pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 30 }} 
        animate={{ opacity: 1, y: 0 }} 
        className="w-full max-w-lg bg-white rounded-[3.5rem] shadow-premium overflow-hidden border border-gray-100 relative z-10"
      >
        {/* === BRANDED HEADER === */}
        <div className="bg-[#1A1A1A] p-12 text-center relative overflow-hidden border-b-[6px] border-[#7A0000]">
          {/* Subtle Geometric Overlay */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none" />
          
          <motion.div 
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="absolute inset-0 flex items-center justify-center opacity-[0.04] pointer-events-none"
          >
            <span className="text-[12rem] font-serif font-black text-white">SR</span>
          </motion.div>

          <h1 className="text-4xl md:text-5xl font-serif font-black text-white relative z-10 red-text-shadow tracking-tight">
            {isLogin ? 'Member Login' : 'Create Account'}
          </h1>
          <p className="text-[#7A0000] font-black uppercase tracking-[0.4em] text-[10px] mt-4 relative z-10 opacity-90">
            {isLogin ? 'Secure Access to Sita Ram Ledger' : 'Join the Organic Dairy Heritage'}
          </p>
        </div>

        <div className="p-10 md:p-14">
          {/* === NAVIGATION TOGGLE === */}
          <div className="flex p-1.5 bg-cheeseCream rounded-[1.5rem] mb-12 border border-gray-100 shadow-inner">
            <button 
              onClick={() => setIsLogin(true)} 
              className={`flex-1 py-4 rounded-xl font-black text-[10px] uppercase tracking-[0.2em] transition-all duration-500 ${
                isLogin ? 'bg-white text-[#7A0000] shadow-md' : 'text-gray-400 hover:text-[#1A1A1A]'
              }`}
            >
              Sign In
            </button>
            <button 
              onClick={() => setIsLogin(false)} 
              className={`flex-1 py-4 rounded-xl font-black text-[10px] uppercase tracking-[0.2em] transition-all duration-500 ${
                !isLogin ? 'bg-white text-[#7A0000] shadow-md' : 'text-gray-400 hover:text-[#1A1A1A]'
              }`}
            >
              Register
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-7">
            <AnimatePresence mode="wait">
              {!isLogin && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-2"
                >
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest ml-2">Full Legal Name</label>
                  <div className="relative group">
                    <User className={`absolute left-5 top-1/2 -translate-y-1/2 transition-colors ${focusedField === 'name' ? 'text-[#7A0000]' : 'text-gray-300'}`} size={20} />
                    <input 
                      type="text" 
                      name="name" 
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      value={formData.name} 
                      onChange={handleChange} 
                      placeholder="e.g. Ram Bahadur"
                      className="w-full pl-14 pr-6 py-5 bg-cheeseCream/50 border-2 border-transparent focus:border-[#7A0000]/10 focus:bg-white rounded-[1.25rem] outline-none transition-all font-bold text-[#1A1A1A] placeholder:text-gray-300 shadow-sm" 
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Email Field */}
            <div className="space-y-2">
              <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest ml-2">Email Identifier</label>
              <div className="relative">
                <Mail className={`absolute left-5 top-1/2 -translate-y-1/2 transition-colors ${focusedField === 'email' ? 'text-[#7A0000]' : 'text-gray-300'}`} size={20} />
                <input 
                  type="email" 
                  name="email" 
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  value={formData.email} 
                  onChange={handleChange} 
                  placeholder="name@heritage.com"
                  className="w-full pl-14 pr-6 py-5 bg-cheeseCream/50 border-2 border-transparent focus:border-[#7A0000]/10 focus:bg-white rounded-[1.25rem] outline-none transition-all font-bold text-[#1A1A1A] placeholder:text-gray-300 shadow-sm" 
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <div className="flex justify-between items-center px-2">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Security Key</label>
                {isLogin && <button type="button" className="text-[9px] font-black text-[#7A0000] uppercase tracking-tighter hover:underline">Forgot Key?</button>}
              </div>
              <div className="relative">
                <Lock className={`absolute left-5 top-1/2 -translate-y-1/2 transition-colors ${focusedField === 'password' ? 'text-[#7A0000]' : 'text-gray-300'}`} size={20} />
                <input 
                  type={showPassword ? "text" : "password"} 
                  name="password" 
                  onFocus={() => setFocusedField('password')}
                  onBlur={() => setFocusedField(null)}
                  value={formData.password} 
                  onChange={handleChange} 
                  placeholder="••••••••••••"
                  className="w-full pl-14 pr-14 py-5 bg-cheeseCream/50 border-2 border-transparent focus:border-[#7A0000]/10 focus:bg-white rounded-[1.25rem] outline-none transition-all font-bold text-[#1A1A1A] placeholder:text-gray-300 shadow-sm" 
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-300 hover:text-[#7A0000] transition-colors"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <button 
              type="submit" 
              className="w-full bg-[#1A1A1A] text-white py-6 rounded-[1.5rem] font-black text-xs uppercase tracking-[0.3em] hover:bg-[#7A0000] transition-all duration-500 shadow-redGlow mt-6 flex items-center justify-center gap-4 group"
            >
              {isLogin ? 'Verify & Access' : 'Establish Account'}
              <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </form>

          {/* === SECURITY FOOTER === */}
          <div className="mt-12 pt-8 border-t border-gray-50 flex flex-col items-center gap-4">
             <div className="flex items-center gap-3 text-[10px] font-black text-gray-400 uppercase tracking-widest">
                <ShieldCheck size={16} className="text-green-600" />
                <span>AES-256 Encrypted Connection</span>
             </div>
             <p className="text-[9px] text-gray-300 font-bold max-w-[200px] text-center leading-relaxed">
               By accessing the Sita Ram Portal, you agree to our Heritage Data Terms.
             </p>
          </div>
        </div>
      </motion.div>
    </main>
  );
}