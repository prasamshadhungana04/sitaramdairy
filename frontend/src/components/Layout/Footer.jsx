// frontend/src/components/Layout/Footer.jsx
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <span className="text-2xl font-bold text-textMain">Sita Ram <span className="text-green-600">Dairy</span></span>
            <p className="mt-4 text-sm text-gray-600">Pure, farm-fresh dairy products.</p>
          </div>
          <div>
            <h3 className="font-bold text-textMain mb-4">Shop</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link to="/products" className="hover:text-green-600">All Products</Link></li>
              <li><Link to="/products?category=Milk" className="hover:text-green-600">Fresh Milk</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-textMain mb-4">Support</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link to="/faq" className="hover:text-green-600">FAQ</Link></li>
              <li><Link to="/contact" className="hover:text-green-600">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-textMain mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>📍 Tokha, Bagmati, Nepal</li>
              <li>📞 +977 9800000000</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}