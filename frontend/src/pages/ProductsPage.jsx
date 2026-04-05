// frontend/src/pages/ProductsPage.jsx
import OurCollection from '../components/Home/OurCollection';
import DetailedProductCards from '../components/Home/DetailedProductCards';
import ProductImageShowcase from '../components/Home/ProductImageShowcase';
import MilkDivider from '../components/Home/MilkDivider';

const ProductsPage = () => {
  return (
    <main className="bg-[#F9F6F0] min-h-screen">
      <div className="relative bg-[#002147] text-white pt-32 pb-24 text-center overflow-hidden">
        {/* Subtle Gold Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#E2B254]/15 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <h2 className="text-[#E2B254] text-sm uppercase tracking-[0.3em] font-bold mb-4">Shop The Farm</h2>
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">Our Premium Catalog</h1>
          <p className="text-gray-300 text-lg font-light">Pure, fresh, and organic dairy products delivered straight from our Tokha pastures to your door.</p>
        </div>
        
        <div className="absolute bottom-0 w-full z-20">
          <MilkDivider />
        </div>
      </div>

      <ProductImageShowcase />
      <OurCollection />
      <DetailedProductCards />
    </main>
  );
};

export default ProductsPage;