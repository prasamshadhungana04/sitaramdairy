// frontend/src/pages/ServicesPage.jsx
import { motion } from 'framer-motion';
import { useState } from 'react';

const ServicesPage = () => {
  const [hoveredService, setHoveredService] = useState(null);

  const services = [
    {
      id: 1,
      title: "Home Delivery",
      icon: "🚚",
      description: "Fresh dairy products delivered to your doorstep every morning",
      features: ["Free delivery above ₹500", "Daily morning delivery", "Real-time tracking"]
    },
    {
      id: 2,
      title: "Bulk Orders",
      icon: "📦",
      description: "Special pricing for bulk orders for events, restaurants, and businesses",
      features: ["Volume discounts", "Custom packaging", "Scheduled deliveries"]
    },
    {
      id: 3,
      title: "Dairy Subscription",
      icon: "📅",
      description: "Weekly or monthly subscription plans for regular customers",
      features: ["Save up to 15%", "Flexible plans", "Easy cancellation"]
    },
    {
      id: 4,
      title: "Farm Tours",
      icon: "🏞️",
      description: "Visit our organic farm and see how we produce pure dairy products",
      features: ["Educational tours", "Tasting sessions", "Family friendly"]
    },
    {
      id: 5,
      title: "Custom Orders",
      icon: "🎨",
      description: "Specialized dairy products made to your specifications",
      features: ["Custom flavors", "Special packaging", "Bulk customization"]
    },
    {
      id: 6,
      title: "24/7 Support",
      icon: "🎧",
      description: "Round-the-clock customer support for all your queries",
      features: ["Quick response", "Order tracking", "Easy returns"]
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

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <main>
      <div className="bg-red-600 text-white py-16 text-center">
        <h1 className="text-4xl font-fraunces font-bold">Our Services</h1>
        <p className="mt-2 text-red-100">Premium dairy services tailored for you</p>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-red-100 cursor-pointer transition-all duration-500 ease-out"
              style={{
                transform: hoveredService === service.id ? 'translateY(-12px) scale(1.03)' : 'translateY(0) scale(1)',
                boxShadow: hoveredService === service.id ? '0 25px 35px -12px rgba(220, 38, 38, 0.3)' : '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              <div className="p-6 text-center">
                <div 
                  className="text-6xl mb-4 transition-all duration-500"
                  style={{
                    transform: hoveredService === service.id ? 'scale(1.2) rotate(5deg)' : 'scale(1) rotate(0deg)',
                    transition: 'transform 0.3s ease-out'
                  }}
                >
                  {service.icon}
                </div>
                <h3 
                  className="text-2xl font-fraunces font-bold mb-3 transition-colors duration-300"
                  style={{ color: hoveredService === service.id ? '#DC2626' : '#991B1B' }}
                >
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <div className="border-t border-red-100 pt-4 mt-2">
                  <ul className="space-y-2 text-left">
                    {service.features.map((feature, idx) => (
                      <li 
                        key={idx} 
                        className="text-sm flex items-center gap-2 transition-all duration-300"
                        style={{ 
                          color: hoveredService === service.id ? '#4B5563' : '#6B7280',
                          transform: hoveredService === service.id ? 'translateX(5px)' : 'translateX(0)'
                        }}
                      >
                        <span className="text-red-500 transition-all duration-300" style={{ transform: hoveredService === service.id ? 'scale(1.2)' : 'scale(1)' }}>✓</span> 
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  );
};

export default ServicesPage;