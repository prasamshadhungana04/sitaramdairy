// frontend/src/components/Products/FilterSidebar.jsx
export default function FilterSidebar({ activeCategory, setActiveCategory, categories }) {
  return (
    <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-cream sticky top-28">
      <h3 className="font-serif font-bold text-2xl text-textMain mb-6">Categories</h3>
      <ul className="space-y-4">
        {categories.map(category => (
          <li key={category}>
            <button
              onClick={() => setActiveCategory(category)}
              className={`text-base w-full flex items-center justify-between transition-all duration-300 ${
                activeCategory === category 
                  ? 'text-farmGreen font-bold translate-x-2' 
                  : 'text-textMuted hover:text-textMain hover:translate-x-1'
              }`}
            >
              <span>{category}</span>
              {activeCategory === category && <span className="w-2 h-2 rounded-full bg-accentYellow"></span>}
            </button>
          </li>
        ))}
      </ul>
      
      <div className="mt-12 pt-8 border-t border-cream">
        <h3 className="font-serif font-bold text-xl text-textMain mb-6">Price Range</h3>
        <input type="range" min="50" max="2000" className="w-full accent-farmGreen" />
        <div className="flex justify-between text-sm font-bold text-textMuted mt-4">
          <span>Rs. 50</span>
          <span>Rs. 2000+</span>
        </div>
      </div>
    </div>
  );
}