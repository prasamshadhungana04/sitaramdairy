// frontend/src/components/Home/ProductImageShowcase.jsx
import { motion } from 'framer-motion';

const ProductImageShowcase = () => {
  const productImages = [
    {
      id: 1,
      image: "https://images.pexels.com/photos/139172/pexels-photo-139172.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Fresh Milk in Glass Bottle"
    },
    {
      id: 2,
      image: "https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Desi Ghee in Bowl"
    },
    {
      id: 3,
      image: "https://images.pexels.com/photos/4146459/pexels-photo-4146459.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Thick Curd in Clay Pot"
    },
    {
      id: 4,
      image: "https://images.pexels.com/photos/4614288/pexels-photo-4614288.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Fresh Paneer Cubes"
    },
    {
      id: 5,
      image: "https://images.pexels.com/photos/4082971/pexels-photo-4082971.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Buttermilk in Glass"
    },
    {
      id: 6,
      image: "https://images.pexels.com/photos/3944095/pexels-photo-3944095.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Fresh Butter Block"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {productImages.map((item) => (
            <motion.div
              key={item.id}
              variants={imageVariants}
              whileHover={{ 
                scale: 1.08,
                zIndex: 50,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="relative overflow-hidden rounded-2xl shadow-xl cursor-pointer bg-red-50"
              style={{ aspectRatio: '4 / 3' }}
            >
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/600x450?text=Dairy+Product';
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Make sure this export statement is present
export default ProductImageShowcase;