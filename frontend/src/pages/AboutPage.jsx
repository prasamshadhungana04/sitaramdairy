import { motion } from 'framer-motion';
import { ShieldCheck, Droplets, Heart, Award } from 'lucide-react';
import MilkDivider from '../components/Home/MilkDivider';

export default function AboutPage() {
  const features = [
    { icon: <Droplets />, title: "100% Pure A2 Milk", desc: "Sourced exclusively from indigenous cattle breeds." },
    { icon: <ShieldCheck />, title: "Zero Preservatives", desc: "No chemicals, additives, or artificial thickeners ever." },
    { icon: <Award />, title: "Traditional Bilona", desc: "Our ghee is slow-churned using ancient Ayurvedic methods." },
    { icon: <Heart />, title: "Ethical Farming", desc: "Happy cows grazing freely in the lush pastures of Tokha." }
  ];

  return (
    <main className="bg-[#F9F6F0] min-h-screen">
      {/* HERO SECTION - Styled like the uploaded reference */}
      <div className="relative h-[80vh] flex items-center overflow-hidden bg-dairyBlack">
        {/* The Background Image - Clear and Visible */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-80" 
          style={{ backgroundImage: "url('/hero_3.png')" }} 
        />
        
        {/* Subtle dark-to-transparent gradient to make white text pop */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-2xl text-left">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 mb-4"
            >
              <span className="w-8 h-[1px] bg-[#E2B254]"></span>
              <h2 className="text-[#E2B254] text-xs uppercase tracking-[0.3em] font-bold">
                Fresh From Our Happy Cows
              </h2>
            </motion.div>

            <motion.h1 
              initial={{ y: 20, opacity: 0 }} 
              animate={{ y: 0, opacity: 1 }} 
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-serif font-bold mb-6 text-white leading-tight"
            >
              The Heritage of <br /> Sita Ram
            </motion.h1>

            <motion.p 
              initial={{ y: 20, opacity: 0 }} 
              animate={{ y: 0, opacity: 1 }} 
              transition={{ delay: 0.2 }} 
              className="text-lg text-gray-200 font-light tracking-wide mb-10 max-w-lg"
            >
              Generations of pure goodness since 1985, rooted in the heart of Nepal. 
              Farm-fresh organic dairy delivered to your door.
            </motion.p>
      
          </div>
        </div>
        
        <div className="absolute bottom-0 w-full z-20">
          <MilkDivider />
        </div>
      </div>
      
      {/* REST OF CONTENT - UNCHANGED */}
      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div initial={{ x: -50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }}>
            <h2 className="text-dairyRed text-sm font-bold uppercase tracking-[0.2em] mb-4">Our Legacy</h2>
            <h3 className="text-4xl font-serif font-bold text-dairyBlack mb-6">A Tradition of Purity</h3>
            <p className="text-gray-600 leading-relaxed mb-6 text-lg font-sans">
              Established in 1985, Sita Ram Dairy has been a trusted cornerstone in providing premium, organic dairy products to families across the Kathmandu Valley.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg font-sans">
              Our cattle graze in the pristine environments of Tokha, never treated with synthetic hormones. We believe the finest dairy comes from happy animals.
            </p>
          </motion.div>

         <motion.div 
           initial={{ x: 50, opacity: 0 }} 
           whileInView={{ x: 0, opacity: 1 }} 
           viewport={{ once: true }} 
           className="relative"
>
           {/* Decorative Gold Background Frame */}
           <div className="absolute inset-0 bg-[#E2B254] rounded-2xl transform rotate-3 scale-105 opacity-20" />
  
           {/* Updated to ghee.png with object-contain to prevent cropping the jar */}
           <img 
            src="/ghee.png" 
            alt="Sita Ram Premium Ghee" 
            className="relative rounded-2xl shadow-2xl object-contain h-[500px] w-full bg-white p-8" 
            />
          </motion.div>
        </div>

        <div className="text-center mb-16">
          <h3 className="text-3xl font-serif font-bold text-dairyBlack">Why Families Trust Us</h3>
          <div className="w-16 h-1 bg-[#E2B254] mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <motion.div key={idx} initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: idx * 0.1 }} viewport={{ once: true }} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              <div className="w-16 h-16 bg-[#F9F6F0] rounded-full flex items-center justify-center text-dairyRed mb-6 group-hover:bg-[#E2B254] group-hover:text-white transition-colors duration-300">
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold text-dairyBlack mb-3">{feature.title}</h4>
              <p className="text-gray-500 leading-relaxed font-sans">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}