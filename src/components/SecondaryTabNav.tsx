'use client';
import React from 'react';

interface SecondaryTabNavProps {
  tabs: string[];
  selectedTab: number;
  onTabChange: (idx: number) => void;
}

const SecondaryTabNav: React.FC<SecondaryTabNavProps> = ({ tabs, selectedTab, onTabChange }) => {
  return (
    <nav className="mt-6">
      <ul className="flex space-x-4 border-b border-gray-200 dark:border-[#0D423C] overflow-x-auto whitespace-nowrap scrollbar-hide">
        {tabs.map((tab, idx) => (
          <li key={tab} className="min-w-max">
            <button
              className={`px-4 py-2 text-gray-600 dark:text-white hover:text-gray-900 dark:hover:text-[#19B39F] focus:outline-none border-b-2 transition-colors duration-200 ${selectedTab === idx ? 'border-[#19B39F] text-blue-600 dark:text-[#19B39F] font-semibold' : 'border-transparent'} whitespace-nowrap`}
              type="button"
              onClick={() => onTabChange(idx)}
            >
              {tab}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SecondaryTabNav; 