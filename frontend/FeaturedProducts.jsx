// frontend/src/components/Home/FeaturedProducts.jsx
import { motion } from 'framer-motion';

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Farm Fresh Milk",
      category: "Milk",
      price: "₹60/L",
      oldPrice: "₹75/L",
      image: "/images/products/milk.jpg",
      badge: "Best Seller",
      shadowColor: "shadow-amber-200"
    },
    {
      id: 2,
      name: "Bilona Ghee",
      category: "Ghee",
      price: "₹450/500ml",
      oldPrice: "₹550/500ml",
      image: "/images/products/ghee.jpg",
      badge: "Pure A2",
      shadowColor: "shadow-amber-300"
    },
    {
      id: 3,
      name: "Thick Curd",
      category: "Curd",
      price: "₹45/500g",
      oldPrice: "₹60/500g",
      image: "/images/products/curd.jpg",
      badge: "Probiotic",
      shadowColor: "shadow-amber-200"
    },
    {
      id: 4,
      name: "Panner Cubes",
      category: "Panner",
      price: "₹200/500g",
      oldPrice: "₹250/500g",
      image: "/images/products/paneer.jpg",
      badge: "Fresh",
      shadowColor: "shadow-amber-300"
    },
    {
      id: 5,
      name: "Flavored Lassi",
      category: "Beverages",
      price: "₹35/200ml",
      oldPrice: "₹50/200ml",
      image: "/images/products/lassi.jpg",
      badge: "Mango",
      shadowColor: "shadow-amber-200"
    },
    {
      id: 6,
      name: "Desi Butter",
      category: "Butter",
      price: "₹120/200g",
      oldPrice: "₹150/200g",
      image: "/images/products/butter.jpg",
      badge: "Salted",
      shadowColor: "shadow-amber-300"
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
    <section className="py-20 bg-creamBg">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-dairyGold text-sm uppercase tracking-wider font-dmsans mb-3">
            Premium Dairy Selection
          </h2>
          <h3 className="text-4xl md:text-5xl font-fraunces font-bold text-dairyNavy">
            Our Farm-Fresh <span className="text-dairyGold">Collection</span>
          </h3>
          <div className="w-24 h-0.5 bg-dairyGold mx-auto mt-4" />
        </div>

        {/* Product Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className={`group bg-white rounded-2xl overflow-hidden shadow-xl ${product.shadowColor} hover:shadow-2xl transition-all duration-300`}
            >
              {/* Image Container with Shadow Overlay */}
              <div className="relative overflow-hidden bg-gradient-to-br from-amber-50 to-creamBg">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-72 object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                {/* Badge */}
                {product.badge && (
                  <span className="absolute top-4 right-4 bg-dairyGold text-dairyNavy px-3 py-1 rounded-full text-xs font-semibold font-dmsans z-20 shadow-md">
                    {product.badge}
                  </span>
                )}
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <p className="text-dairyGold text-sm font-dmsans uppercase tracking-wide">
                      {product.category}
                    </p>
                    <h4 className="text-xl font-fraunces font-bold text-dairyNavy mt-1">
                      {product.name}
                    </h4>
                  </div>
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-2 mt-3">
                  <span className="text-2xl font-bold text-dairyNavy font-dmsans">
                    {product.price}
                  </span>
                  <span className="text-gray-400 line-through text-sm">
                    {product.oldPrice}
                  </span>
                </div>

                {/* Action Button */}
                <button className="w-full mt-5 bg-dairyNavy text-white py-3 rounded-full font-dmsans font-semibold hover:bg-dairyGold hover:text-dairyNavy transition-all duration-300 transform hover:scale-105 shadow-md group-hover:shadow-lg">
                  Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProducts;