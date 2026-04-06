// frontend/src/components/Layout/Footer.jsx
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <>
      {/* === FLOATING MARQUEE STRIP ===
          Dark shade of white (cheeseCream) background.
          Red text with the custom red drop-shadow class. 
      */}
      <div className="bg-cheeseCream border-y-2 border-dairyRed/20 py-4 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-dairyRed font-bold tracking-[0.2em] uppercase text-sm red-text-shadow">
          <span>✧ Probiotic Juju Dhau</span>
          <span className="hidden md:inline">✧ Farm Fresh Paneer</span>
          <span className="hidden lg:inline">✧ Artisanal Sweet Lassi</span>
          <span>✧ Pure Desi Butter</span>
        </div>
      </div>

      {/* === MAIN FOOTER SECTION === */}
      <footer className="bg-cheeseCream text-dairyBlack pt-20 pb-10 border-t-4 border-dairyRed relative overflow-hidden">
        
        {/* Subtle decorative background glow */}
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-dairyRed/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            
            {/* BRAND COLUMN */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-dairyRed rounded-full flex items-center justify-center shadow-redGlow">
                  <span className="text-white font-serif font-bold text-xl">SR</span>
                </div>
                {/* Title is Bold Red */}
                <h3 className="text-3xl font-serif font-bold text-dairyRed">Sita Ram</h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-sm font-medium">
                Generations of pure goodness since 1985. Premium, organic dairy products sourced from the lush pastures of Tokha, Nepal.
              </p>
            </div>

            {/* EXPLORE COLUMN */}
            <div>
              {/* Header is Bold Red */}
              <h4 className="text-xl font-serif font-bold mb-6 text-dairyRed">Explore</h4>
              <ul className="space-y-3 font-medium text-gray-700 text-sm">
                <li><a href="/products" className="hover:text-dairyRed transition-colors flex items-center gap-2"><span className="text-dairyRed text-xs">▸</span> Premium Catalog</a></li>
                <li><a href="/about" className="hover:text-dairyRed transition-colors flex items-center gap-2"><span className="text-dairyRed text-xs">▸</span> Our Story</a></li>
                <li><a href="/services" className="hover:text-dairyRed transition-colors flex items-center gap-2"><span className="text-dairyRed text-xs">▸</span> Farm Services</a></li>
                <li><a href="/notices" className="hover:text-dairyRed transition-colors flex items-center gap-2"><span className="text-dairyRed text-xs">▸</span> Notice Board</a></li>
              </ul>
            </div>

            {/* CONTACT COLUMN */}
            <div>
              {/* Header is Bold Red */}
              <h4 className="text-xl font-serif font-bold mb-6 text-dairyRed">Contact</h4>
              <ul className="space-y-4 font-medium text-gray-700 text-sm">
                <li className="flex items-start gap-3"><MapPin size={18} className="text-dairyRed shrink-0" /> Tokha, Kathmandu, Nepal</li>
                <li className="flex items-center gap-3"><Phone size={18} className="text-dairyRed shrink-0" /> +977 1 4350000</li>
                <li className="flex items-center gap-3"><Mail size={18} className="text-dairyRed shrink-0" /> pure@sitaramdairy.com</li>
                <li className="flex items-start gap-3"><Clock size={18} className="text-dairyRed shrink-0" /> Mon-Sun: 6:00 AM - 8:00 PM</li>
              </ul>
            </div>

            {/* FOLLOW US COLUMN */}
            <div>
              {/* Header is Bold Red */}
              <h4 className="text-xl font-serif font-bold mb-6 text-dairyRed">Follow Us</h4>
              {/* Visible Social Icons: Dark background, White icon, Red on hover */}
              <div className="flex gap-4">
                <a href="#" aria-label="Facebook" className="w-10 h-10 bg-dairyBlack text-white rounded-full flex items-center justify-center hover:bg-dairyRed hover:-translate-y-1 transition-all duration-300 shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </a>
                <a href="#" aria-label="Instagram" className="w-10 h-10 bg-dairyBlack text-white rounded-full flex items-center justify-center hover:bg-dairyRed hover:-translate-y-1 transition-all duration-300 shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
                <a href="#" aria-label="YouTube" className="w-10 h-10 bg-dairyBlack text-white rounded-full flex items-center justify-center hover:bg-dairyRed hover:-translate-y-1 transition-all duration-300 shadow-md">
                   <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2C5.12 19.5 12 19.5 12 19.5s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-dairyRed/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold text-gray-500">
            <p>&copy; {new Date().getFullYear()} Sita Ram Dairy. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-dairyRed transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-dairyRed transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;