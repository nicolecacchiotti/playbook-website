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
      className="block bg-resource-card border border-gray-200 dark:border-blue-700 rounded-lg p-4 hover:bg-resource-card-hover transition-colors relative"
      aria-label={`Open ${title} in new tab`}
    >
      <div className="flex items-center justify-between">
        <h3 className="font-medium text-gray-900 dark:text-white" style={{ fontSize: '14px' }}>{title}</h3>
        <SquareArrowOutUpRight className="w-5 h-5 text-blue-600 dark:text-blue-300" />
      </div>
    </a>
  );
}
