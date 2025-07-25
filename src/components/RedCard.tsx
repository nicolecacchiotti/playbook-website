import React from 'react';
import { MessageSquareWarning } from 'lucide-react';

interface RedCardProps {
  header: string;
  body: string;
  children?: React.ReactNode;
  className?: string;
}

const RedCard: React.FC<RedCardProps> = ({ header, body, children, className }) => (
  <div className={`bg-red-card rounded-xl p-6 mt-4 ${className || ''}`}>
    <div className="flex flex-col">
      <MessageSquareWarning className="w-6 h-6 text-red-400 dark:text-red-card-icon mb-2" />
      <h3 className="font-semibold mb-2 text-red-card-header" style={{ fontSize: '14px' }}>{header}</h3>
      <p className="mb-2 text-red-card-text" style={{ fontSize: '14px' }}>{body}</p>
      {children}
    </div>
  </div>
);

export default RedCard; 