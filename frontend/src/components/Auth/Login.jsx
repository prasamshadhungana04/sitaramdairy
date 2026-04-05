// frontend/src/components/Auth/Login.jsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Login({ handleSubmit, setEmail, setPassword, error, redirect }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-md w-full bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mx-auto"
    >
      <div className="text-center mb-8">
        <h2 className="text-3xl font-extrabold text-textMain">Welcome Back</h2>
        <p className="mt-2 text-sm text-gray-600">Please sign in to continue.</p>
      </div>
      
      {error && <div className="bg-red-50 text-red-500 p-3 rounded mb-4 text-sm">{error}</div>}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Email Address</label>
          <input 
            type="email" 
            required 
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 bg-milk" 
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input 
            type="password" 
            required 
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 bg-milk" 
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.02, borderRadius: "15px" }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-textMain hover:bg-gray-800 focus:outline-none"
        >
          Sign In
        </motion.button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600">
          Don't have an account?{' '}
          <Link to={`/register?redirect=${redirect}`} className="font-medium text-green-600 hover:text-green-500">
            Register here
          </Link>
        </p>
      </div>
    </motion.div>
  );
}