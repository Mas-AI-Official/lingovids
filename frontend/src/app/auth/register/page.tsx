'use client';
import { useState } from 'react';
import axios from 'axios';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!acceptTerms) {
      setError('You must accept the Terms and Privacy Policy.');
      return;
    }
    try {
      const response = await axios.post(process.env.NEXT_PUBLIC_API_URL + '/api/auth/register', {
        email,
        password,
        consent: { tos: true, privacy: true, cookies: true },
      });
      alert(response.data.message);
      window.location.href = '/auth/login';
    } catch (error) {
      setError('Registration failed: ' + ((error as any).response?.data?.error || (error as any).message));
    }
  };

  return (
    <main className='min-h-screen flex items-center justify-center bg-gray-100'>
      <div className='bg-white p-8 rounded-lg shadow-lg w-full max-w-md'>
        <h1 className='text-3xl font-bold text-center mb-6'>Sign Up for Lingovids</h1>
        {error && <p className='text-red-500 text-center mb-4'>{error}</p>}
        <form onSubmit={handleSubmit} className='space-y-4'>
          <input
            type='email'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
            required
          />
          <input
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
            required
          />
          <label className='flex items-center'>
            <input type='checkbox' onChange={(e) => setAcceptTerms(e.target.checked)} className='mr-2' />
            <span className='text-sm'>
              I agree to the <a href='/terms' className='text-blue-500 underline'>Terms</a> and <a href='/privacy' className='text-blue-500 underline'>Privacy Policy</a>
            </span>
          </label>
          <button type='submit' disabled={!acceptTerms} className='bg-blue-600 text-white p-2 rounded w-full hover:bg-blue-700 transition'>
            Register
          </button>
        </form>
      </div>
    </main>
  );
}
