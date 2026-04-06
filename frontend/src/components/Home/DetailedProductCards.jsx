// frontend/src/components/Home/DetailedProductCards.jsx
import { ShoppingCart, Leaf, ShieldCheck } from 'lucide-react';

const DetailedProductCards = () => {
  const products = [
    {
      id: 1,
      name: "Sita Ram Ghee",
      price: 950,
      category: "Pure Ghee",
      desc: "Authentic, healthy and tasty ghee full of natural energy. Crafted with 25 years of dairy excellence.",
      image: "/ghee.png",
      ingredients: ["100% Pure Cow Milk Fat", "Natural Aroma"],
      nutrition: "High energy source. Rich in fat-soluble vitamins and essential fatty acids for better digestion."
    },
    {
      id: 2,
      name: "Sita Ram Butter",
      price: 250,
      category: "Butter",
      desc: "Premium processed pasteurized butter. Healthy, tasty, and perfect for your daily breakfast.",
      image: "/butter.png",
      ingredients: ["Pasteurized Cream", "Milk Solids", "Zero added preservatives"],
      nutrition: "Pure dairy energy. Provides essential vitamins A and D for a healthy lifestyle."
    },
    {
      id: 3,
      name: "Sita Ram Dahi",
      price: 120,
      category: "Curd",
      desc: "Thick and creamy yogurt made from pure milk. A traditional probiotic powerhouse for your gut.",
      image: "/dahi.png",
      ingredients: ["Pure Whole Milk", "Active Probiotic Cultures", "No added sugar"],
      nutrition: "Rich in calcium and protein. Probiotics help maintain optimal gut health and immunity."
    },
    {
      id: 4,
      name: "Sita Ram Paneer",
      price: 380,
      category: "Cheese",
      desc: "Soft and delicious vacuum-packed paneer. Rich in proteins and calcium for your favorite dishes.",
      image: "/paneer.png",
      ingredients: ["Fresh Milk Solids", "Citric Acid (Coagulant)", "Pure Water"],
      nutrition: "High protein content. Excellent for muscle growth and bone health. Vacuum packed for freshness."
    },
    {
      id: 5,
      name: "Keshar Flavoured Milk",
      price: 80,
      category: "Beverage",
      desc: "Energy Fresh low-fat milk infused with premium saffron (Keshar) for an instant refreshing boost.",
      image: "/kesharmilk.png",
      ingredients: ["Low Fat Milk", "Keshar Extract", "Permitted Flavors", "Raw Sugar"],
      nutrition: "Low-fat energy boost. Provides high calcium and a refreshing taste profile for active lifestyles."
    },
    {
      id: 6,
      name: "Strawberry Lassi",
      price: 60,
      category: "Beverage",
      desc: "A delightful fusion of creamy yogurt and fresh strawberry flavor. Refreshing and nutritious.",
      image: "/strawberrylassi.png",
      ingredients: ["Fresh Yogurt", "Strawberry Pulp/Flavor", "Milk Solids", "Cane Sugar"],
      nutrition: "Probiotic goodness with fruit vitamins. Refreshing energy source for any time of the day."
    }
  ];

  return (
    <section className="py-24 bg-cheeseCream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-dairyRed text-sm font-bold uppercase tracking-[0.4em]">Our Collection</h2>
          <h3 className="text-5xl font-serif font-bold text-dairyBlack">Carefully Crafted <br/> Dairy Essentials</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product) => (
            // 3D Perspective Container
            <div key={product.id} className="group h-[520px] w-full [perspective:1500px] cursor-pointer">
              
              {/* Inner 3D Transform Container (Flips on Group Hover) */}
              <div className="relative h-full w-full transition-transform duration-1000 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                
                {/* ================= FRONT OF CARD ================= */}
                <div className="absolute inset-0 h-full w-full bg-white rounded-[2.5rem] p-6 shadow-md flex flex-col [backface-visibility:hidden]">
                  <div className="relative aspect-square mb-6 overflow-hidden rounded-[2rem] bg-white border border-gray-50">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-contain p-6 transform group-hover:scale-105 transition-transform duration-700" 
                    />
                  </div>

                  <div className="flex-grow space-y-2">
                    <div className="flex justify-between items-start">
                      <h3 className="text-xl font-serif font-bold text-dairyBlack">{product.name}</h3>
                      <span className="text-sm font-bold text-dairyRed">NPR {product.price}</span>
                    </div>
                    <p className="text-gray-500 text-sm line-clamp-2">{product.desc}</p>
                  </div>

                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <span className="text-xs font-bold uppercase tracking-widest text-gray-400">{product.category}</span>
                  </div>
                </div>

                {/* ================= BACK OF CARD ================= */}
                <div className="absolute inset-0 h-full w-full bg-dairyBlack rounded-[2.5rem] p-8 shadow-2xl [backface-visibility:hidden] [transform:rotateY(180deg)] flex flex-col border border-white/10">
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-serif font-bold text-white mb-2">{product.name}</h3>
                    <div className="w-12 h-1 bg-dairyRed mx-auto rounded-full" />
                  </div>

                  <div className="space-y-6 flex-grow">
                    {/* Ingredients Section */}
                    <div>
                      <h4 className="flex items-center gap-2 text-dairyRed text-xs font-bold uppercase tracking-widest mb-3">
                        <Leaf size={14} /> Ingredients
                      </h4>
                      <ul className="space-y-2">
                        {product.ingredients.map((ing, i) => (
                          <li key={i} className="text-gray-300 text-sm flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-dairyRed shrink-0" /> {ing}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Nutrition Section */}
                    <div>
                      <h4 className="flex items-center gap-2 text-dairyRed text-xs font-bold uppercase tracking-widest mb-3">
                        <ShieldCheck size={14} /> Nutrition Fact
                      </h4>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {product.nutrition}
                      </p>
                    </div>
                  </div>

                  {/* Add to Cart Button */}
                  <button className="w-full py-4 bg-dairyRed text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-white hover:text-dairyBlack transition-all duration-300 mt-auto shadow-lg">
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