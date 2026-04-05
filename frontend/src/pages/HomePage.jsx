// frontend/src/pages/HomePage.jsx
import HeroSlider from '../components/Home/HeroSlider';
import HeroProductGrid from '../components/Home/HeroProductGrid';
import ProductImageShowcase from '../components/Home/ProductImageShowcase';
import OurCollection from '../components/Home/OurCollection';
import DetailedProductCards from '../components/Home/DetailedProductCards';
import FloatingTypography from '../components/Home/FloatingTypography';
import FeaturedCarousel from '../components/Home/FeaturedCarousel';

const HomePage = () => {
  return (
    <main className="overflow-hidden">
      <HeroSlider />
      <HeroProductGrid />
      <ProductImageShowcase />
      <OurCollection />
      <DetailedProductCards />
      <FloatingTypography />
      <FeaturedCarousel />
    </main>
  );
};

export default HomePage;