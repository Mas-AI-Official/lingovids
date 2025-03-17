'use client';
import Link from 'next/link';

export default function Home() {
  return (
    <main className='min-h-screen bg-gray-100'>
      <section className='flex flex-col items-center justify-center p-10 text-center'>
        <h1 className='text-5xl font-bold mb-4'>Welcome to MAS-AI</h1>
        <p className='text-xl mb-8'>Explore our multilingual video platform</p>
        <Link href='http://localhost:3000' className='bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition'>
          Visit Lingovids
        </Link>
      </section>
    </main>
  );
}
