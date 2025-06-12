import Link from 'next/link';

interface BreadcrumbProps {
  title: string;
}

export default function Breadcrumb({ title }: BreadcrumbProps) {
  return (
    <nav className="flex items-center space-x-2 text-sm">
      <Link
        href="/"
        className="text-ink/60 hover:text-ink transition-colors"
      >
        Home
      </Link>
      <span className="text-kraft">/</span>
      <span className="text-ink font-medium">{title}</span>
    </nav>
  );
} 