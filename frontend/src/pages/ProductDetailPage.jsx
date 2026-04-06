// frontend/src/pages/ProductDetailPage.jsx
import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useCart } from '../context/CartContext';
import ProductDetail from '../components/Products/ProductDetail';
import { ArrowLeft } from 'lucide-react';

export default function ProductDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  // Simulated DB fetch - Synchronized with the Red & Black Enterprise Catalog
  const product = {
    id: parseInt(id),
    name: "Farm Fresh Tokha Paneer",
    description: "Locally sourced, ultra-soft paneer made daily from pure whole A2 milk. No artificial binders or preservatives, ensuring a rich, creamy texture for your signature dishes.",
    price_npr: 350,
    stock_quantity: 20,
    image: "https://images.unsplash.com/photo-1631379578027-114414f52e37?auto=format&fit=crop&w=1200&q=80",
    category: "Artisanal Cheese"
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
    navigate('/cart');
  };

  return (
    <main className="bg-cheeseCream min-h-screen pt-32 pb-24 relative overflow-hidden">
      
      {/* === AMBIENT ENTERPRISE GLOWS === */}
      {/* Red accent glow */}
      <div className="absolute top-20 right-20 w-[30rem] h-[30rem] bg-dairyRed/5 rounded-full blur-[120px] pointer-events-none" />
      {/* Black depth glow */}
      <div className="absolute bottom-10 left-10 w-[25rem] h-[25rem] bg-dairyBlack/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* === BACK NAVIGATION === */}
        <button 
          onClick={() => navigate('/products')}
          className="mb-10 inline-flex items-center gap-2 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] hover:text-dairyRed transition-all group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-2 transition-transform" />
          Back to Collection
        </button>

        {/* === PRODUCT DETAIL COMPONENT === 
            Ensure the internal ProductDetail.jsx component is also updated 
            to use 'bg-dairyRed' for the CTA buttons.
        */}
        <div className="bg-white rounded-[3.5rem] shadow-premium border border-gray-100 overflow-hidden">
          <ProductDetail 
            product={product} 
            quantity={quantity} 
            setQuantity={setQuantity} 
            handleAddToCart={handleAddToCart} 
            onBack={() => navigate('/products')}
          />
        </div>

        {/* Aesthetic Support Footer */}
        <div className="mt-16 text-center">
           <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em]">
             Authentic Organic Certification • <span className="text-dairyRed">Sita Ram Heritage Batch #{id}</span>
           </p>
        </div>
      </div>
    </main>
  );
}