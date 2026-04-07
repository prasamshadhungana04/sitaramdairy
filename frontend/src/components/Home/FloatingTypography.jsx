import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const FloatingTypography = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax scrolling value for the background image
  const imgY = useTransform(scrollYProgress, [0, 1], [-60, 60]);

  return (
    // Changed min-h-[85vh] to min-h-screen for full viewport height
    <div ref={containerRef} className="relative overflow-hidden bg-white flex flex-col items-center justify-center min-h-screen border-y border-gray-100">
      
      {/* 1. THE WATERMARK: Giant "SR" Background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none z-0">
        <span className="text-[25rem] md:text-[45rem] font-serif font-black text-[#1A1A1A] tracking-tighter">
          SR
        </span>
      </div>

      {/* 2. THE HERO IMAGE: Full Length and Parallax */}
      <motion.div 
        style={{ y: imgY }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none z-10"
      >
        <img 
          src="/hero_5.png" 
          // Changed opacity-70 to opacity-100 to show the full vibrant image
          // Used h-full w-full object-cover to ensure it fills the entire screen length
          className="w-full h-full object-cover md:scale-105 transition-all duration-700 ease-out drop-shadow-2xl"
          alt="Sita Ram Heritage"
        />
        {/* Subtle Gradient Overlay to ensure the top/bottom blends well */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-white/10" />
      </motion.div>

      {/* 3. DECORATIVE FLOATING ORBS */}
      <motion.div
        animate={{ y: [0, -40, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[10%] top-[25%] w-56 h-56 bg-[#7A0000]/10 rounded-full blur-[110px] z-20"
      />
      <motion.div
        animate={{ y: [0, 50, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute right-[8%] bottom-[15%] w-72 h-72 bg-[#1A1A1A]/5 rounded-full blur-[130px] z-20"
      />
    </div>
  );
};

export default FloatingTypography;