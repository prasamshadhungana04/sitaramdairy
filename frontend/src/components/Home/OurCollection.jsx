import { motion } from "framer-motion";
import { useState } from "react";
import { useCart } from "../../context/CartContext"; // Import the cart context

const OurCollection = () => {
  const [hoveredId, setHoveredId] = useState(null);
  const { addToCart } = useCart(); // Initialize cart function

  // Note: Prices must be numbers so the Cart math works! 
  // We separate the unit out to display it visually.
  const collections = [
    {
      id: 1,
      name: "ARTISANAL",
      title: "Premium Ghee",
      subtitle: "Traditional Bilona Style",
      image: "/ghee.png",
      price: 950,
      unit: "/ L",
      badge: "NATURAL ENERGY",
    },
    {
      id: 2,
      name: "HEALTHY",
      title: "Processed Butter",
      subtitle: "Creamy & Himalayan Fresh",
      image: "/butter.png",
      price: 250,
      unit: "/ 200g",
      badge: "BESTSELLER",
    },
    {
      id: 3,
      name: "PROBIOTIC",
      title: "Sita Ram Dahi",
      subtitle: "Pure Thick Yogurt",
      image: "/dahi.png",
      price: 120,
      unit: "/ 500g",
      badge: "SUGAR FREE",
    },
    {
      id: 4,
      name: "PROTEIN RICH",
      title: "Fresh Paneer",
      subtitle: "Soft & Vacuum Packed",
      image: "/paneer.png",
      price: 380,
      unit: "/ 500g",
      badge: "NEW",
    },
    {
      id: 5,
      name: "REFRESHING",
      title: "Strawberry Lassi",
      subtitle: "Real Fruit Fusion",
      image: "/strawberrylassi.png",
      price: 60,
      unit: "/ 200ml",
      badge: "FRUITY",
    },
    {
      id: 6,
      name: "ENERGY",
      title: "Keshar Milk",
      subtitle: "Saffron Infused Low Fat",
      image: "/kesharmilk.png",
      price: 80,
      unit: "/ 200ml",
      badge: "FRESH",
    },
    {
      id: 7,
      name: "TRADITIONAL",
      title: "Sweet Lassi",
      subtitle: "Calcium & Protein Source",
      image: "/lassi.png",
      price: 50,
      unit: "/ 200ml",
      badge: "CLASSIC",
    },
    {
      id: 8,
      name: "DAILY ESSENTIAL",
      title: "Medium Dahi",
      subtitle: "Pure Milk Curd",
      image: "/medium_dahi.png",
      price: 80,
      unit: "/ 250g",
      badge: "CREAMY",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="py-24 bg-[#FDF8E7] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ y: [0, 40, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -top-20 -left-20 w-96 h-96 bg-[#9e111a]/5 rounded-full blur-[80px]"
        />
        <motion.div
          animate={{ y: [0, -40, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
          className="absolute bottom-10 -right-20 w-[30rem] h-[30rem] bg-[#9e111a]/5 rounded-full blur-[100px]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-[#9e111a] text-sm uppercase tracking-[0.3em] font-bold mb-4">
            Our Collection
          </h2>

          <h3 className="text-5xl md:text-6xl font-serif font-extrabold text-[#1A1A1A] mb-6 drop-shadow-sm">
            Premium Dairy <span className="text-[#9e111a]">Selection</span>
          </h3>

          <div className="w-24 h-1 bg-[#9e111a] mx-auto rounded-full" />
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {collections.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group relative cursor-pointer"
            >
              <div className="bg-white rounded-[2rem] overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-500 flex flex-col h-full z-10 relative">
                
                {/* Image */}
                <div className="relative h-64 overflow-hidden bg-white">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-700 mix-blend-multiply"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#9e111a]/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

                  <span className="absolute top-4 right-4 bg-[#9e111a] text-white px-3 py-1 text-[10px] font-black tracking-widest rounded uppercase shadow-md">
                    {item.badge}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow text-center">
                  <p className="text-[#9e111a] text-[10px] font-black uppercase mb-2 tracking-widest">
                    {item.name}
                  </p>

                  <h4 className="text-xl font-serif font-bold text-[#1A1A1A] mb-1">
                    {item.title}
                  </h4>

                  <p className="text-gray-500 font-medium text-xs mb-4">
                    {item.subtitle}
                  </p>

                  <div className="mt-auto pt-4 border-t border-gray-100 flex justify-between items-center">
                    <span className="text-lg font-black text-[#1A1A1A]">
                      NPR {item.price}<span className="text-xs text-gray-400 font-bold ml-1">{item.unit}</span>
                    </span>

                    {/* WIRED UP ADD TO CART BUTTON */}
                    <button 
                      onClick={(e) => {
                        e.stopPropagation(); // Prevents triggering any parent links/modals
                        if(addToCart) addToCart(item); // Safely adds the item to context
                      }}
                      className="bg-[#9e111a] text-white px-4 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider hover:bg-[#1A1A1A] transition-colors shadow-md hover:shadow-xl"
                    >
                      Add +
                    </button>
                  </div>
                </div>
              </div>

              {/* Hover Glow */}
              <div
                className={`absolute -bottom-4 left-4 right-4 h-8 bg-[#9e111a]/20 rounded-full blur-xl transition-all duration-500 z-0 ${
                  hoveredId === item.id ? "opacity-100 scale-100" : "opacity-0 scale-75"
                }`}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OurCollection;