// frontend/src/components/Layout/Footer.jsx
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { motion } from "framer-motion";

// Custom Brand Icons (since Lucide removed them in recent versions)
const FacebookIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);

const InstagramIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
);

const YoutubeIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 2-2 103.38 103.38 0 0 1 15 0 2 2 0 0 1 2 2 24.12 24.12 0 0 1 0 10 2 2 0 0 1-2 2 103.38 103.38 0 0 1-15 0 2 2 0 0 1-2-2Z"/><path d="m10 15 5-3-5-3z"/></svg>
);

const Footer = () => {
  return (
    <div className="font-sans flex flex-col bg-[#FAFAFA]">
      {/* === TOP MARQUEE (CREAM STRIP) === */}
      <div className="bg-[#FAFAFA] text-[#9e111a] py-6 overflow-hidden border-b border-gray-200">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          className="flex w-max whitespace-nowrap text-lg md:text-xl tracking-[0.3em] font-black uppercase"
        >
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex gap-16 px-8">
              <span>✧ PROBIOTIC JUJU DHAU</span>
              <span>✧ FARM FRESH PANEER</span>
              <span>✧ ARTISANAL SWEET LASSI</span>
              <span>✧ PURE DESI BUTTER</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* === MAIN FOOTER SECTION === */}
      <footer className="relative w-full overflow-hidden min-h-[500px] bg-[#9e111a]">
        
        {/* MILK SPLASH BACKGROUND */}
        <div className="absolute inset-0 pointer-events-none flex">
          <div className="relative w-full md:w-[55%] h-full bg-[#FAFAFA]">
            {/* SVG Milk Splash Edge */}
            <div className="hidden md:block absolute top-0 right-0 translate-x-[99%] w-[200px] h-full z-0">
              <svg
                viewBox="0 0 200 800"
                preserveAspectRatio="none"
                className="w-full h-full text-[#FAFAFA] fill-current drop-shadow-[15px_0_15px_rgba(0,0,0,0.1)]"
              >
                <path d="M0,0 L60,0 C140,80 20,160 150,240 C190,280 40,360 170,440 C220,520 30,600 140,680 C180,740 60,800 100,800 L0,800 Z" />
              </svg>
            </div>
          </div>
          <div className="hidden md:block w-[45%] h-full bg-[#9e111a]"></div>
        </div>

        {/* CONTENT OVERLAY */}
        <div className="relative z-10 max-w-[90rem] mx-auto px-8 py-24 flex flex-col md:flex-row w-full gap-20">
          
          {/* LEFT SIDE (CREAMY WHITE) */}
          <div className="w-full md:w-[55%] grid grid-cols-1 md:grid-cols-2 gap-16 pr-0 md:pr-12">
            
            {/* BRAND */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="flex items-center gap-5">
                <div className="w-20 h-20 bg-[#111] text-white rounded-full flex items-center justify-center font-black text-3xl shadow-xl">
                  SR
                </div>
                <h3 className="text-5xl font-serif font-black text-gray-900 tracking-tight">
                  Sita Ram
                </h3>
              </div>
              <p className="text-gray-800 text-xl leading-relaxed font-bold opacity-90">
                Generations of pure goodness since 1985. Premium, organic dairy
                products sourced from the lush pastures of Tokha, Nepal.
              </p>
            </motion.div>

            {/* EXPLORE */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h4 className="text-3xl font-serif font-black mb-10 text-gray-900">Explore</h4>
              <ul className="space-y-5 text-gray-800 text-xl font-black uppercase tracking-widest">
                {["Catalog", "Our Story", "Services", "Notices"].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-[#9e111a] transition flex items-center gap-4 group">
                      <span className="text-[#9e111a] text-2xl group-hover:translate-x-2 transition-transform">▸</span>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* RIGHT SIDE (HERITAGE RED) */}
          <div className="w-full md:w-[45%] grid grid-cols-1 md:grid-cols-2 gap-16 text-white pl-0 md:pl-12">
            
            {/* CONTACT */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h4 className="text-3xl font-serif font-black mb-10">Contact</h4>
              <ul className="space-y-6 text-gray-100 text-lg font-bold">
                <li className="flex items-center gap-5"><MapPin size={24} /> Tokha, Kathmandu</li>
                <li className="flex items-center gap-5"><Phone size={24} /> +977 1 4350000</li>
                <li className="flex items-center gap-5"><Mail size={24} /> pure@sitaram.com</li>
                <li className="flex items-center gap-5"><Clock size={24} /> 6 AM - 8 PM</li>
              </ul>
            </motion.div>

            {/* SOCIAL */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h4 className="text-3xl font-serif font-black mb-10">Follow Us</h4>
              <div className="flex gap-6">
                {[FacebookIcon, InstagramIcon, YoutubeIcon].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-[#9e111a] hover:bg-[#111] hover:text-white hover:-translate-y-2 transition-all duration-500 shadow-2xl"
                  >
                    <Icon size={28} />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </footer>

      {/* BOTTOM COPYRIGHT BAR */}
      <div className="bg-[#FAFAFA] border-t-4 border-[#9e111a]/10">
        <div className="max-w-[90rem] mx-auto px-8 py-10 flex flex-col md:flex-row justify-between items-center text-sm font-black uppercase tracking-[0.2em] text-gray-400 gap-6">
          <p>© 2026 Sita Ram Dairy. All rights reserved.</p>
          <div className="flex gap-12">
            <a href="#" className="hover:text-[#9e111a] transition">Privacy Policy</a>
            <a href="#" className="hover:text-[#9e111a] transition">Terms of Service</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;