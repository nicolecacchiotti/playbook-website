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
      <div className="min-h-screen bg-paper flex items-center justify-center p-4">
        <div className="p-8 rounded-lg w-full max-w-2xl border-2 border-kraft bg-paper shadow-lg">
          <h2 className="text-2xl font-bold text-orange mb-4">Error</h2>
          <p className="text-ink/80 mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="bg-blue text-paper px-4 py-2 rounded hover:bg-blue-dark transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-paper flex items-center justify-center p-4">
      <div className="p-8 rounded-lg w-full max-w-5xl border-2 border-kraft bg-paper shadow-lg">
        <h1 className="text-2xl font-heading font-medium text-ink mb-6">Welcome to the Playbooks</h1>
        <p className="text-ink/80">
          Use the menu in the top right corner to navigate through the available playbooks.
        </p>
      </div>
    </main>
  );
}
