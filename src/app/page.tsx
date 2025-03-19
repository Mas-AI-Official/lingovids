'use client';
import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <h1>Welcome to LingoVids</h1>
      <p>AI-powered video translations</p>
      <Link href="http://lingovid.mas-ai.co">Visit Lingovids</Link>
    </main>
  );
}
