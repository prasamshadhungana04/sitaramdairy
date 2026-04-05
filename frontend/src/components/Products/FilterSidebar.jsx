// frontend/src/components/Products/FilterSidebar.jsx
export default function FilterSidebar({ activeCategory, setActiveCategory, categories }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 sticky top-24">
      <h3 className="font-bold text-lg text-textMain mb-4">Categories</h3>
      <ul className="space-y-3">
        {categories.map(category => (
          <li key={category}>
            <button
              onClick={() => setActiveCategory(category)}
              className={`text-sm w-full text-left transition-colors ${
                activeCategory === category ? 'text-green-700 font-bold' : 'text-gray-600 hover:text-textMain'
              }`}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
      
      <h3 className="font-bold text-lg text-textMain mt-8 mb-4">Price Range</h3>
      <input type="range" min="50" max="2000" className="w-full accent-green-600" />
    </div>
  );
}