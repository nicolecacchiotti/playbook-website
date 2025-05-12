'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { client } from '@/lib/contentful';

interface PlaybookPage {
  title: string;
  slug: string;
}

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
    <main className="min-h-screen bg-gray-100 flex items-center justify-center p-4 relative">
      {/* Hamburger Menu Button */}
      <div className="fixed top-4 right-4">
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 rounded-lg hover:bg-gray-200 transition-colors"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={1.5} 
            stroke="currentColor" 
            className="w-6 h-6"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" 
            />
          </svg>
        </button>

        {/* Dropdown Menu */}
        {isMenuOpen && (
          <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg py-2 z-50">
            {pages.length === 0 && (
              <div className="px-4 py-2 text-gray-400">No playbooks found</div>
            )}
            {pages.map((page) => (
              <Link 
                key={page.slug}
                href={`/playbook/${page.slug}`}
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {page.title}
              </Link>
            ))}
          </div>
        )}
      </div>

      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold text-gray-800">Welcome to the Playbooks</h1>
      </div>
    </main>
  );
}
