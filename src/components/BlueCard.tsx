import React from 'react';

interface BlueCardProps {
  header: string;
  body: string;
  children?: React.ReactNode;
  icon?: React.ReactNode;
}

const BlueCard: React.FC<BlueCardProps> = ({ header, body, children, icon }) => (
  <div className="bg-blue-50 rounded-xl p-6 mt-8">
    <div className="flex flex-col">
      {icon}
      <h3 className="font-semibold mb-2" style={{ fontSize: '14px' }}>{header}</h3>
      <p className="mb-2 text-gray-700" style={{ fontSize: '14px' }}>{body}</p>
      {children}
    </div>
  </div>
);

export default BlueCard; 