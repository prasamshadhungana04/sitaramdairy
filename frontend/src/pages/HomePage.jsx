// frontend/src/pages/HomePage.jsx
import HeroSlider from '../components/Home/HeroSlider';
import MilkDivider from '../components/Home/MilkDivider';
import FeaturedCarousel from '../components/Home/FeaturedCarousel';

export default function HomePage() {
  // Mock data to feed the UI
  const featuredProducts = [
    { id: 1, name: "Premium Buffalo Milk", category: "Milk", price_npr: 130, image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400" },
    { id: 2, name: "Farm Fresh Paneer", category: "Cheese", price_npr: 350, image: "https://images.unsplash.com/photo-1631379578027-114414f52e37?w=400" }
  ];

  return (
    <div className="w-full">
      <HeroSlider />
      <MilkDivider />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-textMain mb-6 text-center">Fresh from the Farm</h2>
        <FeaturedCarousel products={featuredProducts} />
      </div>
    </div>
  );
}