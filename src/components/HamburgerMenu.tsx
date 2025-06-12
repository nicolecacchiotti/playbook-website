'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface Page {
  title: string;
  slug: string;
}

interface HamburgerMenuProps {
  pages: Page[];
}

export default function HamburgerMenu({ pages }: HamburgerMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="fixed top-4 right-4 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-lg hover:bg-kraft/20 transition-colors"
        aria-label="Menu"
      >
        <svg
          className="w-6 h-6 text-ink"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isOpen ? (
            <path d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-paper rounded-lg shadow-lg py-2 border-2 border-kraft">
          {pages.length === 0 ? (
            <div className="px-4 py-2 text-ink/60">No playbooks found</div>
          ) : (
            pages.map((page) => (
              <Link
                key={page.slug}
                href={`/${page.slug}`}
                className={`block px-4 py-2 text-ink hover:bg-kraft/20 transition-colors ${
                  pathname === `/${page.slug}` ? 'bg-kraft/10' : ''
                }`}
                onClick={() => setIsOpen(false)}
              >
                {page.title}
              </Link>
            ))
          )}
        </div>
      )}
    </div>
  );
} 