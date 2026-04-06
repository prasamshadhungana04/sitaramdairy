// frontend/src/admin/BannerManagement.jsx
import { useState } from 'react';
import { UploadCloud, Image as ImageIcon, Trash2, GripHorizontal } from 'lucide-react';

export default function BannerManagement() {
  const [banners, setBanners] = useState([
    { id: 1, image_url: "https://images.unsplash.com/photo-1596181938555-d3c52e46e8c7", title: "100% Organic", is_active: true, display_order: 1 },
    { id: 2, image_url: "https://images.unsplash.com/photo-1601314101416-3687edec84b3", title: "Pure Golden Ghee", is_active: true, display_order: 2 }
  ]);

  return (
    <div className="space-y-8">
      {/* Upload Section */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 flex flex-col items-center justify-center border-dashed border-2 hover:border-[#E2B254] transition-colors cursor-pointer group">
        <div className="w-16 h-16 bg-[#E2B254]/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
          <UploadCloud className="text-[#E2B254]" size={32} />
        </div>
        <h3 className="text-lg font-bold text-[#a80000] mb-1">Upload New Cinematic Banner</h3>
        <p className="text-sm text-gray-500 mb-4">PNG, JPG or WEBP up to 2MB. Recommended ratio 16:9.</p>
        <button className="bg-[#a80000] text-white px-6 py-2.5 rounded-full font-medium hover:bg-[#E2B254] hover:text-[#a80000] transition-all shadow-md">
          Browse Files
        </button>
      </div>

      {/* Banners Grid */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-100 bg-gray-50/50">
          <h2 className="text-xl font-bold text-[#a80000] flex items-center gap-2"><ImageIcon className="text-[#E2B254]"/> Active Slides</h2>
        </div>
        
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {banners.map(banner => (
            <div key={banner.id} className="group relative rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300">
              {/* Drag Handle Overlay */}
              <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur p-2 rounded-lg cursor-grab opacity-0 group-hover:opacity-100 transition-opacity">
                <GripHorizontal size={20} className="text-[#a80000]" />
              </div>

              <div className="relative h-48 w-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-[#a80000]/80 to-transparent z-10"></div>
                <img src={banner.image_url} alt={banner.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <h3 className="absolute bottom-4 left-4 text-white font-serif font-bold text-xl z-20">{banner.title}</h3>
              </div>
              
              <div className="bg-white p-4 flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-bold text-gray-500">Slide #{banner.display_order}</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked={banner.is_active} />
                    <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-green-500"></div>
                  </label>
                </div>
                <button className="text-gray-400 hover:text-red-500 transition-colors p-2 hover:bg-red-50 rounded-lg">
                  <Trash2 size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}