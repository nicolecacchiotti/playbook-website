export default function Loading() {
  return (
    <div className="min-h-screen bg-paper flex items-center justify-center p-4">
      <div className="p-8 rounded-lg w-full max-w-2xl border-2 border-kraft bg-paper shadow-lg">
        <div className="animate-pulse">
          <div className="h-8 bg-kraft/20 rounded w-3/4"></div>
          <div className="space-y-3 mt-4">
            <div className="h-4 bg-kraft/20 rounded"></div>
            <div className="h-4 bg-kraft/20 rounded w-5/6"></div>
          </div>
        </div>
      </div>
    </div>
  );
} 