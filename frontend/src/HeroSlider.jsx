// frontend/src/components/Home/HeroSlider.jsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const HeroSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const slides = [
    {
      id: 1,
      title: "Pure Organic Milk",
      subtitle: "Fresh from our happy cows",
      description: "Farm-fresh, A2 organic milk delivered daily",
      image: "https://images.pexels.com/photos/139172/pexels-photo-139172.jpeg?auto=compress&cs=tinysrgb&w=1600",
      buttonText: "Shop Now"
    },
    {
      id: 2,
      title: "Artisanal Ghee",
      subtitle: "Traditional bilona method",
      description: "Slow-churned, aromatic ghee for your kitchen",
      image: "https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=1600",
      buttonText: "Explore"
    },
    {
      id: 3,
      title: "Creamy Curd",
      subtitle: "Probiotic-rich goodness",
      description: "Thick, creamy curd made with heritage cultures",
      image: "https://images.pexels.com/photos/4146459/pexels-photo-4146459.jpeg?auto=compress&cs=tinysrgb&w=1600",
      buttonText: "Order Now"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden bg-white">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: `url(${slides[currentIndex].image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
          </div>
          
          <div className="relative h-full flex items-center max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="max-w-2xl text-white"
            >
              <h2 className="text-red-300 uppercase tracking-wider text-sm mb-3 font-dmsans">
                {slides[currentIndex].subtitle}
              </h2>
              <h1 className="text-6xl md:text-7xl font-fraunces font-bold mb-4 leading-tight">
                {slides[currentIndex].title}
              </h1>
              <p className="text-lg md:text-xl mb-8 text-white/90">
                {slides[currentIndex].description}
              </p>
              <button className="bg-red-600 text-white px-8 py-3 rounded-full font-dmsans font-semibold hover:bg-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                {slides[currentIndex].buttonText}
              </button>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`transition-all duration-300 rounded-full ${
              currentIndex === index 
                ? 'w-12 h-1.5 bg-red-600' 
                : 'w-6 h-1.5 bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;