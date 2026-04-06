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

  return (
    <div ref={containerRef} className="relative overflow-hidden py-32 bg-white flex flex-col items-center justify-center min-h-[60vh] border-y border-gray-100">
      
      {/* Background Subtle Logo mark - Updated to Onyx Black at low opacity */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
        <span className="text-[30rem] font-serif font-black text-[#1A1A1A]">SR</span>
      </div>

      <motion.div
        style={{ y: y1 }}
        className="relative z-10 text-center px-4"
      >
        {/* Sizes reverted to your original: 6xl, 8xl, 9xl */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-black tracking-tighter leading-[0.8]">
          <span className="text-[#7A0000] red-text-shadow">PURE</span>{" "}
          <span className="text-transparent" style={{ WebkitTextStroke: '2px #7A0000' }}>
            ORGANIC
          </span>
        </h1>
      </motion.div>
      
      <motion.div
        style={{ y: y2 }}
        className="relative z-20 text-center px-4 mt-4"
      >
        {/* Sizes reverted to your original: 5xl, 7xl, 8xl */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-black tracking-tighter leading-[0.8] drop-shadow-xl">
          <span className="text-[#7A0000] red-text-shadow">DAIRY</span>{" "}
          <span className="text-[#1A1A1A]">FARM</span>
        </h1>
      </motion.div>

      {/* Floating Animated Elements - Updated to match new theme colors */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 5, -5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[10%] top-[20%] w-24 h-24 bg-[#7A0000]/5 rounded-full blur-xl"
      />
      <motion.div
        animate={{ y: [0, 30, 0], rotate: [0, -10, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute right-[15%] bottom-[20%] w-32 h-32 bg-[#1A1A1A]/5 rounded-full blur-xl"
      />
    </div>
  );
};

export default FloatingTypography;