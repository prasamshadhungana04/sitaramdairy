// frontend/src/pages/ProductsPage.jsx
import { motion } from 'framer-motion';
import OurCollection from '../components/Home/OurCollection';
import DetailedProductCards from '../components/Home/DetailedProductCards';
import ProductImageShowcase from '../components/Home/ProductImageShowcase';
import MilkDivider from '../components/Home/MilkDivider';

const ProductsPage = () => {
  return (
    <main className="bg-[#F9F6F0] min-h-screen">
      {/* HERO SECTION - Mirroring the cinematic reference style with hero_1.png */}
      <div className="relative h-[80vh] flex items-center overflow-hidden bg-dairyBlack">
        {/* Background Image - Clear and Visible */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-85 scale-105" 
          style={{ backgroundImage: "url('/hero_1.png')" }} 
        />
        
        {/* Subtle dark-to-transparent gradient to make text pop */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-2xl text-left">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 mb-4"
            >
              <span className="w-8 h-[1px] bg-[#E2B254]"></span>
              <h2 className="text-[#E2B254] text-xs uppercase tracking-[0.3em] font-bold">
                Shop The Farm
              </h2>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-serif font-bold mb-6 text-white leading-tight"
            >
              Our Premium <br /> Catalog
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-200 font-light tracking-wide mb-10 max-w-lg"
            >
              Pure, fresh, and organic dairy products delivered straight from our 
              Tokha pastures to your door every morning.
            </motion.p>

            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="bg-[#E2B254] text-dairyBlack px-10 py-4 rounded-full font-bold uppercase tracking-[0.2em] text-sm hover:bg-white transition-all duration-300 shadow-xl"
            >
              Shop Now
            </motion.button>
          </div>
        </div>
        
        <div className="absolute bottom-0 w-full z-20">
          <MilkDivider />
        </div>
      </div>

      {/* Product Display Sections */}
      <ProductImageShowcase />
      <OurCollection />
      <DetailedProductCards />
    </main>
  );
};

export default ProductsPage;