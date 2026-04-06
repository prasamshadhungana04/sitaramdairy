// frontend/src/components/Home/ProductImageShowcase.jsx
import { ShieldCheck, Droplets, Leaf } from 'lucide-react';

const ProductImageShowcase = () => {
  const showcase = [
    {
      id: 1,
      title: "Pure A2 Gir Cow Milk",
      desc: "Ethically sourced from our Tokha farm, delivered in sterile glass bottles to preserve nutrient integrity, taste, and freshness.",
      // Hand-picked high-resolution Unsplash A2 Milk image URL
      image: "https://images.unsplash.com/photo-1563636619-e9107daaf7a9?auto=format&fit=crop&w=1000&q=80",
      tag: "Fresh Daily",
      // Detailed illustrative data for the back of the card
      ingredients: [
        "100% Pure Raw/Pasteurized A2 Milk",
        "Naturally Occurring Beta-Casein Protein",
        "Zero Added Water or Preservatives"
      ],
      process: "Milked daily at 4:00 AM from our happy Tokha herd, rapidly chilled, and delivered to your doorstep within 4 hours to ensure absolute purity."
    },
    {
      id: 2,
      title: "Traditional Bilona Ghee",
      desc: "Crafted using the ancient Ayurvedic bilona method. We culture the milk into curd, hand-churn it into butter, and slow-cook it in brass vessels.",
      // Hand-picked high-resolution Unsplash Ghee/Butter image URL
      image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?auto=format&fit=crop&w=1000&q=80",
      tag: "Ayurvedic Heritage",
      ingredients: [
        "Cultured A2 Cow Milk Curd (Dahi)",
        "Zero Synthetic Colors or Flavors",
        "Zero Preservatives"
      ],
      process: "Requires approximately 30 liters of pure A2 milk to produce just 1 liter of this nutrient-dense, aromatic golden liquid, rich in healthy fats."
    }
  ];

  return (
    <section className="py-24 bg-[#F9F6F0] overflow-hidden border-y border-[#E2B254]/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="space-y-32">
          {showcase.map((item, idx) => (
            <div key={item.id} className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-16`}>
              
              {/* Image / Ingredients 3D Flip Container */}
              <div className="w-full lg:w-1/2 h-[550px] group [perspective:2000px] cursor-pointer">
                <div className="relative w-full h-full transition-transform duration-[1.2s] [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  
                  {/* ====== FRONT: High-Res Image ====== */}
                  <div className="absolute inset-0 w-full h-full [backface-visibility:hidden]">
                    <div className="absolute -inset-4 bg-[#E2B254]/20 rounded-[3rem] blur-2xl group-hover:bg-[#E2B254]/30 transition-colors duration-500" />
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="relative z-10 w-full h-full object-cover rounded-[3rem] shadow-2xl border-4 border-white"
                    />
                    <div className="absolute top-8 left-8 z-20 bg-[#002147] text-[#E2B254] px-5 py-2 rounded-full text-sm font-bold uppercase tracking-widest shadow-xl flex items-center gap-2">
                      <Droplets size={16} /> {item.tag}
                    </div>
                  </div>

                  {/* ====== BACK: Ingredients & Process Panel ====== */}
                  <div className="absolute inset-0 w-full h-full bg-[#002147] rounded-[3rem] p-12 border-4 border-[#E2B254] shadow-2xl [backface-visibility:hidden] [transform:rotateY(180deg)] flex flex-col justify-center">
                    <h3 className="text-[#E2B254] text-xs font-bold uppercase tracking-[0.3em] mb-4">Inside the Product</h3>
                    <h4 className="text-4xl font-serif font-bold text-white mb-8">{item.title}</h4>
                    
                    <div className="space-y-8">
                      <div>
                        <h5 className="flex items-center gap-2 text-white font-bold text-lg mb-4">
                          <Leaf className="text-[#E2B254]" /> Raw Ingredients
                        </h5>
                        <ul className="space-y-3">
                          {item.ingredients.map((ing, i) => (
                            <li key={i} className="text-gray-300 font-medium flex items-center gap-3 text-lg">
                              <span className="w-2 h-2 rounded-full bg-[#E2B254] shrink-0" /> {ing}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-8 border-t border-white/10">
                        <h5 className="flex items-center gap-2 text-white font-bold text-lg mb-4">
                          <ShieldCheck className="text-[#E2B254]" /> The Process
                        </h5>
                        <p className="text-gray-300 leading-relaxed text-lg">
                          {item.process}
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
              
              {/* Standard Side Content */}
              <div className="w-full lg:w-1/2 space-y-6">
                <span className="text-[#E2B254] font-bold tracking-[0.3em] uppercase text-sm">Signature Series</span>
                <h2 className="text-5xl md:text-6xl font-serif font-bold text-[#002147] leading-tight">{item.title}</h2>
                <p className="text-gray-500 text-xl leading-relaxed max-w-lg">{item.desc}</p>
                <button className="group flex items-center gap-4 text-[#002147] font-bold text-lg pt-6">
                  Add to Cart
                  <span className="w-12 h-[2px] bg-[#E2B254] group-hover:w-20 transition-all duration-300" />
                </button>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductImageShowcase;