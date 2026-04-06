// frontend/src/components/Modals/ContactModal.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle2, User, Phone, Mail, MessageSquare } from 'lucide-react';

export default function ContactModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [activeField, setActiveField] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* === BACKDROP (Dimmer) === */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#1A1A1A]/80 backdrop-blur-md"
          />

          {/* === MODAL CARD === 
              Background: Removed Cream, now Pure White 
          */}
          <motion.div 
            initial={{ scale: 0.9, opacity: 0, y: 40 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 40 }}
            className="relative w-full max-w-2xl bg-white rounded-[3.5rem] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] overflow-hidden border-2 border-gray-50"
          >
            {/* CLOSE BUTTON */}
            <button 
              onClick={onClose}
              className="absolute top-8 right-8 z-20 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white hover:text-[#7A0000] text-white rounded-full transition-all duration-300 group border border-white/30"
            >
              <X size={28} className="group-hover:rotate-90 transition-transform" />
            </button>

            {/* === HEADER: HERITAGE RED === */}
            <div className="bg-[#7A0000] p-12 md:p-16 text-center relative border-b-8 border-[#7A0000]/5">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
              
              {/* Branded Watermark (SR) */}
              <div className="absolute inset-0 flex items-center justify-center opacity-[0.07] pointer-events-none">
                <span className="text-[14rem] font-serif font-black text-white">SR</span>
              </div>

              <h2 className="text-6xl md:text-7xl font-serif font-black text-white relative z-10 tracking-tight drop-shadow-xl">
                Contact <span className="text-white opacity-70">Us</span>
              </h2>
              <p className="text-white font-black uppercase tracking-[0.6em] text-sm mt-4 relative z-10 opacity-90">
                Direct Heritage Support
              </p>
            </div>

            {/* === FORM BODY: HIGH CONTRAST WHITE === */}
            <div className="p-10 md:p-20 bg-white">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-10">
                  
                  {/* Row 1: Name & Phone */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-4">
                      <label className="text-sm font-black text-[#7A0000] uppercase tracking-widest ml-2">Full Name *</label>
                      <div className="relative">
                        <User className={`absolute left-6 top-1/2 -translate-y-1/2 transition-colors ${activeField === 'name' ? 'text-[#7A0000]' : 'text-gray-300'}`} size={24} />
                        <input 
                          type="text" required onFocus={() => setActiveField('name')} onBlur={() => setActiveField(null)}
                          className="w-full pl-16 pr-6 py-6 bg-gray-50 border-2 border-transparent focus:border-[#7A0000] focus:bg-white rounded-[2rem] outline-none font-bold text-xl text-[#1A1A1A] transition-all shadow-sm"
                          placeholder="Ram Bahadur"
                        />
                      </div>
                    </div>
                    <div className="space-y-4">
                      <label className="text-sm font-black text-[#7A0000] uppercase tracking-widest ml-2">Phone Number</label>
                      <div className="relative">
                        <Phone className={`absolute left-6 top-1/2 -translate-y-1/2 transition-colors ${activeField === 'phone' ? 'text-[#7A0000]' : 'text-gray-300'}`} size={24} />
                        <input 
                          type="tel" onFocus={() => setActiveField('phone')} onBlur={() => setActiveField(null)}
                          className="w-full pl-16 pr-6 py-6 bg-gray-50 border-2 border-transparent focus:border-[#7A0000] focus:bg-white rounded-[2rem] outline-none font-bold text-xl text-[#1A1A1A] transition-all shadow-sm"
                          placeholder="+977..."
                        />
                      </div>
                    </div>
                  </div>

                  {/* Row 2: Email */}
                  <div className="space-y-4">
                    <label className="text-sm font-black text-[#7A0000] uppercase tracking-widest ml-2">Email Identifier *</label>
                    <div className="relative">
                      <Mail className={`absolute left-6 top-1/2 -translate-y-1/2 transition-colors ${activeField === 'email' ? 'text-[#7A0000]' : 'text-gray-300'}`} size={24} />
                      <input 
                        type="email" required onFocus={() => setActiveField('email')} onBlur={() => setActiveField(null)}
                        className="w-full pl-16 pr-6 py-6 bg-gray-50 border-2 border-transparent focus:border-[#7A0000] focus:bg-white rounded-[2rem] outline-none font-bold text-xl text-[#1A1A1A] transition-all shadow-sm"
                        placeholder="email@heritage.com"
                      />
                    </div>
                  </div>

                  {/* Row 3: Message */}
                  <div className="space-y-4">
                    <label className="text-sm font-black text-[#7A0000] uppercase tracking-widest ml-2">Detailed Message *</label>
                    <div className="relative">
                      <MessageSquare className={`absolute left-6 top-7 transition-colors ${activeField === 'msg' ? 'text-[#7A0000]' : 'text-gray-300'}`} size={24} />
                      <textarea 
                        required rows="4" onFocus={() => setActiveField('msg')} onBlur={() => setActiveField(null)}
                        className="w-full pl-16 pr-6 py-6 bg-gray-50 border-2 border-transparent focus:border-[#7A0000] focus:bg-white rounded-[2rem] outline-none font-bold text-xl text-[#1A1A1A] transition-all resize-none shadow-sm"
                        placeholder="How can we assist you today?"
                      ></textarea>
                    </div>
                  </div>

                  {/* SUBMIT BUTTON */}
                  <button 
                    type="submit"
                    className="w-full bg-[#7A0000] text-white py-7 rounded-[2rem] font-black text-base uppercase tracking-[0.5em] hover:bg-[#1A1A1A] transition-all duration-500 shadow-2xl flex items-center justify-center gap-6 group mt-10"
                  >
                    Dispatch Message
                    <Send size={24} className="group-hover:translate-x-3 group-hover:-translate-y-3 transition-transform" />
                  </button>
                </form>
              ) : (
                /* SUCCESS STATE */
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-20"
                >
                  <div className="w-32 h-32 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-10 shadow-inner">
                    <CheckCircle2 size={64} />
                  </div>
                  <h3 className="text-5xl font-serif font-black text-[#1A1A1A] mb-6 tracking-tight">Transmission Successful</h3>
                  <p className="text-gray-500 font-bold text-xl max-w-md mx-auto leading-relaxed">Our farm management team will contact you within 4 hours.</p>
                  <button 
                    onClick={onClose}
                    className="mt-16 bg-[#7A0000] text-white px-16 py-5 rounded-full font-black text-sm uppercase tracking-widest hover:bg-[#1A1A1A] transition-all shadow-xl hover:scale-105 active:scale-95"
                  >
                    Return to Portal
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}