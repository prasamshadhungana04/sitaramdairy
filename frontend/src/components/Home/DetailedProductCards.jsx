// frontend/src/components/Home/DetailedProductCards.jsx - Updated with images
import { motion } from 'framer-motion';
import { useState } from 'react';

const DetailedProductCards = () => {
  const [expandedId, setExpandedId] = useState(null);

  const products = [
    {
      id: 1,
      name: "A2 DESI GHEE",
      title: "Bilona Ghee",
      shortDesc: "Crafted using the traditional 12-hour bilona method from curd made of A2 milk.",
      fullDesc: "Our Bilona Ghee is made by churning curd made from A2 milk of grass-fed Gir cows. The curd is hand-churned using the traditional bilona method to extract butter, which is then slow-cooked to produce aromatic, grainy-textured ghee. Rich in fat-soluble vitamins A, D, E, and K, this ghee is known for its medicinal properties in Ayurveda.",
      image: "https://cdn.pixabay.com/photo/2019/07/17/18/21/ghee-4345136_640.jpg",
      benefits: ["Boosts immunity", "Improves digestion", "Rich in Omega-3"],
      readMoreLink: "/products/ghee"
    },
    {
      id: 2,
      name: "PROBIOTIC CURD",
      title: "Thick Dahi",
      shortDesc: "A smoother alternative to regular curd with live probiotic cultures for gut health.",
      fullDesc: "Our Thick Curd is made using heritage lactic cultures that have been preserved for generations. The milk is gently pasteurized and inoculated with live probiotic strains, then set in controlled conditions to achieve the perfect consistency and tanginess.",
      image: "https://cdn.pixabay.com/photo/2014/11/05/15/57/yogurt-518478_640.jpg",
      benefits: ["Probiotic-rich", "Improves gut health", "Creamy texture"],
      readMoreLink: "/products/curd"
    },
    {
      id: 3,
      name: "FRESH PANEER",
      title: "Soft Paneer Cubes",
      shortDesc: "Non-crumbling, soft paneer made daily from single-source A2 milk.",
      fullDesc: "Our Fresh Paneer is made using a unique double-boiling process that ensures a soft, non-crumbling texture. We source milk from our own farm, so we control quality from cow to cube. The milk is curdled using vegetarian rennet and the whey is drained slowly to retain moisture.",
      image: "https://cdn.pixabay.com/photo/2021/02/08/16/28/paneer-5995806_640.jpg",
      benefits: ["High protein", "No preservatives", "Soft texture"],
      readMoreLink: "/products/paneer"
    },
    {
      id: 4,
      name: "FLAVORED LASSI",
      title: "Mango & Sweet Lassi",
      shortDesc: "Traditional Punjabi lassi blended with real mango pulp or rose essence.",
      fullDesc: "Our Flavored Lassi is a tribute to the classic Punjabi beverage. We start with our thick, probiotic-rich curd and churn it with pure cane sugar until smooth and frothy. For the mango variant, we add Alphonso mango pulp (in season) or high-quality organic mango puree.",
      image: "https://cdn.pixabay.com/photo/2018/06/23/10/15/lassi-3493168_640.jpg",
      benefits: ["Refreshing", "Probiotic", "Natural flavors"],
      readMoreLink: "/products/lassi"
    }
  ];

  // Rest of the component remains the same...
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-24 bg-creamBg relative overflow-hidden">
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-40 right-0 w-96 h-96 bg-dairyGold rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-dairyGold text-sm uppercase tracking-[0.3em] font-dmsans mb-4">
            Crafted With Passion
          </h2>
          <h3 className="text-4xl md:text-5xl font-fraunces font-bold text-dairyNavy mb-6">
            Discover Our <span className="text-dairyGold">Story</span>
          </h3>
          <div className="w-24 h-0.5 bg-dairyGold mx-auto" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-20"
        >
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              variants={cardVariants}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-8 lg:gap-12 items-center group`}
            >
              <div className="lg:w-1/2 relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-500 group-hover:shadow-dairy-gold">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-96 object-cover transform group-hover:scale-105 transition-transform duration-700"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/600x400?text=Dairy+Product';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dairyNavy/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>

              <div className="lg:w-1/2 space-y-4">
                <div>
                  <p className="text-dairyGold text-sm tracking-[0.2em] font-dmsans font-semibold mb-2">
                    {product.name}
                  </p>
                  <h4 className="text-3xl md:text-4xl font-fraunces font-bold text-dairyNavy mb-4">
                    {product.title}
                  </h4>
                </div>

                <p className="text-gray-600 font-dmsans leading-relaxed">
                  {product.shortDesc}
                </p>

                <div className="overflow-hidden transition-all duration-500">
                  <motion.div
                    initial={false}
                    animate={{ height: expandedId === product.id ? 'auto' : 0 }}
                    transition={{ duration: 0.4 }}
                    className="space-y-4"
                  >
                    {expandedId === product.id && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        <p className="text-gray-600 font-dmsans leading-relaxed">
                          {product.fullDesc}
                        </p>
                        <div className="mt-4">
                          <h5 className="font-fraunces font-semibold text-dairyNavy mb-2">Key Benefits:</h5>
                          <ul className="space-y-1">
                            {product.benefits.map((benefit, idx) => (
                              <li key={idx} className="text-gray-600 font-dmsans text-sm flex items-center gap-2">
                                <span className="text-dairyGold">✓</span> {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                </div>

                <div className="flex items-center gap-6 pt-4">
                  <button
                    onClick={() => setExpandedId(expandedId === product.id ? null : product.id)}
                    className="text-dairyGold font-dmsans font-semibold hover:text-dairyNavy transition-colors duration-300 inline-flex items-center gap-2 group"
                  >
                    {expandedId === product.id ? 'Read Less' : 'Read More'}
                    <span className={`transform transition-transform duration-300 ${expandedId === product.id ? 'rotate-90' : 'group-hover:translate-x-1'}`}>
                      →
                    </span>
                  </button>
                  
                  <button className="bg-dairyNavy text-white px-6 py-2 rounded-full font-dmsans font-semibold hover:bg-dairyGold hover:text-dairyNavy transition-all duration-300 transform hover:scale-105">
                    Shop Now
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

export default DetailedProductCards;