// frontend/src/pages/NoticesPage.jsx
import { motion } from 'framer-motion';
import { Bell, Calendar, ChevronRight } from 'lucide-react';
import MilkDivider from '../components/Home/MilkDivider';

export default function NoticesPage() {
  const notices = [
    { 
      id: 1, 
      title: "New Tokha Delivery Routes", 
      date: "April 5, 2026", 
      type: "Logistics", 
      content: "We have expanded our daily morning delivery routes to cover more areas including Budhanilkantha and Bansbari. Enjoy fresh A2 milk before 7 AM." 
    },
    { 
      id: 2, 
      title: "Biska Jatra Special Offer", 
      date: "April 1, 2026", 
      type: "Offer", 
      content: "Celebrate the Nepali New Year with pure sweetness. Get 15% off on our famous Bhaktapur Juju Dhau. Use code: NEWYEAR83" 
    },
    { 
      id: 3, 
      title: "Organic Certification Renewed", 
      date: "March 15, 2026", 
      type: "Quality", 
      content: "Sita Ram Dairy has successfully renewed its Premium Organic Certification. Our commitment to chemical-free farming remains absolute." 
    }
  ];

  return (
    <main className="bg-cheeseCream min-h-screen">
      {/* === HERO SECTION === */}
      <div className="relative bg-dairyBlack text-white pt-40 pb-32 text-center overflow-hidden">
        {/* Subtle background texture */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <motion.div 
            initial={{ scale: 0, rotate: -10 }} 
            animate={{ scale: 1, rotate: 0 }} 
            className="w-20 h-20 bg-dairyRed rounded-3xl flex items-center justify-center mx-auto mb-8 text-white shadow-redGlow"
          >
            <Bell size={36} strokeWidth={2.5} />
          </motion.div>
          
          <h1 className="text-6xl font-serif font-bold mb-6 text-white red-text-shadow">
            Farm <span className="text-dairyRed">Updates</span>
          </h1>
          <p className="text-xl text-gray-400 font-medium tracking-wide max-w-2xl mx-auto uppercase text-[10px] tracking-[0.4em]">
            Official Announcements • Heritage News • Organic Ledger
          </p>
        </div>
        
        {/* Signature Milk Divider */}
        <div className="absolute bottom-0 w-full z-20">
          <MilkDivider />
        </div>
      </div>
      
      {/* === NOTICES LIST === */}
      <div className="max-w-5xl mx-auto px-6 py-32">
        <div className="space-y-10">
          {notices.map((notice, index) => (
            <motion.div 
              key={notice.id} 
              initial={{ opacity: 0, x: -30 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              transition={{ delay: index * 0.1 }} 
              viewport={{ once: true }} 
              className="bg-white p-10 rounded-[2.5rem] shadow-premium border-l-[12px] border-dairyRed hover:shadow-2xl transition-all duration-500 relative overflow-hidden group"
            >
              {/* Decorative Corner Element */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-cheeseCream rounded-bl-[5rem] -z-10 group-hover:bg-dairyRed/5 transition-colors duration-500" />
              
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <span className="bg-dairyBlack text-dairyRed text-[10px] font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-full border border-dairyRed/20">
                    {notice.type}
                  </span>
                  <h3 className="text-3xl font-serif font-bold text-dairyBlack group-hover:text-dairyRed transition-colors">
                    {notice.title}
                  </h3>
                </div>
                
                <div className="flex items-center gap-3 text-[10px] font-black text-gray-400 bg-cheeseCream px-5 py-2 rounded-2xl uppercase tracking-widest shadow-inner">
                  <Calendar size={14} className="text-dairyRed" /> 
                  {notice.date}
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-8 items-start">
                <p className="text-gray-500 leading-relaxed text-lg font-medium flex-grow">
                  {notice.content}
                </p>
                <button className="shrink-0 flex items-center gap-2 text-dairyRed font-black text-[10px] uppercase tracking-widest hover:translate-x-2 transition-transform">
                  Read Full Brief <ChevronRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Support Section Footer */}
        <div className="mt-24 text-center p-12 bg-dairyBlack rounded-[3rem] shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-dairyRed/5 pointer-events-none" />
          <h4 className="text-white font-serif font-bold text-2xl mb-4 relative z-10">Subscription Inquiry</h4>
          <p className="text-gray-400 text-sm mb-8 relative z-10 font-medium">Want these updates delivered straight to your WhatsApp or Email?</p>
          <button className="bg-dairyRed text-white px-10 py-4 rounded-full font-black text-xs uppercase tracking-widest hover:bg-white hover:text-dairyBlack transition-all shadow-redGlow relative z-10">
            Subscribe to Ledger
          </button>
        </div>
      </div>
    </main>
  );
}