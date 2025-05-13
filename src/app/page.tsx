'use client';

import { useState, useEffect } from 'react';
import { client } from '@/lib/contentful';

interface PlaybookPage {
  title: string;
  slug: string;
}

export default function Home() {
  const [pages, setPages] = useState<PlaybookPage[]>([]);

  useEffect(() => {
    async function fetchPages() {
      const entries = await client.getEntries({ content_type: 'playbookInnerPage' });
      const mapped = entries.items.map((item: any) => ({
        title: item.fields.title,
        slug: item.fields.slug,
      }));
      setPages(mapped);
    }
    fetchPages();
  }, []);

  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-5xl">
        <h1 className="text-2xl font-semibold text-gray-800">Welcome to the Playbooks</h1>
      </div>
    </main>
  );
}
