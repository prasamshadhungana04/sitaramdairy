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

  // Simulated DB fetch - matching premium catalog pricing
  const product = {
    id: parseInt(id),
    name: "Farm Fresh Tokha Paneer",
    description: "Locally sourced, ultra-soft paneer made daily from pure whole A2 milk. No artificial binders or preservatives.",
    price_npr: 350,
    stock_quantity: 20,
    image: "https://images.unsplash.com/photo-1631379578027-114414f52e37?w=800&q=80"
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
    navigate('/cart');
  };

  return (
    <div className="bg-[#F9F6F0] min-h-screen pt-24 pb-12 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-[#E2B254]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#002147]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <ProductDetail 
          product={product} 
          quantity={quantity} 
          setQuantity={setQuantity} 
          handleAddToCart={handleAddToCart} 
          onBack={() => navigate('/products')}
        />
      </div>
    </div>
  );
}