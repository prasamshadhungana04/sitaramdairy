// frontend/src/pages/ProductsPage.jsx
import { useState } from 'react';
import FilterSidebar from '../components/Products/FilterSidebar';
import ProductGrid from '../components/Home/ProductGrid';

const mockProducts = [
  { id: 1, name: "Full Cream Milk", category: "Milk", price_npr: 120, image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400" },
  { id: 2, name: "Fresh Paneer", category: "Cheese", price_npr: 350, image: "https://images.unsplash.com/photo-1631379578027-114414f52e37?w=400" },
  { id: 3, name: "Pure Cow Ghee", category: "Ghee", price_npr: 1200, image: "https://images.unsplash.com/photo-1601314101416-3687edec84b3?w=400" },
  { id: 4, name: "Buffalo Yogurt", category: "Yogurt", price_npr: 150, image: "https://images.unsplash.com/photo-1574221199321-419163f9ebba?w=400" },
];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'Milk', 'Cheese', 'Ghee', 'Yogurt'];

  const filteredProducts = activeCategory === 'All' 
    ? mockProducts 
    : mockProducts.filter(p => p.category === activeCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row gap-8">
      <div className="w-full md:w-64 flex-shrink-0">
        <FilterSidebar activeCategory={activeCategory} setActiveCategory={setActiveCategory} categories={categories} />
      </div>
      <div className="flex-grow">
        <div className="mb-6 flex justify-between items-center border-b border-gray-200 pb-4">
          <h1 className="text-2xl font-bold text-textMain">{activeCategory} Products</h1>
          <span className="text-sm text-gray-500">{filteredProducts.length} Results</span>
        </div>
        <ProductGrid products={filteredProducts} />
      </div>
    </div>
  );
}