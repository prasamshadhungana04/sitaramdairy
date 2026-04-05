// frontend/src/pages/NoticesPage.jsx
const NoticesPage = () => {
  const notices = [
    { 
      id: 1, 
      title: "New Delivery Routes Expanded", 
      date: "April 5, 2024", 
      content: "We have expanded our delivery routes to cover more areas including Bhaktapur, Lalitpur, and Kirtipur. Now get fresh dairy products delivered to your doorstep." 
    },
    { 
      id: 2, 
      title: "Festival Special Offer", 
      date: "April 1, 2024", 
      content: "Get 20% off on all products this festival season. Offer valid till April 30th. Use code: FESTIVAL20" 
    },
    { 
      id: 3, 
      title: "Price Update Notice", 
      date: "March 28, 2024", 
      content: "Due to increased transportation costs, there will be a slight price adjustment effective from May 1st. Check our products page for updated prices." 
    },
    { 
      id: 4, 
      title: "New Product Launch", 
      date: "March 20, 2024", 
      content: "Introducing our new range of Flavored Lassi in Mango, Rose, and Sweet varieties. Available at all stores from April 1st." 
    },
    { 
      id: 5, 
      title: "Quality Certificate Achieved", 
      date: "March 15, 2024", 
      content: "Sita Ram Dairy has been awarded the Organic Certification from Nepal Organic Certification Center. Our products are now 100% certified organic." 
    }
  ];

  return (
    <main>
      <div className="bg-red-600 text-white py-16 text-center">
        <h1 className="text-4xl font-fraunces font-bold">Latest Notices & Updates</h1>
        <p className="mt-2 text-red-100">Stay informed about our latest announcements</p>
      </div>
      
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="space-y-6">
          {notices.map((notice) => (
            <div 
              key={notice.id} 
              className="bg-white p-6 rounded-xl shadow-md border-l-4 border-red-600 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-fraunces font-bold text-red-700">
                  {notice.title}
                </h3>
                <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                  {notice.date}
                </span>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {notice.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default NoticesPage;