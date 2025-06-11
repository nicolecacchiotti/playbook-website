'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface PlaybookPage {
  title: string;
  slug: string;
}

interface HamburgerMenuProps {
  pages: PlaybookPage[];
}

export default function HamburgerMenu({ pages }: HamburgerMenuProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Debug log to check if pages are being passed correctly
  useEffect(() => {
    console.log('HamburgerMenu pages:', pages);
  }, [pages]);

  const handleMenuClick = () => {
    console.log('Menu clicked, current state:', isMenuOpen);
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="fixed top-4 right-4 z-50">
      <button 
        onClick={handleMenuClick}
        className="p-2 rounded-lg hover:bg-gray-200 transition-colors"
        aria-label="Toggle menu"
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
        <div 
          className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg py-2"
          onClick={(e) => e.stopPropagation()}
        >
          {pages.length === 0 && (
            <div className="px-4 py-2 text-gray-400">No playbooks found</div>
          )}
          {pages.map((page) => (
            <Link 
              key={page.slug}
              href={`/${page.slug}`}
              className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors"
              onClick={() => {
                console.log('Link clicked:', page.slug);
                setIsMenuOpen(false);
              }}
            >
              {page.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
} 