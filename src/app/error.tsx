'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-paper flex items-center justify-center p-4">
      <div className="p-8 rounded-lg w-full max-w-2xl border-2 border-kraft bg-paper shadow-lg">
        <h2 className="text-2xl font-bold text-orange mb-4">Application Error</h2>
        <p className="text-ink/80 mb-4">
          {error.message || 'An unexpected error occurred'}
        </p>
        <button
          onClick={() => reset()}
          className="bg-blue text-paper px-4 py-2 rounded hover:bg-blue-dark transition-colors"
        >
          Try Again
        </button>
      </div>
    </div>
  );
} 