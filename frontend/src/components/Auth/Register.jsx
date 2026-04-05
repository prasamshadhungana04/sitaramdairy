// frontend/src/components/Auth/Register.jsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Register({ handleSubmit, formData, setFormData, error, redirect }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-md w-full bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mx-auto"
    >
      <div className="text-center mb-8">
        <h2 className="text-3xl font-extrabold text-textMain">Create an Account</h2>
        <p className="mt-2 text-sm text-gray-600">Join Sita Ram Dairy today.</p>
      </div>
      
      {error && <div className="bg-red-50 text-red-500 p-3 rounded mb-4 text-sm">{error}</div>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Full Name</label>
          <input 
            type="text" required 
            onChange={e => setFormData({...formData, name: e.target.value})}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md bg-milk focus:ring-green-500 focus:border-green-500" 
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Email Address</label>
          <input 
            type="email" required 
            onChange={e => setFormData({...formData, email: e.target.value})}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md bg-milk focus:ring-green-500 focus:border-green-500" 
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input 
            type="password" required 
            onChange={e => setFormData({...formData, password: e.target.value})}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md bg-milk focus:ring-green-500 focus:border-green-500" 
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
          <input 
            type="password" required 
            onChange={e => setFormData({...formData, password_confirmation: e.target.value})}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md bg-milk focus:ring-green-500 focus:border-green-500" 
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.02, borderRadius: "15px" }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-textMain hover:bg-gray-800"
        >
          Register
        </motion.button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600">
          Already have an account?{' '}
          <Link to={`/login?redirect=${redirect}`} className="font-medium text-green-600 hover:text-green-500">
            Sign in here
          </Link>
        </p>
      </div>
    </motion.div>
  );
}