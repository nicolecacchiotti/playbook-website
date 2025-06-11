'use client';

import { useState, useEffect } from 'react';
import { client } from '@/lib/contentful';
import Link from 'next/link';

interface PlaybookPage {
  title: string;
  slug: string;
}

export default function Home() {
  const [pages, setPages] = useState<PlaybookPage[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPages() {
      try {
      const entries = await client.getEntries({ content_type: 'playbookInnerPage' });
      const mapped = entries.items.map((item: any) => ({
        title: item.fields.title,
        slug: item.fields.slug,
      }));
      setPages(mapped);
      } catch (err) {
        console.error('Error fetching pages:', err);
        setError('Failed to fetch pages. Please try again later.');
      }
    }
    fetchPages();
  }, []);

  if (error) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-lg shadow-md max-w-2xl w-full">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Error</h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-5xl">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">Welcome to the Playbooks</h1>
        <p className="text-gray-600">
          Use the menu in the top right corner to navigate through the available playbooks.
        </p>
      </div>
    </main>
  );
}
