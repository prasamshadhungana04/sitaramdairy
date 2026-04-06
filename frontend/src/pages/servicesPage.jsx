// frontend/src/pages/ServicesPage.jsx
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Truck, PackageOpen, CalendarDays, Map, Sparkles, Headset, Check } from 'lucide-react';
import MilkDivider from '../components/Home/MilkDivider';

const ServicesPage = () => {
  const [hoveredService, setHoveredService] = useState(null);

  const services = [
    {
      id: 1,
      title: "White-Glove Delivery",
      icon: Truck,
      description: "Fresh, temperature-controlled dairy delivered to your Kathmandu Valley doorstep by 7 AM.",
      features: ["Free delivery above NPR 2000", "Cold-chain logistics", "Real-time SMS tracking"]
    },
    {
      id: 2,
      title: "Corporate & Event Bulk",
      icon: PackageOpen,
      description: "Premium pricing for hotels, restaurants, and grand Nepalese weddings.",
      features: ["Volume-tiered discounts", "Custom branding available", "Dedicated account manager"]
    },
    {
      id: 3,
      title: "Farm-to-Table Subscription",
      icon: CalendarDays,
      description: "Set and forget. Receive pure A2 milk and fresh paneer precisely when you need it.",
      features: ["Save up to 15% monthly", "Pause anytime", "Priority stock allocation"]
    },
    {
      id: 4,
      title: "Tokha Farm Excursions",
      icon: Map,
      description: "Visit our pristine organic pastures. Witness the bilona churning process firsthand.",
      features: ["Guided weekend tours", "Fresh tasting sessions", "Family & child friendly"]
    },
    {
      id: 5,
      title: "Bespoke Dairy Orders",
      icon: Sparkles,
      description: "Specialized products crafted to your exacting culinary specifications.",
      features: ["Custom Juju Dhau sizes", "Unsalted cooking butter", "Festival-ready packaging"]
    },
    {
      id: 6,
      title: "24/7 Concierge Support",
      icon: Headset,
      description: "Unwavering customer service to manage your subscriptions and immediate needs.",
      features: ["Instant WhatsApp support", "Live order modifications", "No-questions return policy"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <main className="bg-cheeseCream min-h-screen">
      
      {/* === PREMIUM HERO SECTION === */}
      <div className="relative bg-dairyBlack text-white pt-40 pb-32 text-center overflow-hidden">
        {/* Ambient Red Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] bg-dairyRed/10 rounded-full blur-[150px] pointer-events-none" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-dairyRed text-sm uppercase tracking-[0.4em] font-black mb-4"
          >
            How We Serve You
          </motion.h2>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-7xl font-serif font-bold mb-6 text-white red-text-shadow"
          >
            Premium <span className="text-dairyRed italic">Services</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-gray-400 font-medium tracking-wide max-w-2xl mx-auto"
          >
            Tailored dairy solutions for households and leading hospitality enterprises in Nepal.
          </motion.p>
        </div>
        
        {/* Milk Divider (Wave matches cheeseCream bg) */}
        <div className="absolute bottom-0 w-full z-20">
          <MilkDivider />
        </div>
      </div>
      
      {/* === SERVICES GRID === */}
      <div className="max-w-7xl mx-auto px-6 py-32">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {services.map((service) => {
            const IconComponent = service.icon;
            const isHovered = hoveredService === service.id;
            
            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
                className="bg-white rounded-[2.5rem] shadow-premium overflow-hidden border border-gray-100 cursor-pointer relative group transition-all duration-500"
                style={{
                  transform: isHovered ? 'translateY(-15px)' : 'translateY(0)',
                  boxShadow: isHovered ? '0 30px 60px -15px rgba(200, 16, 46, 0.15)' : '0 10px 30px -10px rgba(0, 0, 0, 0.05)'
                }}
              >
                {/* Active Red Top Border */}
                <div className={`absolute top-0 left-0 w-full h-2 bg-dairyRed transition-transform duration-700 origin-left ${isHovered ? 'scale-x-100' : 'scale-x-0'}`} />

                <div className="p-10">
                  {/* Icon Box */}
                  <div className={`w-20 h-20 rounded-[1.5rem] flex items-center justify-center mb-8 transition-all duration-500 shadow-inner ${
                    isHovered ? 'bg-dairyRed text-white rotate-6' : 'bg-cheeseCream text-dairyRed'
                  }`}>
                    <IconComponent size={36} strokeWidth={2} />
                  </div>
                  
                  <h3 className={`text-2xl font-serif font-bold transition-colors duration-300 mb-4 ${
                    isHovered ? 'text-dairyRed' : 'text-dairyBlack'
                  }`}>
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-500 mb-8 leading-relaxed font-medium">
                    {service.description}
                  </p>
                  
                  <div className="border-t border-gray-50 pt-8">
                    <ul className="space-y-4">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="text-sm font-bold flex items-center gap-4 text-gray-600">
                          <span className={`w-6 h-6 rounded-full flex items-center justify-center transition-all duration-500 ${
                            isHovered ? 'bg-dairyRed text-white shadow-redGlow' : 'bg-cheeseCream text-dairyRed'
                          }`}>
                            <Check size={14} strokeWidth={4} />
                          </span> 
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Subtle decorative background detail */}
                <div className={`absolute -bottom-8 -right-8 w-24 h-24 bg-dairyRed/5 rounded-full blur-2xl transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* CTA Section */}
      <div className="max-w-5xl mx-auto px-6 pb-32">
        <div className="bg-dairyBlack rounded-[3rem] p-12 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-dairyRed/5 pointer-events-none" />
          <h4 className="text-white font-serif font-bold text-3xl mb-4 relative z-10">Need a Custom Solution?</h4>
          <p className="text-gray-400 font-medium mb-10 relative z-10 max-w-xl mx-auto">
            Our dairy scientists and farm managers are available to create bespoke products for your specific enterprise needs.
          </p>
          <button className="bg-dairyRed text-white px-12 py-5 rounded-full font-black text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-dairyBlack transition-all shadow-redGlow relative z-10">
            Consult With Our Team
          </button>
        </div>
      </div>
    </main>
  );
};

export default ServicesPage;