// frontend/src/components/Home/FloatingTypography.jsx
import { motion } from 'framer-motion';

const FloatingTypography = () => {
  return (
    <div className="relative overflow-hidden py-16 bg-creamBg">
      <motion.div
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute left-10 top-20 opacity-10"
      >
        <h1 className="text-8xl font-fraunces font-bold text-dairyNavy">Fresh</h1>
      </motion.div>
      
      <motion.div
        animate={{
          y: [0, 20, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute right-10 bottom-20 opacity-10"
      >
        <h1 className="text-8xl font-fraunces font-bold text-dairyNavy">Organic</h1>
      </motion.div>
    </div>
  );
};

export default FloatingTypography;