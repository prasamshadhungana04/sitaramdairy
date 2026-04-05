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

  // Simulated DB fetch
  const product = {
    id: parseInt(id),
    name: "Farm Fresh Paneer",
    description: "Locally sourced, ultra-soft paneer made from pure whole milk.",
    price_npr: 350,
    stock_quantity: 20,
    image: "https://images.unsplash.com/photo-1631379578027-114414f52e37?w=800"
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
    navigate('/cart');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <ProductDetail 
        product={product} 
        quantity={quantity} 
        setQuantity={setQuantity} 
        handleAddToCart={handleAddToCart} 
        onBack={() => navigate('/products')}
      />
    </div>
  );
}