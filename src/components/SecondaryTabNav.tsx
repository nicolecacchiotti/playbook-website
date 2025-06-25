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
      <ul className="flex space-x-4 border-b border-gray-200">
        {tabs.map((tab, idx) => (
          <li key={tab}>
            <button
              className={`px-4 py-2 text-gray-600 hover:text-gray-900 focus:outline-none border-b-2 transition-colors duration-200 ${selectedTab === idx ? 'border-blue-500 text-blue-600 font-semibold' : 'border-transparent'}`}
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