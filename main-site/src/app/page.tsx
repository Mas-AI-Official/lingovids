'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function HomePage() {
  return (
    <main className='min-h-screen bg-gray-100'>
      <section className='flex flex-col items-center justify-center p-10 text-center'>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className='text-5xl font-bold mb-4'
        >
          Welcome to Lingovids MAS-AI
        </motion.h1>
        <motion.p
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
          className='text-xl mb-8'
        >
          Translate and Dub Videos with AI
        </motion.p>
        <Link href='http://localhost:3000' className='bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition'>
          Visit Lingovids
        </Link>
      </section>
    </main>
  );
}
