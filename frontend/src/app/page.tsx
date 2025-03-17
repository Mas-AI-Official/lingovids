'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className='min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white'>
      <section className='text-center p-6 bg-white bg-opacity-90 rounded-lg shadow-2xl max-w-2xl w-full'>
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className='text-5xl font-bold mb-6 text-gray-900'
        >
           Welcome to Lingovids MAS-AI
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className='text-xl mb-8 text-gray-700'
        >
          Translate and Dub Any Video to Any Language in Minutes!
        </motion.p>
        <div className='flex justify-center space-x-4'>
          <Link href='/auth/login' className='bg-white text-blue-600 px-6 py-3 rounded-lg shadow-md hover:bg-gray-100 transition duration-300'>
            Login
          </Link>
          <Link href='/auth/register' className='bg-green-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-600 transition duration-300'>
            Get Started
          </Link>
        </div>
      </section>
    </main>
  );
}
