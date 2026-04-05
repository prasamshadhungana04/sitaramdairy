// frontend/src/pages/ProductsPage.jsx
import OurCollection from '../components/Home/OurCollection';
import DetailedProductCards from '../components/Home/DetailedProductCards';
import ProductImageShowcase from '../components/Home/ProductImageShowcase';

const ProductsPage = () => {
  return (
    <main>
      <div className="bg-red-600 text-white py-16 text-center">
        <h1 className="text-4xl font-fraunces font-bold">Our Products</h1>
        <p className="mt-2 text-red-100">Pure, fresh, and organic dairy products</p>
      </div>
      <ProductImageShowcase />
      <OurCollection />
      <DetailedProductCards />
    </main>
  );
};

export default ProductsPage;