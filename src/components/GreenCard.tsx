import React from 'react';
import { Hand } from 'lucide-react';

interface GreenCardProps {
  header?: string;
  body: string;
  children?: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
}

const GreenCard: React.FC<GreenCardProps> = ({ header, body, children, className, icon }) => (
  <div className={`bg-green-card rounded-xl p-6 mt-8 ${className || ''}`}>
    <div className="flex flex-col">
      {icon || <Hand className="w-6 h-6 text-teal-700 dark:text-teal-300 mb-2" />}
      {header && <h3 className="font-semibold mb-2 text-green-card-header" style={{ fontSize: '14px' }}>{header}</h3>}
      <p className="text-green-card-text" style={{ fontSize: '14px' }}>{body}</p>
      {children}
    </div>
  </div>
);

export default GreenCard; 