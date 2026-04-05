// frontend/src/pages/AboutPage.jsx
const AboutPage = () => {
  return (
    <main>
      <div className="bg-red-600 text-white py-16 text-center">
        <h1 className="text-4xl font-fraunces font-bold">About Sita Ram Dairy</h1>
        <p className="mt-2 text-red-100">Generations of pure goodness since 1985</p>
      </div>
      
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-red-100">
          <h2 className="text-2xl font-fraunces font-bold text-red-700 mb-4">Our Story</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Established in 1985, Sita Ram Dairy has been a trusted name in providing premium, 
            organic dairy products to families across Nepal. For over three generations, we have 
            maintained our commitment to quality, purity, and traditional farming methods.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Our cows are grass-fed and never treated with hormones. We believe the best dairy 
            comes from happy cows and time-honored traditions passed down through generations.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-red-100">
          <h2 className="text-2xl font-fraunces font-bold text-red-700 mb-4">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed">
            To deliver farm-fresh, chemical-free dairy products while supporting local farmers 
            and maintaining sustainable practices that respect our animals and the environment.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 border border-red-100">
          <h2 className="text-2xl font-fraunces font-bold text-red-700 mb-4">Why Choose Us</h2>
          <ul className="space-y-3">
            <li className="flex items-center gap-3 text-gray-600">
              <span className="text-red-600 text-xl">✓</span> 100% Pure A2 Milk
            </li>
            <li className="flex items-center gap-3 text-gray-600">
              <span className="text-red-600 text-xl">✓</span> No Preservatives or Chemicals
            </li>
            <li className="flex items-center gap-3 text-gray-600">
              <span className="text-red-600 text-xl">✓</span> Traditional Bilona Method for Ghee
            </li>
            <li className="flex items-center gap-3 text-gray-600">
              <span className="text-red-600 text-xl">✓</span> Farm to Table Freshness
            </li>
            <li className="flex items-center gap-3 text-gray-600">
              <span className="text-red-600 text-xl">✓</span> Ethical Animal Treatment
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default AboutPage;