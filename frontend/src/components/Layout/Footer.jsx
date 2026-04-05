// frontend/src/components/Layout/Footer.jsx
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-red-900 text-white pt-16 pb-8" id="footer">
      <div className="max-w-7xl mx-auto px-6">
        {/* About Us Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-fraunces font-bold mb-4">About Sita Ram Dairy</h3>
            <div className="w-12 h-0.5 bg-red-400 mb-4" />
            <p className="text-gray-300 leading-relaxed">
              Established in 1985, Sita Ram Dairy has been providing pure, organic dairy products 
              to families across Nepal. We believe in traditional farming methods and animal welfare.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-fraunces font-semibold mb-4">Our Mission</h4>
            <div className="w-12 h-0.5 bg-red-400 mb-4" />
            <p className="text-gray-300 leading-relaxed">
              To deliver farm-fresh, chemical-free dairy products while supporting local farmers 
              and maintaining sustainable practices.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-fraunces font-semibold mb-4">Contact Info</h4>
            <div className="w-12 h-0.5 bg-red-400 mb-4" />
            <ul className="space-y-2 text-gray-300">
              <li>📍 Kathmandu, Nepal</li>
              <li>📞 +977 1 1234567</li>
              <li>✉️ info@sitaramdairy.com</li>
              <li>⏰ Mon-Sun: 7AM - 9PM</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-fraunces font-semibold mb-4">Follow Us</h4>
            <div className="w-12 h-0.5 bg-red-400 mb-4" />
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-red-800 rounded-full flex items-center justify-center hover:bg-red-700 transition">
                📘
              </a>
              <a href="#" className="w-10 h-10 bg-red-800 rounded-full flex items-center justify-center hover:bg-red-700 transition">
                📸
              </a>
              <a href="#" className="w-10 h-10 bg-red-800 rounded-full flex items-center justify-center hover:bg-red-700 transition">
                ▶️
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-red-800 pt-6 text-center text-gray-400">
          <p>&copy; 2024 Sita Ram Dairy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;