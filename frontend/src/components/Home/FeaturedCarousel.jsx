// frontend/src/components/Home/FeaturedCarousel.jsx
import { motion } from 'framer-motion';

const FeaturedCarousel = () => {
  const featured = [
    "A2 Milk", "Desi Ghee", "Fresh Curd", "Organic Paneer", "Flavored Lassi", "Salted Butter"
  ];

  return (
    <div className="overflow-hidden py-8 bg-dairyNavy">
      <motion.div
        animate={{
          x: [0, -1000],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex gap-12 whitespace-nowrap"
      >
        {[...featured, ...featured].map((item, index) => (
          <span key={index} className="text-dairyGold text-lg font-dmsans">
            {item} ✦
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default FeaturedCarousel;