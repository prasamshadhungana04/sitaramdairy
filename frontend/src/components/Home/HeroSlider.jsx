// frontend/src/components/Home/HeroSlider.jsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const banners = [
  { 
    id: 1, 
    subtitle: "From our farm to your glass",
    title: "100% Organic\nBuffalo Milk", 
    img: "https://images.unsplash.com/photo-1596181938555-d3c52e46e8c7?q=80&w=1920&auto=format&fit=crop", 
  },
  { 
    id: 2, 
    subtitle: "Traditional & Authentic",
    title: "Pure & Golden\nCow Ghee", 
    img: "https://images.unsplash.com/photo-1601314101416-3687edec84b3?q=80&w=1920&auto=format&fit=crop", 
  }
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % banners.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[70vh] md:h-[85vh] bg-textMain overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          {/* Background Image with Slow Zoom */}
          <div 
            className="absolute inset-0 bg-cover bg-center animate-slow-zoom opacity-70"
            style={{ backgroundImage: `url(${banners[index].img})` }}
          />
          {/* Dark Overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20" />

          {/* Content */}
          <div className="absolute inset-0 max-w-7xl mx-auto px-4 flex flex-col justify-center items-start">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <span className="text-accentYellow font-bold tracking-widest uppercase text-sm mb-4 block flex items-center gap-2">
                <span className="w-8 h-[2px] bg-accentYellow inline-block"></span>
                {banners[index].subtitle}
              </span>
              <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-8 leading-tight whitespace-pre-line">
                {banners[index].title}
              </h1>
              <div className="flex gap-4">
                <Link to="/products" className="btn-premium">
                  Discover Products
                </Link>
                <Link to="/about" className="bg-transparent text-white font-bold py-3 px-8 rounded-full border-2 border-white hover:bg-white hover:text-textMain transition-all duration-300">
                  Our Story
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Custom Slider Controls */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3">
        {banners.map((_, i) => (
          <button 
            key={i} 
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${i === index ? 'bg-accentYellow scale-125' : 'bg-white/50'}`}
          />
        ))}
      </div>
    </div>
  );
}