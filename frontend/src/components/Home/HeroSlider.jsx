// frontend/src/components/Home/HeroSlider.jsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const banners = [
  { id: 1, title: "Pure Buffalo Milk", img: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=1200&q=80", price: "Rs. 120/L" },
  { id: 2, title: "Fresh Organic Paneer", img: "https://images.unsplash.com/photo-1631379578027-114414f52e37?w=1200&q=80", price: "Rs. 350/kg" }
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const nextSlide = () => setIndex((prev) => (prev + 1) % banners.length);

  return (
    <div className="relative w-full h-[50vh] md:h-[70vh] bg-dairyBlue overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0 flex items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: `url(${banners[index].img})` }}
        >
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-textMain mb-4">{banners[index].title}</h1>
            <p className="text-xl font-semibold text-green-700 mb-6">{banners[index].price}</p>
            <motion.button 
              whileHover={{ scale: 1.1, borderRadius: "25px" }}
              whileTap={{ scale: 0.9 }}
              className="bg-textMain text-white px-8 py-3 font-semibold rounded-lg shadow-md"
            >
              Shop Now
            </motion.button>
          </div>
        </motion.div>
      </AnimatePresence>
      <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/50 p-4 rounded-full">❯</button>
    </div>
  );
}