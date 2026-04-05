// frontend/src/components/Home/FloatingTypography.jsx
import { motion, useScroll, useTransform } from 'framer-motion';

export default function FloatingTypography() {
  const { scrollYProgress } = useScroll();
  const yPos1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const yPos2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <div className="bg-white py-32 relative overflow-hidden flex items-center justify-center min-h-[80vh]">
      
      {/* Floating Elements from Image 3 */}
      <motion.img 
        style={{ y: yPos1 }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 50, ease: "linear" }}
        src="https://cdn-icons-png.flaticon.com/512/3143/3143644.png" 
        alt="Cheese" 
        className="absolute top-10 left-[10%] w-32 opacity-80 z-20 drop-shadow-xl"
      />
      
      <motion.img 
        style={{ y: yPos2 }}
        src="https://cdn-icons-png.flaticon.com/512/2821/2821808.png" 
        alt="Cream Spoon" 
        className="absolute bottom-10 right-[10%] w-40 opacity-80 z-20 drop-shadow-xl"
      />

      {/* Center Slanted Bottle */}
      <motion.img 
        initial={{ rotate: -15, scale: 0.8, opacity: 0 }}
        whileInView={{ rotate: -20, scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        src="https://png.pngtree.com/png-clipart/20230805/original/pngtree-milk-bottle-mockup-drink-food-picture-image_7758364.png" 
        alt="Milatte Bottle" 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[700px] z-10 drop-shadow-2xl"
      />

      {/* The Giant Typography */}
      <div className="relative z-0 text-center max-w-6xl mx-auto px-4 font-serif font-bold text-[5rem] md:text-[8rem] leading-[0.9] tracking-tight mix-blend-multiply">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="text-dairyNavy">Freshness and</span>
        </motion.div>
        
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} viewport={{ once: true }}>
          <span className="text-dairyGold">naturalnes</span><span className="text-dairyNavy">s are the</span>
        </motion.div>
        
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} viewport={{ once: true }}>
          <span className="text-dairyNavy">main prin</span><span className="text-dairyNavy relative z-20">ciples of our</span>
        </motion.div>
        
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} viewport={{ once: true }}>
          <span className="text-dairyGold">pro</span><span className="text-dairyNavy">duction</span>
        </motion.div>
      </div>

    </div>
  );
}