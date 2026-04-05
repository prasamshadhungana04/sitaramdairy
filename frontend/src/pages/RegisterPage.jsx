// frontend/src/pages/RegisterPage.jsx
import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Register from '../components/Auth/Register';

export default function RegisterPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const redirect = searchParams.get('redirect') || '/';

  const [formData, setFormData] = useState({ name: '', email: '', password: '', password_confirmation: '' });
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.password_confirmation) {
      setError('Passwords do not match');
      return;
    }
    // Simulate successful registration
    navigate(`/login?redirect=${redirect}`);
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <Register 
        handleSubmit={handleSubmit} 
        formData={formData} 
        setFormData={setFormData} 
        error={error} 
        redirect={redirect} 
      />
    </div>
  );
}