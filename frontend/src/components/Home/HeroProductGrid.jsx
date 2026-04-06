// frontend/src/components/Home/HeroProductGrid.jsx
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const HeroProductGrid = () => {
  const products = [
    {
      id: 1,
      name: "FARM FRESH",
      title: "A2 Gir Cow Milk",
      description: "Sourced directly from our lush Tokha pastures. Unadulterated milk rich in A2 protein, delivered within hours of milking.",
      image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=800&q=80",
      badge: "BESTSELLER",
      readMoreLink: "/products/milk"
    },
    {
      id: 2,
      name: "TRADITION",
      title: "Golden Desi Ghee",
      description: "Crafted using the ancient bilona method. Aromatic, nutrient-dense, and slow-churned to perfection for your family.",
      image: "https://images.unsplash.com/photo-1601314101416-3687edec84b3?w=800&q=80",
      badge: "PURE A2",
      readMoreLink: "/products/ghee"
    },
    {
      id: 3,
      name: "CULTURE",
      title: "Probiotic Juju Dhau",
      description: "Creamy, thick curd set in traditional earthen pots. A naturally sweet, probiotic powerhouse for superior gut health.",
      image: "https://images.unsplash.com/photo-1574221199321-419163f9ebba?w=800&q=80",
      badge: "PROBIOTIC",
      readMoreLink: "/products/curd"
    },
    {
      id: 4,
      name: "ARTISANAL",
      title: "Soft Paneer Cubes",
      description: "Non-crumbling, ultra-soft paneer made daily from single-source milk. Pressed naturally without any artificial binders.",
      image: "https://images.unsplash.com/photo-1631379578027-114414f52e37?w=800&q=80",
      badge: "PROTEIN RICH",
      readMoreLink: "/products/paneer"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    // Section Background: Changed to cheeseCream
    <section className="py-24 bg-cheeseCream border-b border-dairyRed/10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {/* Subtitle is Red */}
          <h2 className="text-dairyRed text-sm uppercase tracking-[0.3em] font-bold mb-4">
            Premium Selection
          </h2>
          {/* Title is Black with Red accent */}
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-dairyBlack mb-6">
            Our Signature <span className="text-dairyRed">Collection</span>
          </h3>
          {/* Underline is Red */}
          <div className="w-24 h-1 bg-dairyRed mx-auto rounded-full" />
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
              // Card uses pure white to contrast against the cheeseCream background
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-premium transition-all duration-300 border border-dairyRed/5"
            >
              <div className="flex flex-col md:flex-row h-full">
                {/* Image Wrapper Background: cheeseCream */}
                <div className="md:w-2/5 relative overflow-hidden bg-cheeseCream">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-64 md:h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Subtle Red Overlay on Image */}
                  <div className="absolute inset-0 bg-dairyRed/10 group-hover:bg-transparent transition-colors duration-500" />
                  
                  {/* Badge: Red Background, White Text */}
                  <span className="absolute top-4 left-4 bg-dairyRed text-white px-3 py-1 rounded shadow-md text-xs font-bold uppercase tracking-wider z-10">
                    {product.badge}
                  </span>
                </div>
                
                <div className="md:w-3/5 p-6 md:p-8 flex flex-col justify-center bg-white relative">
                  {/* Subtle Background Accent: Red */}
                  <div className="absolute bottom-0 right-0 w-24 h-24 bg-dairyRed/5 rounded-tl-full pointer-events-none transition-transform duration-500 group-hover:scale-150" />
                  
                  {/* Category Subtitle: Red */}
                  <p className="text-dairyRed text-xs tracking-[0.2em] font-bold mb-2 uppercase">
                    {product.name}
                  </p>
                  {/* Product Title: Black */}
                  <h4 className="text-2xl md:text-3xl font-serif font-bold text-dairyBlack mb-3">
                    {product.title}
                  </h4>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6 relative z-10">
                    {product.description}
                  </p>
                  
                  {/* Action Link: Red, hovers to Black */}
                  <button className="text-dairyRed font-bold hover:text-dairyBlack transition-colors duration-300 inline-flex items-center gap-2 group/btn w-fit mt-auto relative z-10">
                    Discover More 
                    <ArrowRight size={18} className="transform group-hover/btn:translate-x-1 transition-transform duration-300" />
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