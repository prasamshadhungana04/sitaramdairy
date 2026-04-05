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
      price: "₹60/L",
      badge: "BESTSELLER",
    },
    {
      id: 2,
      name: "PREMIUM",
      title: "Bilona Ghee",
      subtitle: "Traditional Method",
      image: "https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=600",
      price: "₹450/500ml",
      badge: "PURE A2",
    },
    {
      id: 3,
      name: "PROBIOTIC",
      title: "Thick Curd",
      subtitle: "Live Cultures",
      image: "https://images.pexels.com/photos/4146459/pexels-photo-4146459.jpeg?auto=compress&cs=tinysrgb&w=600",
      price: "₹45/500g",
      badge: "CREAMY",
    },
    {
      id: 4,
      name: "ORGANIC",
      title: "Paneer Cubes",
      subtitle: "Soft & Fresh",
      image: "https://images.pexels.com/photos/4614288/pexels-photo-4614288.jpeg?auto=compress&cs=tinysrgb&w=600",
      price: "₹200/500g",
      badge: "PROTEIN RICH",
    },
    {
      id: 5,
      name: "ARTISAN",
      title: "Flavored Lassi",
      subtitle: "Mango & Sweet",
      image: "https://images.pexels.com/photos/4082971/pexels-photo-4082971.jpeg?auto=compress&cs=tinysrgb&w=600",
      price: "₹35/200ml",
      badge: "BESTSELLER",
    },
    {
      id: 6,
      name: "PURE",
      title: "Desi Butter",
      subtitle: "Salted & Unsalted",
      image: "https://images.pexels.com/photos/3944095/pexels-photo-3944095.jpeg?auto=compress&cs=tinysrgb&w=600",
      price: "₹120/200g",
      badge: "CREAMY",
    },
    {
      id: 7,
      name: "TRADITIONAL",
      title: "Chaas",
      subtitle: "Spiced Buttermilk",
      image: "https://images.pexels.com/photos/4082971/pexels-photo-4082971.jpeg?auto=compress&cs=tinysrgb&w=600",
      price: "₹30/200ml",
      badge: "REFRESHING",
    },
    {
      id: 8,
      name: "HERITAGE",
      title: "Shrikhand",
      subtitle: "Saffron Elaichi",
      image: "https://images.pexels.com/photos/4146459/pexels-photo-4146459.jpeg?auto=compress&cs=tinysrgb&w=600",
      price: "₹120/250g",
      badge: "DESSERT",
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-600 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-600 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-red-600 text-sm uppercase tracking-[0.3em] font-dmsans mb-4">
            Our Collection
          </h2>
          <h3 className="text-5xl md:text-6xl font-fraunces font-bold text-red-800 mb-6">
            Premium Dairy <span className="text-red-500">Selection</span>
          </h3>
          <div className="w-32 h-0.5 bg-red-500 mx-auto mb-6" />
          <p className="text-gray-600 max-w-2xl mx-auto font-dmsans">
            Discover our range of farm-fresh, organic dairy products crafted with tradition and purity
          </p>
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
              className="group cursor-pointer transition-all duration-500 ease-out transform hover:scale-105 hover:shadow-2xl"
              style={{ 
                transform: hoveredId === item.id ? 'translateY(-10px) scale(1.02)' : 'translateY(0) scale(1)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-red-200/50 transition-all duration-500">
                <div className="relative overflow-hidden bg-gradient-to-br from-red-50 to-white h-64">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-all duration-500 ease-out"
                    style={{
                      transform: hoveredId === item.id ? 'scale(1.15)' : 'scale(1)',
                      transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                    }}
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/400x400?text=Dairy+Product';
                    }}
                  />
                  
                  {/* Dark Overlay on Hover */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-t from-red-900 to-transparent transition-all duration-500"
                    style={{ opacity: hoveredId === item.id ? 0.6 : 0 }}
                  />
                  
                  <span className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold font-dmsans shadow-lg z-10">
                    {item.badge}
                  </span>
                  
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full transition-all duration-300" style={{ transform: hoveredId === item.id ? 'scale(1.05)' : 'scale(1)' }}>
                    <p className="text-red-600 text-xs font-bold tracking-wider">
                      {item.name}
                    </p>
                  </div>
                </div>

                <div className="p-5 text-center">
                  <h4 className="text-xl font-fraunces font-bold text-red-800 mb-2 transition-colors duration-300" style={{ color: hoveredId === item.id ? '#DC2626' : '#991B1B' }}>
                    {item.title}
                  </h4>
                  <p className="text-gray-500 text-sm font-dmsans mb-3">
                    {item.subtitle}
                  </p>
                  
                  <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-100">
                    <span className="text-2xl font-bold text-red-700 font-dmsans">
                      {item.price}
                    </span>
                    <button 
                      className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-dmsans font-semibold hover:bg-red-700 transition-all duration-300 transform hover:scale-105"
                      style={{ 
                        backgroundColor: hoveredId === item.id ? '#DC2626' : '#991B1B',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      Shop Now
                    </button>
                  </div>
                </div>
              </div>

              {/* Shadow Effect on Hover */}
              <div 
                className="absolute -bottom-2 left-4 right-4 h-8 bg-red-600/20 rounded-full blur-xl transition-all duration-500"
                style={{ opacity: hoveredId === item.id ? 1 : 0, transform: hoveredId === item.id ? 'scale(1.1)' : 'scale(0.9)' }}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <button className="bg-transparent border-2 border-red-600 text-red-600 px-8 py-3 rounded-full font-dmsans font-semibold hover:bg-red-600 hover:text-white transition-all duration-300 transform hover:scale-105">
            View All Products →
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default OurCollection;