// frontend/src/pages/ProductDetailPage.jsx
import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useCart } from '../context/CartContext';
import ProductDetail from '../components/Products/ProductDetail';

export default function ProductDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  // Simulated DB fetch - Updated to match Sita Ram branding and hero_2.png
  const product = {
    id: parseInt(id),
    name: "Sita Ram Premium Dairy",
    description: "Experience the legacy of Tokha. Our premium dairy products are crafted using traditional methods, ensuring the highest level of purity, nutrition, and authentic Nepalese taste.",
    price_npr: 450,
    stock_quantity: 25,
    // Updated to use hero_2.png
    image: "/hero_2.png" 
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
    navigate('/cart');
  };

  return (
    <div className="bg-[#F9F6F0] min-h-screen pt-32 pb-12 relative overflow-hidden">
      {/* Background Decorative Glows */}
      <div className="absolute top-20 right-20 w-[30rem] h-[30rem] bg-[#E2B254]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[25rem] h-[25rem] bg-dairyRed/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Navigation Breadcrumb feel */}
        <div className="mb-8 ml-2">
          <button 
            onClick={() => navigate('/products')}
            className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 hover:text-dairyRed transition-colors"
          >
            ← Back to Products
          </button>
        </div>

        <div className="bg-white/40 backdrop-blur-md rounded-[3rem] p-4 shadow-premium border border-white/60">
          <ProductDetail 
            product={product} 
            quantity={quantity} 
            setQuantity={setQuantity} 
            handleAddToCart={handleAddToCart} 
            onBack={() => navigate('/products')}
          />
        </div>
      </div>
    </div>
  );
}