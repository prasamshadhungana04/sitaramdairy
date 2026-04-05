// frontend/src/components/Home/ProductImageShowcase.jsx
import { motion } from 'framer-motion';
import { ZoomIn } from 'lucide-react';

const ProductImageShowcase = () => {
  const galleryImages = [
    { id: 1, image: "https://images.unsplash.com/photo-1596181938555-d3c52e46e8c7?w=600&q=80", alt: "Fresh Milk Pouring" },
    { id: 2, image: "https://images.unsplash.com/photo-1601314101416-3687edec84b3?w=600&q=80", alt: "Golden Ghee" },
    { id: 3, image: "https://images.unsplash.com/photo-1574221199321-419163f9ebba?w=600&q=80", alt: "Traditional Yogurt" },
    { id: 4, image: "https://images.unsplash.com/photo-1631379578027-114414f52e37?w=600&q=80", alt: "Fresh Paneer" },
    { id: 5, image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=600&q=80", alt: "Dairy Bottles" },
    { id: 6, image: "https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?w=600&q=80", alt: "Farm Aesthetic" }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-[#E2B254] text-sm uppercase tracking-[0.3em] font-bold mb-4">Our Farm Gallery</h2>
          <h3 className="text-4xl font-serif font-bold text-[#002147]">Visual Journey</h3>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {galleryImages.map((item) => (
            <motion.div
              key={item.id}
              variants={{
                hidden: { scale: 0.9, opacity: 0 },
                visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } }
              }}
              whileHover={{ y: -10 }}
              className="relative overflow-hidden rounded-2xl shadow-md cursor-pointer group bg-[#F9F6F0]"
              style={{ aspectRatio: '4 / 3' }}
            >
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Premium Hover Overlay */}
              <div className="absolute inset-0 bg-[#002147]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                <div className="bg-[#E2B254] p-4 rounded-full text-[#002147] transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <ZoomIn size={24} />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProductImageShowcase;