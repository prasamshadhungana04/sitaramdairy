// frontend/src/components/Home/HeroProductGrid.jsx
import { motion } from 'framer-motion';

const HeroProductGrid = () => {
  const products = [
    {
      id: 1,
      name: "PURE COW MILK",
      title: "A2 Gir Cow Milk",
      description: "Farm-fresh, unadulterated milk rich in A2 protein. Perfect for daily nutrition.",
      image: "https://images.pexels.com/photos/139172/pexels-photo-139172.jpeg?auto=compress&cs=tinysrgb&w=800",
      badge: "BESTSELLER",
      readMoreLink: "/products/milk"
    },
    {
      id: 2,
      name: "BILONA GHEE",
      title: "Desi Cow Ghee",
      description: "Traditional bilona method ghee made from A2 milk. Aromatic and rich in nutrients.",
      image: "https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=800",
      badge: "PURE A2",
      readMoreLink: "/products/ghee"
    },
    {
      id: 3,
      name: "THICK CURD",
      title: "Probiotic Dahi",
      description: "Creamy, thick curd made with live cultures. Great for gut health.",
      image: "https://images.pexels.com/photos/4146459/pexels-photo-4146459.jpeg?auto=compress&cs=tinysrgb&w=800",
      badge: "PROBIOTIC",
      readMoreLink: "/products/curd"
    },
    {
      id: 4,
      name: "PANEER CUBES",
      title: "Fresh Paneer",
      description: "Soft, non-crumbling paneer made daily from single-source milk.",
      image: "https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=800",
      badge: "PROTEIN RICH",
      readMoreLink: "/products/paneer"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
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
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-red-600 text-sm uppercase tracking-[0.3em] font-dmsans mb-4">
            Premium Dairy
          </h2>
          <h3 className="text-4xl md:text-5xl font-fraunces font-bold text-red-700 mb-6">
            Our Product <span className="text-red-500">Collection</span>
          </h3>
          <div className="w-24 h-0.5 bg-red-500 mx-auto" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-red-100"
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-2/5 relative overflow-hidden bg-red-50">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-64 md:h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold font-dmsans shadow-lg">
                    {product.badge}
                  </span>
                </div>
                <div className="md:w-3/5 p-6 md:p-8 flex flex-col justify-center">
                  <p className="text-red-600 text-xs tracking-[0.2em] font-dmsans font-semibold mb-2">
                    {product.name}
                  </p>
                  <h4 className="text-2xl md:text-3xl font-fraunces font-bold text-red-800 mb-3">
                    {product.title}
                  </h4>
                  <p className="text-gray-600 font-dmsans leading-relaxed mb-6">
                    {product.description}
                  </p>
                  <button className="text-red-600 font-dmsans font-semibold hover:text-red-800 transition-colors duration-300 inline-flex items-center gap-2 group w-fit">
                    Read More 
                    <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroProductGrid;