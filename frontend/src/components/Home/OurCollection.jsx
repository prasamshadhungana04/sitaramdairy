// frontend/src/components/Home/OurCollection.jsx
import { motion } from 'framer-motion';
import { useState } from 'react';

const OurCollection = () => {
  const [hoveredId, setHoveredId] = useState(null);

  const collections = [
    {
      id: 1,
      name: "FARM FRESH",
      title: "Pure Cow Milk",
      subtitle: "A2 Protein Rich",
      image: "https://images.pexels.com/photos/139172/pexels-photo-139172.jpeg?auto=compress&cs=tinysrgb&w=600",
      price: "Rs. 130/L",
      badge: "BESTSELLER",
    },
    {
      id: 2,
      name: "PREMIUM",
      title: "Bilona Ghee",
      subtitle: "Traditional Method",
      image: "https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=600",
      price: "Rs. 1200/500ml",
      badge: "PURE A2",
    },
    {
      id: 3,
      name: "PROBIOTIC",
      title: "Juju Dhau",
      subtitle: "King of Curds",
      image: "https://images.pexels.com/photos/4146459/pexels-photo-4146459.jpeg?auto=compress&cs=tinysrgb&w=600",
      price: "Rs. 150/500g",
      badge: "CREAMY",
    },
    {
      id: 4,
      name: "ORGANIC",
      title: "Paneer Cubes",
      subtitle: "Soft & Fresh",
      image: "https://images.pexels.com/photos/4614288/pexels-photo-4614288.jpeg?auto=compress&cs=tinysrgb&w=600",
      price: "Rs. 350/500g",
      badge: "PROTEIN RICH",
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Animated Liquid Orbs Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ y: [0, 40, 0], scale: [1, 1.2, 1] }} 
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-20 -left-20 w-96 h-96 bg-[#E2B254]/10 rounded-full blur-[80px]" 
        />
        <motion.div 
          animate={{ y: [0, -40, 0], scale: [1, 1.1, 1] }} 
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-10 -right-20 w-[30rem] h-[30rem] bg-[#002147]/5 rounded-full blur-[100px]" 
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-[#E2B254] text-sm uppercase tracking-[0.3em] font-bold mb-4">
            Our Collection
          </h2>
          <h3 className="text-5xl md:text-6xl font-serif font-extrabold text-[#002147] mb-6">
            Premium Dairy <span className="text-[#E2B254]">Selection</span>
          </h3>
          <div className="w-24 h-1 bg-[#E2B254] mx-auto mb-6 rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {collections.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group cursor-pointer relative"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-[0_20px_40px_rgba(0,33,71,0.12)] transition-all duration-500 relative z-10 h-full flex flex-col">
                <div className="relative overflow-hidden bg-[#F9F6F0] h-64">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  
                  {/* Navy Gradient Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#002147]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <span className="absolute top-4 right-4 bg-[#E2B254] text-[#002147] px-3 py-1 rounded shadow-md text-xs font-bold uppercase tracking-wider z-10">
                    {item.badge}
                  </span>
                </div>

                <div className="p-6 flex flex-col flex-grow text-center">
                  <p className="text-[#E2B254] text-xs font-bold tracking-widest uppercase mb-2">
                    {item.name}
                  </p>
                  <h4 className="text-2xl font-serif font-bold text-[#002147] mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-500 text-sm mb-4">
                    {item.subtitle}
                  </p>
                  
                  <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-xl font-bold text-[#002147]">
                      {item.price}
                    </span>
                    <button className="bg-[#002147] text-white px-5 py-2 rounded-lg text-sm font-bold hover:bg-[#E2B254] hover:text-[#002147] transition-colors duration-300 shadow-md">
                      Shop Now
                    </button>
                  </div>
                </div>
              </div>
              
              {/* 3D Under-Shadow */}
              <div 
                className="absolute -bottom-4 left-4 right-4 h-8 bg-[#002147]/20 rounded-full blur-xl transition-all duration-500 z-0"
                style={{ opacity: hoveredId === item.id ? 1 : 0, transform: hoveredId === item.id ? 'scale(1)' : 'scale(0.8)' }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OurCollection;