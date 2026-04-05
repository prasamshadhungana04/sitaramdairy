// frontend/src/pages/NoticesPage.jsx
import { motion } from 'framer-motion';
import { Bell, Calendar } from 'lucide-react';
import MilkDivider from '../components/Home/MilkDivider';

export default function NoticesPage() {
  const notices = [
    { id: 1, title: "New Tokha Delivery Routes", date: "April 5, 2026", type: "Logistics", content: "We have expanded our daily morning delivery routes to cover more areas including Budhanilkantha and Bansbari. Enjoy fresh A2 milk before 7 AM." },
    { id: 2, title: "Biska Jatra Special Offer", date: "April 1, 2026", type: "Offer", content: "Celebrate the Nepali New Year with pure sweetness. Get 15% off on our famous Bhaktapur Juju Dhau. Use code: NEWYEAR83" },
    { id: 3, title: "Organic Certification Renewed", date: "March 15, 2026", type: "Quality", content: "Sita Ram Dairy has successfully renewed its Premium Organic Certification. Our commitment to chemical-free farming remains absolute." }
  ];

  return (
    <main className="bg-[#F9F6F0] min-h-screen">
      <div className="relative bg-[#002147] text-white pt-32 pb-24 text-center overflow-hidden">
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="w-16 h-16 bg-[#E2B254] rounded-full flex items-center justify-center mx-auto mb-6 text-[#002147]"><Bell size={32} /></motion.div>
          <h1 className="text-5xl font-serif font-bold mb-4">Farm Updates</h1>
          <p className="text-xl text-gray-300 font-light">Stay informed about our latest announcements and offers.</p>
        </div>
        <div className="absolute bottom-0 w-full z-20"><MilkDivider /></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-6 py-24">
        <div className="space-y-8">
          {notices.map((notice, index) => (
            <motion.div key={notice.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} viewport={{ once: true }} className="bg-white p-8 rounded-3xl shadow-sm border-l-8 border-[#E2B254] hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gray-50 rounded-bl-full -z-10 group-hover:scale-150 transition-transform duration-500" />
              
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4">
                <div className="flex items-center gap-3">
                  <span className="bg-[#002147] text-[#E2B254] text-xs font-bold uppercase tracking-wider px-3 py-1 rounded">{notice.type}</span>
                  <h3 className="text-2xl font-serif font-bold text-[#002147]">{notice.title}</h3>
                </div>
                <span className="flex items-center gap-2 text-sm font-bold text-gray-400 bg-gray-50 px-3 py-1 rounded-full"><Calendar size={14} /> {notice.date}</span>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">{notice.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}