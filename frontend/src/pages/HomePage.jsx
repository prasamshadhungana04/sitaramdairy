// frontend/src/pages/HomePage.jsx
import HeroSlider from '../components/Home/HeroSlider';
import ProductFeature from '../components/Home/ProductFeature';
import FloatingTypography from '../components/Home/FloatingTypography';
import FeaturedCarousel from '../components/Home/FeaturedCarousel';

export default function HomePage() {
  const featuredProducts = [
    { id: 1, name: "Premium Buffalo Milk", category: "Milk", price_npr: 130, image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400" },
    { id: 2, name: "Farm Fresh Paneer", category: "Cheese", price_npr: 350, image: "https://images.unsplash.com/photo-1631379578027-114414f52e37?w=400" },
    { id: 3, name: "Organic Cow Ghee", category: "Ghee", price_npr: 1200, image: "https://images.unsplash.com/photo-1601314101416-3687edec84b3?w=400" },
  ];

  return (
    <div className="w-full bg-creamBg">
      {/* 1. Cinematic Hero */}
      <HeroSlider />
      
      {/* 2. Interlocking Floating Typography (Image 3) */}
      <FloatingTypography />
      
      {/* 3. Detailed Product Features (Image 2) */}
      <ProductFeature />
      
      {/* 4. Product Carousel */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <FeaturedCarousel products={featuredProducts} />
      </div>
    </div>
  );
}