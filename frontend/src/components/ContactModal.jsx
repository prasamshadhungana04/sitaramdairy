// frontend/src/components/ContactModal.jsx
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { X, CheckCircle2 } from 'lucide-react';

const ContactModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 2500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Blurred Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#002147]/60 backdrop-blur-sm z-50"
          />
          
          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg bg-white rounded-3xl shadow-2xl z-50 overflow-hidden border border-gray-100"
          >
            {/* Premium Header */}
            <div className="bg-[#002147] px-8 py-6 flex justify-between items-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
              <div className="relative z-10">
                <h2 className="text-2xl font-serif font-bold text-white">Contact Us</h2>
                <p className="text-[#E2B254] text-sm mt-1">We'd love to hear from you</p>
              </div>
              <button onClick={onClose} className="relative z-10 text-white/70 hover:text-[#E2B254] transition-colors p-2 hover:bg-white/10 rounded-full">
                <X size={24} />
              </button>
            </div>

            {isSubmitted ? (
              <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="p-12 text-center flex flex-col items-center">
                <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center text-green-500 mb-6">
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="text-2xl font-serif font-bold text-[#002147] mb-2">Message Received!</h3>
                <p className="text-gray-500">Our support team will contact you shortly.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="p-8 space-y-5 bg-[#F9F6F0]/50">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Full Name *</label>
                    <input type="text" name="name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:border-[#E2B254] focus:ring-2 focus:ring-[#E2B254]/20 outline-none transition-all" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Phone</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:border-[#E2B254] focus:ring-2 focus:ring-[#E2B254]/20 outline-none transition-all" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Email Address *</label>
                  <input type="email" name="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:border-[#E2B254] focus:ring-2 focus:ring-[#E2B254]/20 outline-none transition-all" />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Subject *</label>
                  <select name="subject" required value={formData.subject} onChange={handleChange} className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:border-[#E2B254] focus:ring-2 focus:ring-[#E2B254]/20 outline-none transition-all appearance-none">
                    <option value="">Select a subject</option>
                    <option value="general">General Tokha Farm Inquiry</option>
                    <option value="order">Order & Subscription</option>
                    <option value="delivery">Kathmandu Delivery Issue</option>
                    <option value="product">Product Information</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Message *</label>
                  <textarea name="message" required rows="4" value={formData.message} onChange={handleChange} className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:border-[#E2B254] focus:ring-2 focus:ring-[#E2B254]/20 outline-none transition-all resize-none" placeholder="How can we help you today?" />
                </div>

                <button type="submit" className="w-full bg-[#002147] text-white py-4 rounded-xl font-bold hover:bg-[#E2B254] hover:text-[#002147] transition-all duration-300 shadow-lg mt-2">
                  Send Secure Message
                </button>
              </form>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;