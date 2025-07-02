import { SquareArrowOutUpRight } from 'lucide-react';

interface ResourceCardProps {
  title: string;
  href: string;
}

export default function ResourceCard({ title, href }: ResourceCardProps) {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-gray-50 border border-gray-200 rounded-lg p-4 hover:bg-gray-100 transition-colors relative"
      aria-label={`Open ${title} in new tab`}
    >
      <div className="flex items-center justify-between">
        <h3 className="font-medium text-gray-900" style={{ fontSize: '14px' }}>{title}</h3>
        <SquareArrowOutUpRight className="w-5 h-5 text-blue-600" />
      </div>
    </a>
  );
}
