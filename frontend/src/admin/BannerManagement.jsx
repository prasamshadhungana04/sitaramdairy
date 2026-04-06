// frontend/src/admin/BannerManagement.jsx
import { useState } from 'react';
import { UploadCloud, Image as ImageIcon, Trash2, GripHorizontal } from 'lucide-react';

export default function BannerManagement() {
  // Mock data for banners - using premium dairy imagery
  const [banners, setBanners] = useState([
    { 
      id: 1, 
      image_url: "https://images.unsplash.com/photo-1596181938555-d3c52e46e8c7?auto=format&fit=crop&w=1200&q=80", 
      title: "Pure A2 Morning Freshness", 
      is_active: true, 
      display_order: 1 
    },
    { 
      id: 2, 
      image_url: "https://images.unsplash.com/photo-1601314101416-3687edec84b3?auto=format&fit=crop&w=1200&q=80", 
      title: "Traditional Bilona Heritage", 
      is_active: true, 
      display_order: 2 
    }
  ]);

  return (
    <div className="space-y-8 bg-cheeseCream min-h-screen p-2">
      {/* === UPLOAD SECTION === */}
      <div className="bg-white rounded-3xl shadow-sm border-2 border-dashed border-gray-200 p-10 flex flex-col items-center justify-center hover:border-dairyRed transition-all cursor-pointer group relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute inset-0 bg-dairyRed/5 opacity-0 group-hover:opacity-100 transition-opacity" />
        
        <div className="w-20 h-20 bg-dairyRed/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform relative z-10">
          <UploadCloud className="text-dairyRed" size={36} />
        </div>
        
        <h3 className="text-2xl font-serif font-bold text-dairyRed mb-2 relative z-10 red-text-shadow">
          Upload New Cinematic Banner
        </h3>
        <p className="text-sm text-gray-500 mb-6 font-medium relative z-10">
          Recommended: 1920x1080px (16:9 ratio) • Max 2MB
        </p>
        
        <button className="bg-dairyBlack text-white px-10 py-3 rounded-full font-bold hover:bg-dairyRed transition-all shadow-lg relative z-10">
          Browse Media Gallery
        </button>
      </div>

      {/* === ACTIVE BANNERS GRID === */}
      <div className="bg-white rounded-3xl shadow-premium border border-gray-100 overflow-hidden">
        <div className="p-8 border-b border-gray-100 bg-gray-50/50 flex justify-between items-center">
          <h2 className="text-2xl font-serif font-bold text-dairyRed flex items-center gap-3 red-text-shadow">
            <ImageIcon className="text-dairyRed" size={28} /> 
            Active Homepage Slides
          </h2>
          <span className="bg-dairyRed/10 text-dairyRed px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest">
            {banners.length} Slides Total
          </span>
        </div>
        
        <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {banners.map(banner => (
            <div key={banner.id} className="group relative rounded-[2.5rem] overflow-hidden border border-gray-200 shadow-sm hover:shadow-2xl transition-all duration-500">
              
              {/* Drag Handle (Visible on Hover) */}
              <div className="absolute top-6 left-6 z-30 bg-white text-dairyRed p-3 rounded-2xl cursor-grab opacity-0 group-hover:opacity-100 transition-all shadow-xl">
                <GripHorizontal size={24} />
              </div>

              {/* Banner Preview Area */}
              <div className="relative h-64 w-full overflow-hidden">
                {/* Gradient Overlay for Title Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-dairyBlack/90 via-transparent to-transparent z-10" />
                
                <img 
                  src={banner.image_url} 
                  alt={banner.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
                />
                
                <div className="absolute bottom-6 left-8 z-20">
                  <span className="text-dairyRed font-black text-[10px] uppercase tracking-[0.3em] mb-1 block">
                    Position: Slide #{banner.display_order}
                  </span>
                  <h3 className="text-white font-serif font-bold text-2xl drop-shadow-md">
                    {banner.title}
                  </h3>
                </div>
              </div>
              
              {/* Controls Footer */}
              <div className="bg-white p-6 flex justify-between items-center border-t border-gray-50">
                <div className="flex items-center gap-6">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black uppercase text-gray-400 tracking-widest mb-1">Status</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked={banner.is_active} />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-dairyRed"></div>
                    </label>
                  </div>
                  
                  <div className="h-10 w-[1px] bg-gray-100" />
                  
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black uppercase text-gray-400 tracking-widest mb-1">Visibility</span>
                    <span className="text-sm font-bold text-dairyBlack">Public</span>
                  </div>
                </div>

                <button className="w-12 h-12 bg-gray-50 text-gray-400 hover:bg-dairyRed hover:text-white transition-all duration-300 rounded-2xl flex items-center justify-center shadow-inner group/btn">
                  <Trash2 size={20} className="group-hover/btn:scale-110 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}