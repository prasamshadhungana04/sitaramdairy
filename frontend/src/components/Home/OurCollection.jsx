import { motion } from "framer-motion";
import { useState } from "react";

const OurCollection = () => {
  const [hoveredId, setHoveredId] = useState(null);

  const collections = [
    {
      id: 1,
      name: "ARTISANAL",
      title: "Premium Ghee",
      subtitle: "Traditional Bilona Style",
      image: "/ghee.png",
      price: "Rs. 950/L",
      badge: "NATURAL ENERGY",
    },
    {
      id: 2,
      name: "HEALTHY",
      title: "Processed Butter",
      subtitle: "Creamy & Himalayan Fresh",
      image: "/butter.png",
      price: "Rs. 250/200g",
      badge: "BESTSELLER",
    },
    {
      id: 3,
      name: "PROBIOTIC",
      title: "Sita Ram Dahi",
      subtitle: "Pure Thick Yogurt",
      image: "/dahi.png",
      price: "Rs. 120/500g",
      badge: "SUGAR FREE",
    },
    {
      id: 4,
      name: "PROTEIN RICH",
      title: "Fresh Paneer",
      subtitle: "Soft & Vacuum Packed",
      image: "/paneer.png",
      price: "Rs. 380/500g",
      badge: "NEW",
    },
    {
      id: 5,
      name: "REFRESHING",
      title: "Strawberry Lassi",
      subtitle: "Real Fruit Fusion",
      image: "/strawberrylassi.png",
      price: "Rs. 60/200ml",
      badge: "FRUITY",
    },
    {
      id: 6,
      name: "ENERGY",
      title: "Keshar Milk",
      subtitle: "Saffron Infused Low Fat",
      image: "/kesharmilk.png",
      price: "Rs. 80/200ml",
      badge: "FRESH",
    },
    {
      id: 7,
      name: "TRADITIONAL",
      title: "Sweet Lassi",
      subtitle: "Calcium & Protein Source",
      image: "/lassi.png",
      price: "Rs. 50/200ml",
      badge: "CLASSIC",
    },
    {
      id: 8,
      name: "DAILY ESSENTIAL",
      title: "Medium Dahi",
      subtitle: "Pure Milk Curd",
      image: "/medium_dahi.png",
      price: "Rs. 80/250g",
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
    <section className="py-24 bg-cheeseCream relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ y: [0, 40, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -top-20 -left-20 w-96 h-96 bg-dairyRed/5 rounded-full blur-[80px]"
        />
        <motion.div
          animate={{ y: [0, -40, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
          className="absolute bottom-10 -right-20 w-[30rem] h-[30rem] bg-dairyRed/5 rounded-full blur-[100px]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-dairyRed text-sm uppercase tracking-[0.3em] font-bold mb-4">
            Our Collection
          </h2>

          <h3 className="text-5xl md:text-6xl font-serif font-extrabold text-dairyBlack mb-6">
            Premium Dairy <span className="text-dairyRed">Selection</span>
          </h3>

          <div className="w-24 h-1 bg-dairyRed mx-auto rounded-full" />
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
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
              <div className="bg-[#FFFCF5] rounded-2xl overflow-hidden shadow-lg border border-dairyRed/10 hover:shadow-premium transition-all duration-500 flex flex-col h-full">
                
                {/* Image */}
                <div className="relative h-64 overflow-hidden bg-white">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-dairyRed/20 to-transparent opacity-0 group-hover:opacity-100 transition" />

                  <span className="absolute top-4 right-4 bg-dairyRed text-white px-3 py-1 text-[10px] font-bold rounded shadow-lg">
                    {item.badge}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow text-center">
                  <p className="text-dairyRed text-[10px] font-bold uppercase mb-2 tracking-widest">
                    {item.name}
                  </p>

                  <h4 className="text-xl font-serif font-bold text-dairyBlack mb-1">
                    {item.title}
                  </h4>

                  <p className="text-gray-500 text-xs mb-4">
                    {item.subtitle}
                  </p>

                  <div className="mt-auto pt-4 border-t border-dairyRed/10 flex justify-between items-center">
                    <span className="text-lg font-bold text-dairyRed">
                      {item.price}
                    </span>

                    <button className="bg-dairyRed text-white px-4 py-2 rounded-lg text-xs font-bold hover:bg-dairyBlack transition-colors shadow-md">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>

              {/* Hover Glow */}
              <div
                className={`absolute -bottom-4 left-4 right-4 h-8 bg-dairyRed/20 rounded-full blur-xl transition-all duration-500 ${
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