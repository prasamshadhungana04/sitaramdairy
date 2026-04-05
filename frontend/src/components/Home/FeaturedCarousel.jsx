// frontend/src/components/Home/FeaturedCarousel.jsx
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import ProductCard from '../Products/ProductCard';

export default function FeaturedCarousel({ products }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar">
      <motion.div 
        className="flex gap-6 w-max"
        initial={{ opacity: 0, x: 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, staggerChildren: 0.1 }}
      >
        {products?.map(item => (
          <div key={item.id} className="w-64 snap-center shrink-0">
            <ProductCard product={item} />
          </div>
        ))}
      </motion.div>
    </div>
  );
}