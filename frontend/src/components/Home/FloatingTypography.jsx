// frontend/src/components/Home/FloatingTypography.jsx
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const FloatingTypography = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax scrolling values
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [100, -50]);
  // Slower parallax for the background image
  const imgY = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <div ref={containerRef} className="relative overflow-hidden py-32 bg-white flex flex-col items-center justify-center min-h-[75vh] border-y border-gray-100">
      
      {/* 1. THE WATERMARK: Giant "SR" Background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none z-0">
        <span className="text-[25rem] md:text-[40rem] font-serif font-black text-[#1A1A1A] tracking-tighter">
          SR
        </span>
      </div>

      {/* 2. THE HERO 5 IMAGE: Fully Visible and Parallax */}
      <motion.div 
        style={{ y: imgY }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none z-10"
      >
        <img 
          src="/whitebg.png" 
          className="w-full h-full object-cover md:scale-110 opacity-70 drop-shadow-2xl"
          alt="Sita Ram Heritage"
        />
        {/* Subtle Dark Fade at the bottom for image depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
      </motion.div>

      {/* 3. TEXT BLOCK BACKDROP: This ensures text is visible over the image */}
      {/* Creates a blurred 'frosty' effect specifically behind the text area */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 py-10 bg-black/10 backdrop-blur-sm rounded-[3rem] border border-white/10 shadow-xl">
        
        {/* TOP LAYER: PURE ORGANIC */}
        <motion.div
          style={{ y: y1 }}
          className="text-center mb-2"
        >
          {/* Changed 'text-transparent' to 'text-white' for high contrast ORGANIC */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-black tracking-tighter leading-[0.8] drop-shadow-[0_4px_10px_rgba(0,0,0,0.7)] text-white">
            <span className="text-[#7A0000]">PURE</span>{" "}
            <span 
              className="text-transparent" 
              style={{ WebkitTextStroke: '3px #7A0000' }}
            >
              ORGANIC
            </span>
          </h1>
        </motion.div>
        
        {/* BOTTOM LAYER: DAIRY FARM */}
        <motion.div
          style={{ y: y2 }}
          className="text-center mt-6"
        >
          {/* Increased Black drop-shadow specifically for FARM text visibility */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-black tracking-tighter leading-[0.8] drop-shadow-[0_10px_20px_rgba(0,0,0,0.9)] text-white">
            <span className="text-[#7A0000]">DAIRY</span>{" "}
            <span className="text-[#1A1A1A]">FARM</span>
          </h1>
        </motion.div>

      </div>

      {/* 4. DECORATIVE FLOATING ORBS */}
      <motion.div
        animate={{ y: [0, -30, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[10%] top-[20%] w-48 h-48 bg-[#7A0000]/15 rounded-full blur-[100px] z-20"
      />
      <motion.div
        animate={{ y: [0, 40, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute right-[5%] bottom-[10%] w-64 h-64 bg-[#1A1A1A]/10 rounded-full blur-[120px] z-20"
      />
    </div>
  );
};

export default FloatingTypography;