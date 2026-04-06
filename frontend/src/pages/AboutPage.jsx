// frontend/src/pages/AboutPage.jsx
import React from 'react'; // Added this import to fix the cloneElement error
import { motion } from 'framer-motion';
import { ShieldCheck, Droplets, Heart, Award } from 'lucide-react';
import MilkDivider from '../components/Home/MilkDivider';

export default function AboutPage() {
  const features = [
    { icon: <Droplets />, title: "100% Pure A2 Milk", desc: "Sourced exclusively from indigenous cattle breeds for maximum health." },
    { icon: <ShieldCheck />, title: "Zero Preservatives", desc: "No chemicals, additives, or artificial thickeners. Just pure nature." },
    { icon: <Award />, title: "Traditional Bilona", desc: "Our ghee is slow-churned using ancient Ayurvedic earthen pot methods." },
    { icon: <Heart />, title: "Ethical Farming", desc: "Happy cows grazing freely in the lush, green pastures of Tokha." }
  ];

  return (
    <main className="bg-cheeseCream min-h-screen">
      {/* === HERO SECTION === */}
      <div className="relative bg-dairyBlack text-white pt-40 pb-32 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-t from-dairyBlack via-dairyBlack/60 to-transparent" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            className="text-6xl md:text-7xl font-serif font-bold mb-8 leading-tight"
          >
            The Heritage of <span className="text-dairyRed red-text-shadow">Sita Ram</span>
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ delay: 0.2 }} 
            className="text-xl md:text-2xl text-gray-300 font-medium tracking-wide max-w-3xl mx-auto leading-relaxed"
          >
            Generations of pure goodness since 1985, rooted in the heart of Nepal's traditional dairy culture.
          </motion.p>
        </div>
        
        <div className="absolute bottom-0 w-full z-20">
          <MilkDivider />
        </div>
      </div>
      
      {/* === LEGACY CONTENT SECTION === */}
      <div className="max-w-7xl mx-auto px-6 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div 
            initial={{ x: -50, opacity: 0 }} 
            whileInView={{ x: 0, opacity: 1 }} 
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-2">
              <h2 className="text-dairyRed text-sm font-black uppercase tracking-[0.4em]">Our Legacy</h2>
              <h3 className="text-5xl font-serif font-bold text-dairyBlack leading-tight">A Tradition of <br/> Uncompromising Purity</h3>
            </div>
            
            <p className="text-gray-600 leading-relaxed text-lg font-medium">
              Established in 1985, <span className="text-dairyRed font-bold">Sita Ram Dairy</span> has been a trusted cornerstone in providing premium, organic dairy products to families.
            </p>
            
            <p className="text-gray-600 leading-relaxed text-lg font-medium">
              Our cattle graze in the pristine environments of Tokha. We believe the finest dairy comes from happy animals and time-honored traditions.
            </p>

            <div className="pt-4">
               <button className="bg-dairyRed text-white px-10 py-4 rounded-full font-black text-xs uppercase tracking-widest hover:bg-dairyBlack transition-all shadow-redGlow">
                 Meet Our Farmers
               </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ x: 50, opacity: 0 }} 
            whileInView={{ x: 0, opacity: 1 }} 
            viewport={{ once: true }} 
            className="relative"
          >
            <div className="absolute inset-0 bg-dairyRed rounded-[3rem] transform rotate-3 scale-105 opacity-10" />
            <img 
              src="https://images.unsplash.com/photo-1528498033373-3c6c08e93d79?auto=format&fit=crop&w=800&q=80" 
              alt="Artisanal Production" 
              className="relative rounded-[3rem] shadow-2xl object-cover h-[600px] w-full border-8 border-white" 
            />
          </motion.div>
        </div>

        {/* === TRUST SECTION GRID === */}
        <div className="text-center mb-20 space-y-4">
          <h3 className="text-4xl font-serif font-bold text-dairyBlack">Why Families Trust Our Farm</h3>
          <div className="w-20 h-1.5 bg-dairyRed mx-auto rounded-full shadow-redGlow" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, idx) => (
            <motion.div 
              key={idx} 
              initial={{ y: 30, opacity: 0 }} 
              whileInView={{ y: 0, opacity: 1 }} 
              transition={{ delay: idx * 0.1 }} 
              viewport={{ once: true }} 
              className="bg-white p-10 rounded-[2.5rem] shadow-premium hover:shadow-2xl transition-all duration-500 border border-gray-50 group text-center"
            >
              <div className="w-20 h-20 bg-cheeseCream rounded-2xl flex items-center justify-center text-dairyRed mx-auto mb-8 group-hover:bg-dairyRed group-hover:text-white group-hover:rotate-6 transition-all duration-500 shadow-inner">
                {/* FIXED: Using React.cloneElement instead of window.cloneElement */}
                {React.cloneElement(feature.icon, { size: 32, strokeWidth: 2.5 })}
              </div>
              <h4 className="text-xl font-serif font-bold text-dairyBlack mb-4 group-hover:text-dairyRed transition-colors">
                {feature.title}
              </h4>
              <p className="text-gray-500 leading-relaxed text-sm font-medium">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}