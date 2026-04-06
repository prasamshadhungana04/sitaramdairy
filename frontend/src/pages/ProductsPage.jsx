// frontend/src/pages/ProductsPage.jsx
import OurCollection from '../components/Home/OurCollection';
import DetailedProductCards from '../components/Home/DetailedProductCards';
import ProductImageShowcase from '../components/Home/ProductImageShowcase';
import MilkDivider from '../components/Home/MilkDivider';
import { motion } from 'framer-motion';

const ProductsPage = () => {
  return (
    <main className="bg-cheeseCream min-h-screen">
      {/* === HERO SECTION === */}
      <div className="relative bg-dairyBlack text-white pt-40 pb-32 text-center overflow-hidden">
        {/* Professional Red Ambient Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] bg-dairyRed/10 rounded-full blur-[150px] pointer-events-none" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          {/* Subtitle: Previously Yellow, Now Bold Red */}
          <motion.h2 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-dairyRed text-xs uppercase tracking-[0.4em] font-black mb-4"
          >
            Shop The Farm
          </motion.h2>
          
          {/* Main Title: Red with Professional Shadow */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-7xl font-serif font-bold mb-8 text-white red-text-shadow"
          >
            Our Premium <span className="text-dairyRed italic">Catalog</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-400 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed"
          >
            Pure, fresh, and organic dairy products delivered straight from our Tokha pastures to your door within hours of production.
          </motion.p>
        </div>
        
        {/* Signature Milk Divider (Matches cheeseCream background) */}
        <div className="absolute bottom-0 w-full z-20">
          <MilkDivider />
        </div>
      </div>

      {/* === PRODUCT SECTIONS === */}
      <div className="space-y-0">
        <ProductImageShowcase />
        
        {/* Section Divider */}
        <div className="max-w-7xl mx-auto px-6">
          <div className="h-px bg-dairyRed/10 w-full" />
        </div>

        <OurCollection />
        
        <div className="max-w-7xl mx-auto px-6">
          <div className="h-px bg-dairyRed/10 w-full" />
        </div>

        <DetailedProductCards />
      </div>

      {/* Aesthetic Footer Note */}
      <div className="py-20 text-center bg-cheeseCream">
        <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.4em]">
          End of Catalog • <span className="text-dairyRed">Sita Ram Organic Heritage</span>
        </p>
      </div>
    </main>
  );
};

export default ProductsPage;