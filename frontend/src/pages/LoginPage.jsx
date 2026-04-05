// frontend/src/pages/LoginPage.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <main>
      <div className="bg-red-600 text-white py-16 text-center">
        <h1 className="text-4xl font-fraunces font-bold">{isLogin ? 'Welcome Back' : 'Create Account'}</h1>
        <p className="mt-2 text-red-100">{isLogin ? 'Login to your account' : 'Join Sita Ram Dairy family'}</p>
      </div>

      <div className="max-w-md mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-xl p-8 border border-red-100"
        >
          <div className="flex gap-4 mb-8">
            <button
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-2 rounded-full font-dmsans font-semibold transition-all duration-300 ${
                isLogin ? 'bg-red-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Login
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-2 rounded-full font-dmsans font-semibold transition-all duration-300 ${
                !isLogin ? 'bg-red-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Sign Up
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <div>
                <label className="block text-gray-700 font-dmsans mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none"
                  required={!isLogin}
                />
              </div>
            )}

            <div>
              <label className="block text-gray-700 font-dmsans mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-dmsans mb-2">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none"
                required
              />
            </div>

            {!isLogin && (
              <div>
                <label className="block text-gray-700 font-dmsans mb-2">Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none"
                  required
                />
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-red-600 text-white py-3 rounded-full font-dmsans font-semibold hover:bg-red-700 transition-all duration-300 transform hover:scale-105 mt-6"
            >
              {isLogin ? 'Login' : 'Create Account'}
            </button>
          </form>

          {isLogin && (
            <div className="text-center mt-4">
              <a href="#" className="text-sm text-red-600 hover:text-red-700">Forgot Password?</a>
            </div>
          )}

          <div className="text-center mt-6 pt-6 border-t border-gray-200">
            <p className="text-gray-600 text-sm">
              {isLogin ? "Don't have an account? " : "Already have an account? "}
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-red-600 font-semibold hover:text-red-700"
              >
                {isLogin ? 'Sign Up' : 'Login'}
              </button>
            </p>
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default LoginPage;