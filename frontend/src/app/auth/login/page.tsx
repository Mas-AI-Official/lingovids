'use client';
import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { FaGoogle, FaFacebook, FaGithub, FaYahoo } from 'react-icons/fa';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleOAuthLogin = (provider: string) => signIn(provider, { callbackUrl: '/dashboard' });
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await signIn('credentials', { redirect: false, email, password });
    if (result?.error) setError('Invalid email or password');
    else window.location.href = '/dashboard';
  };

  return (
    <main className='min-h-screen flex items-center justify-center bg-gray-100'>
      <div className='bg-white p-8 rounded-lg shadow-lg w-full max-w-md'>
        <h1 className='text-3xl font-bold text-center mb-6'>Login to Lingovids</h1>
        {error && <p className='text-red-500 text-center mb-4'>{error}</p>}
        <div className='space-y-4'>
          <button onClick={() => handleOAuthLogin('google')} className='flex items-center justify-center bg-red-600 text-white p-2 rounded w-full hover:bg-red-700 transition'>
            <FaGoogle className='mr-2' /> Login with Google
          </button>
          <button onClick={() => handleOAuthLogin('facebook')} className='flex items-center justify-center bg-blue-800 text-white p-2 rounded w-full hover:bg-blue-900 transition'>
            <FaFacebook className='mr-2' /> Login with Facebook
          </button>
          <button onClick={() => handleOAuthLogin('github')} className='flex items-center justify-center bg-gray-800 text-white p-2 rounded w-full hover:bg-gray-900 transition'>
            <FaGithub className='mr-2' /> Login with GitHub
          </button>
          <button onClick={() => handleOAuthLogin('yahoo')} className='flex items-center justify-center bg-purple-600 text-white p-2 rounded w-full hover:bg-purple-700 transition'>
            <FaYahoo className='mr-2' /> Login with Yahoo
          </button>
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
            <button type='submit' className='bg-blue-600 text-white p-2 rounded w-full hover:bg-blue-700 transition'>
              Login with Email
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
