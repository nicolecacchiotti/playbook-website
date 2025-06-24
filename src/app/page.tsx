'use client';

import Image from 'next/image';
import coverImg from '../../assets/Cover2.svg';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="flex flex-col items-center justify-center w-full max-w-3xl">
        <Image src={coverImg} alt="Cover" style={{ width: 800, height: 'auto' }} />
      </div>
    </main>
  );
}
