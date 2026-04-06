import { motion } from "framer-motion";
import { useState } from "react";

const OurCollection = () => {
  const [hoveredId, setHoveredId] = useState(null);

  const collections = [
    {
      id: 1,
      name: "FARM FRESH",
      title: "Pure Cow Milk",
      subtitle: "A2 Protein Rich",
      image:
        "https://images.pexels.com/photos/139172/pexels-photo-139172.jpeg?auto=compress&cs=tinysrgb&w=600",
      price: "Rs. 130/L",
      badge: "BESTSELLER",
    },
    {
      id: 2,
      name: "PREMIUM",
      title: "Bilona Ghee",
      subtitle: "Traditional Method",
      image:
        "https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=600",
      price: "Rs. 1200/500ml",
      badge: "PURE A2",
    },
    {
      id: 3,
      name: "PROBIOTIC",
      title: "Juju Dhau",
      subtitle: "King of Curds",
      image:
        "https://images.pexels.com/photos/4146459/pexels-photo-4146459.jpeg?auto=compress&cs=tinysrgb&w=600",
      price: "Rs. 150/500g",
      badge: "CREAMY",
    },
    {
      id: 4,
      name: "ORGANIC",
      title: "Paneer Cubes",
      subtitle: "Soft & Fresh",
      image:
        "https://images.pexels.com/photos/4614288/pexels-photo-4614288.jpeg?auto=compress&cs=tinysrgb&w=600",
      price: "Rs. 350/500g",
      badge: "PROTEIN RICH",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
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
                <div className="relative h-64 overflow-hidden bg-cheeseCream">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-dairyRed/80 to-transparent opacity-0 group-hover:opacity-100 transition" />

                  <span className="absolute top-4 right-4 bg-dairyRed text-white px-3 py-1 text-xs font-bold rounded">
                    {item.badge}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow text-center">
                  <p className="text-dairyRed text-xs font-bold uppercase mb-2 tracking-widest">
                    {item.name}
                  </p>

                  <h4 className="text-2xl font-serif font-bold text-dairyBlack mb-2">
                    {item.title}
                  </h4>

                  <p className="text-gray-500 text-sm mb-4">
                    {item.subtitle}
                  </p>

                  <div className="mt-auto pt-4 border-t border-dairyRed/10 flex justify-between items-center">
                    <span className="text-xl font-bold text-dairyRed">
                      {item.price}
                    </span>

                    <button className="bg-dairyRed text-white px-5 py-2 rounded-lg text-sm font-bold hover:bg-dairyBlack transition">
                      Shop Now
                    </button>
                  </div>
                </div>
              </div>

              {/* Hover Shadow */}
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