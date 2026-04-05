// frontend/src/components/Home/ProductFeature.jsx
import { motion } from 'framer-motion';

export default function ProductFeature() {
  const fatContents = ["0.5%", "1.5%", "2.5%", "3.5%", "6%"];

  return (
    <div className="bg-creamBg py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
        
        {/* Left Column */}
        <div className="space-y-10">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl font-serif font-bold text-dairyNavy mb-6 leading-tight">
              Our products <span className="text-dairyGold">are based on high quality milk</span>
            </h2>
            <p className="text-sm text-textMuted leading-relaxed mb-8 font-medium">
              We ensure the highest standards in dairy processing. Our milk is sourced directly from happy, healthy cattle, preserving all natural vitamins and minerals.
            </p>
            
            {/* Fat Content Circles */}
            <div className="flex gap-4 mb-10">
              {fatContents.map((fat, i) => (
                <div key={i} className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center font-bold text-dairyNavy text-sm border border-gray-100">
                  {fat}
                </div>
              ))}
            </div>

            <div className="bg-white/50 p-6 rounded-2xl">
              <h3 className="text-xl font-bold text-dairyNavy flex items-center gap-2 mb-3">
                <span className="text-2xl">🍃</span> Environmentally <span className="text-dairyGold">friendly</span>
              </h3>
              <p className="text-sm text-textMuted mb-6">Sustainable farming practices that protect our soil, water, and local ecosystem.</p>
              <button className="bg-dairyGold text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-dairyNavy transition-colors duration-300">
                Read more
              </button>
            </div>
          </motion.div>
        </div>

        {/* Center Column: The Bottle (Image 2) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }} 
          whileInView={{ opacity: 1, scale: 1 }} 
          viewport={{ once: true }}
          className="relative flex justify-center items-center h-[600px]"
        >
          {/* Mock Leaves Behind */}
          <motion.div 
            animate={{ rotate: [0, 5, -5, 0] }} 
            transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
            className="absolute z-0 text-9xl text-green-700/20"
          >
            🌿
          </motion.div>
          {/* The Bottle (Using a generic transparent milk bottle URL) */}
          <img 
            src="https://png.pngtree.com/png-clipart/20230805/original/pngtree-milk-bottle-mockup-drink-food-picture-image_7758364.png" 
            alt="Organic Fresh Milk" 
            className="relative z-10 max-h-full object-contain drop-shadow-2xl"
          />
        </motion.div>

        {/* Right Column */}
        <div className="space-y-12">
          <FeatureBlock icon="🌾" title="100% Organic Products" desc="Sourced from farms free of synthetic pesticides and fertilizers." />
          <FeatureBlock icon="🍼" title="Recommended for babies" desc="Rich in calcium and essential proteins required for early development." />
          <FeatureBlock icon="🐄" title="High Quality Raw Milk" desc="Processed minimally to retain the authentic, natural farm taste." />
        </div>

      </div>
    </div>
  );
}

function FeatureBlock({ icon, title, desc }) {
  return (
    <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex gap-6">
      <div className="w-16 h-16 shrink-0 rounded-full bg-white shadow-md flex items-center justify-center text-3xl border border-dairyGold/30">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-bold text-dairyNavy mb-2">{title}</h3>
        <p className="text-sm text-textMuted leading-relaxed">{desc}</p>
      </div>
    </motion.div>
  );
}