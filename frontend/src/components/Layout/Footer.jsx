import React from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { motion } from "framer-motion";

// --- Constants ---
const MARQUEE_ITEMS = [
  "FRESH A2 MILK", "PURE DESI GHEE", "PROBIOTIC CURD", 
  "FARM FRESH PANEER", "CREAMY BUTTER", "FLAVORED LASSI"
];

const EXPLORE_LINKS = ["Home", "Products", "Our Story", "Services", "Notices"];

const SOCIAL_LINKS = [
  { icon: (s) => <Facebook s={s} />, label: "Facebook", href: "#" },
  { icon: (s) => <Instagram s={s} />, label: "Instagram", href: "#" },
  { icon: (s) => <Youtube s={s} />, label: "YouTube", href: "#" }
];

// --- Custom Icons ---
const Facebook = ({ s }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);
const Instagram = ({ s }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
);
const Youtube = ({ s }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 2-2 103.38 103.38 0 0 1 15 0 2 2 0 0 1 2 2 24.12 24.12 0 0 1 0 10 2 2 0 0 1-2 2 103.38 103.38 0 0 1-15 0 2 2 0 0 1-2-2Z"/><path d="m10 15 5-3-5-3z"/></svg>
);

const Footer = () => {
  return (
    <footer className="w-full flex flex-col bg-white overflow-hidden">
      
      {/* 1. Marquee Section */}
      <div className="bg-white text-red-700 py-4 border-t border-b border-red-100 overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          className="flex w-max whitespace-nowrap text-sm md:text-base font-black tracking-widest uppercase"
        >
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex gap-12 px-6">
              {MARQUEE_ITEMS.map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <span className="text-red-300">✦</span> {item}
                </span>
              ))}
            </div>
          ))}
        </motion.div>
      </div>

      {/* 2. Main Body Section */}
      <div className="relative bg-red-700 text-white">
        
        {/* Background Layer: Images & Decorations */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Subtle Milk Splash Overlay */}
          <div 
            className="absolute left-0 top-0 w-1/2 h-full opacity-10 bg-contain bg-no-repeat bg-center"
            style={{ backgroundImage: "url('https://www.pngall.com/wp-content/uploads/15/Milk-PNG-File-Download-Free.png')" }}
          />
          
          {/* Animated Bakery/Dairy Product - Bottom Left */}
          <motion.div 
            animate={{ y: [0, -12, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-10 left-10 w-64 h-64 opacity-20 bg-contain bg-no-repeat"
            style={{ backgroundImage: "url('https://www.pngall.com/wp-content/uploads/2016/05/Bakery-Free-PNG-Image.png')" }}
          />

          {/* Liquid Edge Divider (Only visible on desktop) */}
          <div className="hidden lg:block absolute top-0 left-[43%] w-[300px] h-full z-10 translate-x-[-50%]">
             <svg viewBox="0 0 200 800" preserveAspectRatio="none" className="h-full w-full fill-white/10 opacity-30">
                <path d="M0,0 L60,0 C140,80 20,160 150,240 C190,280 40,360 170,440 C220,520 30,600 140,680 C180,740 60,800 100,800 L0,800 Z" />
             </svg>
          </div>
        </div>

        {/* Content Container */}
        <div className="relative z-20 max-w-7xl mx-auto px-6 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
            
            {/* Brand Column (Left) */}
            <div className="lg:col-span-5 space-y-8">
              <div className="flex items-center gap-5">
                <div className="w-20 h-20 bg-white text-red-700 rounded-full flex items-center justify-center font-black text-3xl shadow-2xl border-4 border-red-600/20">
                  SR
                </div>
                <div>
                  <h3 className="text-4xl font-serif font-black tracking-tight drop-shadow-md">
                    Sita Ram <span className="text-red-200">Dairy</span>
                  </h3>
                  <p className="text-red-100/60 text-xs font-bold uppercase tracking-widest mt-1">Est. 1985 • Tokha Heritage</p>
                </div>
              </div>
              
              <p className="text-lg text-red-50 font-medium leading-relaxed max-w-md">
                Generations of pure goodness. We craft premium, organic dairy and artisanal bakery products sourced directly from Nepal's lush pastures.
              </p>

              {/* Specific Dairy Product Image in this section */}
              <motion.img 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                src="https://www.pngall.com/wp-content/uploads/15/Milk-Bottle-PNG-Cutout.png" 
                className="w-32 h-auto drop-shadow-2xl opacity-40 hover:opacity-100 transition-opacity"
                alt="Dairy Product"
              />
            </div>

            {/* Links Grid (Right) */}
            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-12">
              
              {/* Column 1: Explore */}
              <div className="space-y-6">
                <h4 className="text-xl font-bold tracking-tighter border-b border-white/20 pb-2 inline-block">Explore</h4>
                <ul className="space-y-4">
                  {EXPLORE_LINKS.map(link => (
                    <li key={link}>
                      <a href="#" className="text-red-100 hover:text-white transition-all flex items-center gap-2 group text-base font-semibold">
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity">▸</span>
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 2: Contact */}
              <div className="space-y-6">
                <h4 className="text-xl font-bold tracking-tighter border-b border-white/20 pb-2 inline-block">Support</h4>
                <ul className="space-y-5 text-red-50 text-base font-medium">
                  <li className="flex gap-4"><MapPin className="shrink-0 w-5 h-5 text-red-300" /> Tokha, KTM</li>
                  <li className="flex gap-4"><Phone className="shrink-0 w-5 h-5 text-red-300" /> 01-4350000</li>
                  <li className="flex gap-4"><Mail className="shrink-0 w-5 h-5 text-red-300" /> pure@sitaram.com</li>
                  <li className="flex gap-4"><Clock className="shrink-0 w-5 h-5 text-red-300" /> 6 AM - 8 PM</li>
                </ul>
              </div>

              {/* Column 3: Social & Meta */}
              <div className="space-y-6">
                <h4 className="text-xl font-bold tracking-tighter border-b border-white/20 pb-2 inline-block">Follow Us</h4>
                <div className="flex gap-4">
                  {SOCIAL_LINKS.map(({ icon: Icon, label }) => (
                    <a key={label} href="#" className="w-12 h-12 rounded-full bg-white text-red-700 flex items-center justify-center hover:bg-red-100 transition-colors shadow-lg group">
                      <div className="group-hover:scale-110 transition-transform">{Icon(20)}</div>
                    </a>
                  ))}
                </div>
                <div className="p-4 bg-red-800/40 rounded-2xl border border-white/10">
                   <p className="text-sm text-red-100 leading-snug font-semibold">
                     🚚 Free Delivery<br/>
                     <span className="text-[10px] uppercase font-black tracking-tighter text-red-300">On orders above ₹500</span>
                   </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* 3. Bottom Bar */}
      <div className="bg-white py-6 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] font-black uppercase tracking-[0.2em] text-gray-400">
          <p>© 2026 Sita Ram Dairy Heritage. All Rights Reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-red-600 transition">Privacy</a>
            <a href="#" className="hover:text-red-600 transition">Terms</a>
            <a href="#" className="hover:text-red-600 transition">Returns</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;