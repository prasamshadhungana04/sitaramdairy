// frontend/src/pages/AboutPage.jsx
import { motion } from 'framer-motion';
import { ShieldCheck, Droplets, Heart, Leaf, Award } from 'lucide-react';
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
      <div className="relative bg-[#002147] text-white pt-32 pb-24 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?w=1920&q=80')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#002147] to-transparent" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-5xl md:text-6xl font-serif font-bold mb-6">
            The Heritage of <span className="text-[#E2B254]">Sita Ram</span>
          </motion.h1>
          <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="text-xl text-gray-300 font-light tracking-wide">
            Generations of pure goodness since 1985, rooted in the heart of Nepal.
          </motion.p>
        </div>
        <div className="absolute bottom-0 w-full z-20"><MilkDivider /></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div initial={{ x: -50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }}>
            <h2 className="text-[#E2B254] text-sm font-bold uppercase tracking-[0.2em] mb-4">Our Legacy</h2>
            <h3 className="text-4xl font-serif font-bold text-[#002147] mb-6">A Tradition of Purity</h3>
            <p className="text-gray-600 leading-relaxed mb-6 text-lg">
              Established in 1985, Sita Ram Dairy has been a trusted cornerstone in providing premium, organic dairy products to families across the Kathmandu Valley. For over three generations, we have maintained our unwavering commitment to quality.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              Our cattle graze in the pristine environments of Tokha, never treated with synthetic hormones. We believe the finest dairy comes from happy animals and time-honored traditions.
            </p>
          </motion.div>
          <motion.div initial={{ x: 50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} className="relative">
            <div className="absolute inset-0 bg-[#E2B254] rounded-2xl transform rotate-3 scale-105 opacity-20" />
            <img src="https://images.unsplash.com/photo-1596181938555-d3c52e46e8c7?w=800&q=80" alt="Farm pouring milk" className="relative rounded-2xl shadow-2xl object-cover h-[500px] w-full" />
          </motion.div>
        </div>

        <div className="text-center mb-16">
          <h3 className="text-3xl font-serif font-bold text-[#002147]">Why Families Trust Us</h3>
          <div className="w-16 h-1 bg-[#E2B254] mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <motion.div key={idx} initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: idx * 0.1 }} viewport={{ once: true }} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              <div className="w-16 h-16 bg-[#F9F6F0] rounded-full flex items-center justify-center text-[#002147] mb-6 group-hover:bg-[#E2B254] group-hover:text-white transition-colors duration-300">
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold text-[#002147] mb-3">{feature.title}</h4>
              <p className="text-gray-500 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}