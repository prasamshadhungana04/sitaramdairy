// frontend/src/admin/BannerManagement.jsx
import { useState } from 'react';

export default function BannerManagement() {
  const [banners, setBanners] = useState([
    { id: 1, image_url: "https://images.unsplash.com/photo-1550583724-b2692b85b150", is_active: true, display_order: 1 },
    { id: 2, image_url: "https://images.unsplash.com/photo-1631379578027-114414f52e37", is_active: true, display_order: 2 }
  ]);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-textMain">Hero Slider Images</h2>
        <button className="bg-green-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-700">
          + Upload Banner
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {banners.map(banner => (
          <div key={banner.id} className="border border-gray-200 rounded-lg p-4 relative group">
            <img src={banner.image_url} alt="Banner" className="w-full h-40 object-cover rounded mb-4" />
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">Order: {banner.display_order}</span>
              <span className={`px-2 py-1 text-xs rounded font-bold ${banner.is_active ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                {banner.is_active ? 'Active' : 'Inactive'}
              </span>
            </div>
            <button className="absolute top-6 right-6 bg-red-500 text-white px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}