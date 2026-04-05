// frontend/src/components/Home/FeaturedCarousel.jsx
import { motion } from 'framer-motion';

const FeaturedCarousel = () => {
  const featured = [
    "100% ORGANIC A2 MILK", 
    "TRADITIONAL BILONA GHEE", 
    "PROBIOTIC JUJU DHAU", 
    "FARM FRESH PANEER", 
    "ARTISANAL SWEET LASSI", 
    "PURE DESI BUTTER"
  ];

  return (
    <div className="overflow-hidden py-5 bg-[#002147] border-y border-[#E2B254]/20 shadow-inner relative">
      {/* Edge Gradients for smooth fade effect */}
      <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-[#002147] to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-[#002147] to-transparent z-10" />

      <motion.div
        animate={{ x: [0, -2000] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="flex gap-12 whitespace-nowrap items-center"
      >
        {/* Tripled array to ensure seamless infinite scrolling on ultra-wide screens */}
        {[...featured, ...featured, ...featured].map((item, index) => (
          <div key={index} className="flex items-center gap-12">
            <span className="text-[#E2B254] text-sm md:text-base font-bold tracking-[0.2em] uppercase flex items-center">
              {item}
            </span>
            <span className="text-white/30 text-xl">
              ✧
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default FeaturedCarousel;