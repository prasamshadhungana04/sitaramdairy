// frontend/src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Global Layout Components
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';

// Public Facing Pages
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import NoticesPage from './pages/NoticesPage';

// Shopping, Checkout & History
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import OrderHistoryPage from './pages/OrderHistoryPage';

// Authentication Pages
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

// Admin Dashboard & Management (Nested Routes)
import Dashboard from './admin/Dashboard';
import ProductManagement from './admin/ProductManagement';
import OrderManagement from './admin/OrderManagement';
import BannerManagement from './admin/BannerManagement';

/**
 * PublicLayout Wrapper
 * Ensures Header and Footer only appear on user-facing pages,
 * not on the clean Admin Dashboard.
 */
const PublicLayout = ({ children }) => (
  <div className="flex flex-col min-h-screen">
    <Header />
    <main className="flex-grow bg-[#F9F6F0]">
      {children}
    </main>
    <Footer />
  </div>
);

function App() {
  return (
    <Router 
      // Future flags to remove Vite/React-Router v7 console warnings
      future={{ 
        v7_startTransition: true, 
        v7_relativeSplatPath: true 
      }}
    >
      <Routes>
        {/* === PUBLIC USER ROUTES === */}
        <Route path="/" element={<PublicLayout><HomePage /></PublicLayout>} />
        <Route path="/products" element={<PublicLayout><ProductsPage /></PublicLayout>} />
        <Route path="/products/:id" element={<PublicLayout><ProductDetailPage /></PublicLayout>} />
        <Route path="/about" element={<PublicLayout><AboutPage /></PublicLayout>} />
        <Route path="/services" element={<PublicLayout><ServicesPage /></PublicLayout>} />
        <Route path="/notices" element={<PublicLayout><NoticesPage /></PublicLayout>} />
        
        {/* === AUTHENTICATION === */}
        <Route path="/login" element={<PublicLayout><LoginPage /></PublicLayout>} />
        <Route path="/register" element={<PublicLayout><RegisterPage /></PublicLayout>} />

        {/* === SHOPPING FLOW === */}
        <Route path="/cart" element={<PublicLayout><CartPage /></PublicLayout>} />
        <Route path="/checkout" element={<PublicLayout><CheckoutPage /></PublicLayout>} />
        <Route path="/history" element={<PublicLayout><OrderHistoryPage /></PublicLayout>} />

        {/* === ADMIN PANEL (NESTED) === */}
        <Route path="/admin" element={<Dashboard />}>
          {/* Default view for /admin is Product Management */}
          <Route index element={<ProductManagement />} />
          <Route path="products" element={<ProductManagement />} />
          <Route path="orders" element={<OrderManagement />} />
          <Route path="banners" element={<BannerManagement />} />
          {/* Catch-all for undefined admin tabs */}
          <Route path="users" element={<div className="p-8 text-[#002147] font-bold">User Management coming soon...</div>} />
        </Route>

        {/* === 404 NOT FOUND === */}
        <Route path="*" element={
          <PublicLayout>
            <div className="flex flex-col items-center justify-center py-32 text-center">
              <h1 className="text-9xl font-serif font-black text-[#002147]/10">404</h1>
              <p className="text-2xl font-serif font-bold text-[#002147] -mt-12 mb-8">Page Not Found</p>
              <a href="/" className="bg-[#002147] text-white px-8 py-3 rounded-full font-bold hover:bg-[#E2B254] hover:text-[#002147] transition-all">
                Return Home
              </a>
            </div>
          </PublicLayout>
        } />
      </Routes>
    </Router>
  );
}

export default App;