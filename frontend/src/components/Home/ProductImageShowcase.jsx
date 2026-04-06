// frontend/src/components/Home/ProductImageShowcase.jsx
import { ShieldCheck, Droplets, Leaf } from 'lucide-react';

const ProductImageShowcase = () => {
  const showcase = [
    {
      id: 1,
      title: "Pure A2 Gir Cow Milk",
      desc: "Ethically sourced from our Tokha farm, delivered in sterile glass bottles to preserve nutrient integrity, taste, and freshness.",
      image: "https://images.unsplash.com/photo-1563636619-e9107daaf7a9?auto=format&fit=crop&w=1000&q=80",
      tag: "Fresh Daily",
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
    <section className="py-24 bg-[#F9F6F0] overflow-hidden border-y border-[#9B1C1C]/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="space-y-32">
          {showcase.map((item, idx) => (
            <div key={item.id} className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-16`}>
              
              {/* Image / Ingredients 3D Flip Container */}
              <div className="w-full lg:w-1/2 h-[550px] group [perspective:2000px] cursor-pointer">
                <div className="relative w-full h-full transition-transform duration-[1.2s] [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  
                  {/* ====== FRONT: High-Res Image ====== */}
                  <div className="absolute inset-0 w-full h-full [backface-visibility:hidden]">
                    {/* Crimson Glow on Hover */}
                    <div className="absolute -inset-4 bg-[#9B1C1C]/10 rounded-[3rem] blur-2xl group-hover:bg-[#9B1C1C]/25 transition-colors duration-500" />
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="relative z-10 w-full h-full object-cover rounded-[3rem] shadow-2xl border-4 border-white"
                    />
                    {/* Black Badge with White Text and Crimson Icon */}
                    <div className="absolute top-8 left-8 z-20 bg-[#1A1A1A] text-white px-5 py-2 rounded-full text-sm font-bold uppercase tracking-widest shadow-xl flex items-center gap-2">
                      <Droplets size={16} className="text-[#9B1C1C]" /> {item.tag}
                    </div>
                  </div>

                  {/* ====== BACK: Ingredients & Process Panel ====== */}
                  <div className="absolute inset-0 w-full h-full bg-[#1A1A1A] rounded-[3rem] p-12 border-4 border-[#9B1C1C] shadow-2xl [backface-visibility:hidden] [transform:rotateY(180deg)] flex flex-col justify-center">
                    <h3 className="text-[#9B1C1C] text-xs font-bold uppercase tracking-[0.3em] mb-4">Inside the Product</h3>
                    <h4 className="text-4xl font-serif font-bold text-white mb-8">{item.title}</h4>
                    
                    <div className="space-y-8">
                      <div>
                        <h5 className="flex items-center gap-2 text-white font-bold text-lg mb-4">
                          <Leaf className="text-[#9B1C1C]" /> Raw Ingredients
                        </h5>
                        <ul className="space-y-3">
                          {item.ingredients.map((ing, i) => (
                            <li key={i} className="text-gray-300 font-medium flex items-center gap-3 text-lg">
                              <span className="w-2 h-2 rounded-full bg-[#9B1C1C] shrink-0" /> {ing}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-8 border-t border-white/10">
                        <h5 className="flex items-center gap-2 text-white font-bold text-lg mb-4">
                          <ShieldCheck className="text-[#9B1C1C]" /> The Process
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
                <span className="text-[#9B1C1C] font-bold tracking-[0.3em] uppercase text-sm">Signature Series</span>
                <h2 className="text-5xl md:text-6xl font-serif font-bold text-[#1A1A1A] leading-tight">{item.title}</h2>
                <p className="text-gray-600 text-xl leading-relaxed max-w-lg">{item.desc}</p>
                <button className="group flex items-center gap-4 text-[#1A1A1A] font-bold text-lg pt-6 hover:text-[#9B1C1C] transition-colors">
                  Add to Cart
                  <span className="w-12 h-[2px] bg-[#9B1C1C] group-hover:w-20 transition-all duration-300" />
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