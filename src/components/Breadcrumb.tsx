import Link from 'next/link';

interface BreadcrumbProps {
  title: string;
}

export default function Breadcrumb({ title }: BreadcrumbProps) {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2">
        <li>
          <Link 
            href="/" 
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            Home
          </Link>
        </li>
        <li className="flex items-center space-x-2">
            <span className="text-gray-400">/</span>
          <span className="text-gray-900 font-medium">{title}</span>
          </li>
      </ol>
    </nav>
  );
} 