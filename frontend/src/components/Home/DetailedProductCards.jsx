// frontend/src/components/Home/DetailedProductCards.jsx
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { CheckCircle2, ChevronRight } from 'lucide-react';

const DetailedProductCards = () => {
  const [expandedId, setExpandedId] = useState(null);

  const products = [
    {
      id: 1,
      name: "A2 DESI GHEE",
      title: "Golden Bilona Ghee",
      shortDesc: "Crafted using the traditional 12-hour bilona method from curd made of A2 milk.",
      fullDesc: "Our Bilona Ghee is made by churning curd made from A2 milk of grass-fed Gir cows. The curd is hand-churned using the traditional bilona method to extract butter, which is then slow-cooked to produce aromatic, grainy-textured ghee. Rich in fat-soluble vitamins A, D, E, and K.",
      image: "https://images.unsplash.com/photo-1601314101416-3687edec84b3?w=800&q=80",
      benefits: ["Boosts immunity", "Improves digestion", "Rich in Omega-3"]
    },
    {
      id: 2,
      name: "PROBIOTIC YOGURT",
      title: "Traditional Juju Dhau",
      shortDesc: "A smoother, richer alternative to regular curd, set in traditional clay pots.",
      fullDesc: "Our Thick Curd is made using heritage lactic cultures that have been preserved for generations. The milk is gently pasteurized and inoculated with live probiotic strains, then set in controlled conditions to achieve the perfect consistency and tanginess.",
      image: "https://images.unsplash.com/photo-1574221199321-419163f9ebba?w=800&q=80",
      benefits: ["Probiotic-rich", "Improves gut health", "Authentic taste"]
    }
  ];

  return (
    <section className="py-24 bg-[#F9F6F0] relative overflow-hidden border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-[#E2B254] text-sm uppercase tracking-[0.3em] font-bold mb-4">
            Crafted With Passion
          </h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-[#002147] mb-6">
            Discover Our <span className="text-[#E2B254]">Story</span>
          </h3>
          <div className="w-24 h-1 bg-[#E2B254] mx-auto rounded-full" />
        </motion.div>

        <div className="space-y-24">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-16 items-center group`}
            >
              {/* Image Side */}
              <div className="w-full lg:w-1/2 relative">
                <div className="absolute inset-0 bg-[#E2B254] rounded-3xl transform rotate-3 scale-105 opacity-20 transition-transform duration-500 group-hover:rotate-6"></div>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white border border-gray-100">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#002147]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-1/2 space-y-6">
                <div>
                  <p className="text-[#E2B254] text-sm tracking-[0.2em] font-bold mb-2 uppercase">
                    {product.name}
                  </p>
                  <h4 className="text-3xl md:text-4xl font-serif font-bold text-[#002147]">
                    {product.title}
                  </h4>
                </div>

                <p className="text-gray-600 text-lg leading-relaxed">
                  {product.shortDesc}
                </p>

                <AnimatePresence>
                  {expandedId === product.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 pb-2 border-t border-gray-200">
                        <p className="text-gray-600 leading-relaxed mb-6">
                          {product.fullDesc}
                        </p>
                        <h5 className="font-serif font-bold text-[#002147] mb-4 text-lg">Key Benefits:</h5>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {product.benefits.map((benefit, idx) => (
                            <li key={idx} className="text-gray-700 font-medium flex items-center gap-2">
                              <CheckCircle2 className="text-[#E2B254]" size={18} /> {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="flex items-center gap-6 pt-6">
                  <button
                    onClick={() => setExpandedId(expandedId === product.id ? null : product.id)}
                    className="text-[#002147] font-bold hover:text-[#E2B254] transition-colors duration-300 flex items-center gap-2"
                  >
                    {expandedId === product.id ? 'Read Less' : 'Read More'}
                    <ChevronRight size={18} className={`transform transition-transform ${expandedId === product.id ? 'rotate-90' : ''}`} />
                  </button>
                  
                  <button className="bg-[#002147] text-white px-8 py-3 rounded-full font-bold hover:bg-[#E2B254] hover:text-[#002147] transition-all duration-300 shadow-lg">
                    Shop Collection
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DetailedProductCards;