// frontend/src/components/Home/DetailedProductCards.jsx
import { ShoppingCart, Leaf, ShieldCheck } from 'lucide-react';

const DetailedProductCards = () => {
  const products = [
    {
      id: 1,
      name: "Golden Bilona Ghee",
      price: 1200,
      category: "Pure Ghee",
      desc: "Slow-cooked in earthen pots using the ancient Ayurvedic bilona method.",
      image: "https://images.unsplash.com/photo-1601314101416-3687edec84b3?auto=format&fit=crop&w=800&q=80",
      ingredients: ["100% Pure A2 Gir Cow Milk", "Cultured Curd Extract"],
      nutrition: "Rich in Omega-3, Butyric Acid, and essential vitamins A, D, E, K."
    },
    {
      id: 2,
      name: "Farm Fresh Paneer",
      price: 450,
      category: "Cheese",
      desc: "Malai paneer pressed traditionally to maintain its legendary soft texture.",
      image: "https://images.unsplash.com/photo-1631379578027-114414f52e37?auto=format&fit=crop&w=800&q=80",
      ingredients: ["Fresh Whole Cow Milk", "Natural Lemon Juice (Coagulant)"],
      nutrition: "High Protein: 18g per 100g. Excellent calcium and phosphorus source."
    },
    {
      id: 3,
      name: "Probiotic Juju Dhau",
      price: 180,
      category: "Curd",
      desc: "The 'King of Yogurt' from Bhaktapur, known for its rich, creamy, custard-like feel.",
      image: "https://images.unsplash.com/photo-1571212515416-fef01fc43637?auto=format&fit=crop&w=800&q=80",
      ingredients: ["Pasteurized Whole Milk", "Active Probiotic Cultures", "Raw Cane Sugar"],
      nutrition: "Billions of live active cultures for optimal gut health and digestion."
    },
    {
      id: 4,
      name: "Pure A2 Cow Milk",
      price: 130,
      category: "Fresh Milk",
      desc: "Unadulterated, farm-fresh milk delivered within hours of milking from our Tokha herd.",
      image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=800&q=80",
      ingredients: ["100% Raw/Pasteurized A2 Milk"],
      nutrition: "Rich in calcium, vitamin D, and easy-to-digest A2 Beta-Casein protein."
    },
    {
      id: 5,
      name: "Cultured White Butter",
      price: 650,
      category: "Butter",
      desc: "Traditional unsalted Makhan, churned daily from fermented, high-quality cream.",
      image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?auto=format&fit=crop&w=800&q=80",
      ingredients: ["Cultured Heavy Cream", "Zero Added Salt"],
      nutrition: "Pure dairy fat, rich in beneficial fatty acids and zero trans-fats."
    },
    {
      id: 6,
      name: "Artisanal Sweet Lassi",
      price: 150,
      category: "Beverage",
      desc: "Thick, refreshing traditional yogurt drink blended with natural flavors and sweetness.",
      image: "https://images.unsplash.com/photo-1574221199321-419163f9ebba?auto=format&fit=crop&w=800&q=80",
      ingredients: ["Fresh Yogurt", "Purified Water", "Raw Sugar", "Cardamom"],
      nutrition: "Cooling properties, instant energy, and significant calcium booster."
    }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          {/* THIS WAS YELLOW IN SCREENSHOT - NOW RED */}
          <h2 className="text-[#C8102E] text-sm font-bold uppercase tracking-[0.4em]">Our Collection</h2>
          <h3 className="text-5xl font-serif font-bold text-[#1A1A1A]">Carefully Crafted <br/> Dairy Essentials</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product) => (
            // 3D Perspective Container
            <div key={product.id} className="group h-[480px] w-full [perspective:1500px] cursor-pointer">
              
              {/* Inner 3D Transform Container (Flips on Group Hover) */}
              <div className="relative h-full w-full transition-transform duration-1000 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                
                {/* ================= FRONT OF CARD ================= */}
                <div className="absolute inset-0 h-full w-full bg-white rounded-[2.5rem] p-6 border border-gray-100 shadow-sm flex flex-col [backface-visibility:hidden]">
                  {/* Cream background for the image box */}
                  <div className="relative aspect-square mb-6 overflow-hidden rounded-[2rem] bg-[#F9F6F0]">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover mix-blend-multiply p-4 transform group-hover:scale-105 transition-transform duration-700" 
                    />
                  </div>

                  <div className="flex-grow space-y-2">
                    <div className="flex justify-between items-start">
                      <h3 className="text-xl font-serif font-bold text-[#1A1A1A]">{product.name}</h3>
                      <span className="text-sm font-bold text-[#C8102E]">NPR {product.price}</span>
                    </div>
                    <p className="text-gray-500 text-sm line-clamp-2">{product.desc}</p>
                  </div>

                  <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-widest text-gray-400">{product.category}</span>
                    <span className="text-[#1A1A1A] text-xs font-bold uppercase tracking-wider flex items-center gap-1 group-hover:text-[#C8102E] transition-colors">
                      Hover for Info <span className="text-[#C8102E]">→</span>
                    </span>
                  </div>
                </div>

                {/* ================= BACK OF CARD ================= */}
                <div className="absolute inset-0 h-full w-full bg-[#1A1A1A] rounded-[2.5rem] p-8 shadow-2xl [backface-visibility:hidden] [transform:rotateY(180deg)] flex flex-col border border-white/10">
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-serif font-bold text-white mb-2">{product.name}</h3>
                    {/* RED SEPARATOR LINE */}
                    <div className="w-12 h-1 bg-[#C8102E] mx-auto rounded-full" />
                  </div>

                  <div className="space-y-6 flex-grow">
                    {/* Ingredients Section */}
                    <div>
                      <h4 className="flex items-center gap-2 text-[#C8102E] text-xs font-bold uppercase tracking-widest mb-3">
                        <Leaf size={14} /> Ingredients
                      </h4>
                      <ul className="space-y-2">
                        {product.ingredients.map((ing, i) => (
                          <li key={i} className="text-gray-300 text-sm flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#C8102E] shrink-0" /> {ing}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Nutrition Section */}
                    <div>
                      <h4 className="flex items-center gap-2 text-[#C8102E] text-xs font-bold uppercase tracking-widest mb-3">
                        <ShieldCheck size={14} /> Nutrition Fact
                      </h4>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {product.nutrition}
                      </p>
                    </div>
                  </div>

                  {/* Add to Cart Button */}
                  <button className="w-full py-4 bg-[#C8102E] text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-white hover:text-[#1A1A1A] transition-all duration-300 mt-auto shadow-lg">
                    <ShoppingCart size={18} /> Add to Cart — NPR {product.price}
                  </button>
                  
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DetailedProductCards;