import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-paper">
      <div className="p-8 rounded-lg w-full max-w-2xl border-2 border-kraft bg-paper shadow-lg text-center">
        <h1 className="text-4xl font-bold text-ink mb-4">404</h1>
        <p className="text-xl text-ink/80 mb-8">Page not found</p>
        <p className="text-ink/60 mb-8">We couldn&apos;t find the page you&apos;re looking for.</p>
        <Link
          href="/"
          className="inline-block bg-blue text-paper px-6 py-3 rounded-lg hover:bg-blue-dark transition-colors"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
} 