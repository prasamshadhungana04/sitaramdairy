// frontend/src/components/Home/FeaturedCarousel.jsx
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import ProductCard from '../Products/ProductCard';

export default function FeaturedCarousel({ products }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className="py-12">
      <div className="text-center mb-12">
        <span className="text-accentYellow font-bold tracking-widest uppercase text-xs mb-2 block">
          Directly From Nature
        </span>
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-textMain">
          Farm Fresh Arrivals
        </h2>
      </div>

      <div ref={ref} className="overflow-x-auto pb-12 pt-4 snap-x snap-mandatory hide-scrollbar">
        <motion.div 
          className="flex gap-8 w-max px-4"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, staggerChildren: 0.15 }}
        >
          {products?.map(item => (
            <div key={item.id} className="w-[300px] snap-center shrink-0">
              <ProductCard product={item} />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}