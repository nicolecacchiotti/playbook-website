import Breadcrumb from '@/components/Breadcrumb';
import AudioPlayerWrapper from '@/components/AudioPlayerWrapper';
import buildReviewsArt from '@/../assets/Card Art/BuildReviews.svg';

export default function BuildReviewsPage() {
  const title = "Build Reviews";
  const section = "Feature Design";
  const audioUrl = ""; // No audio file yet

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <Breadcrumb section={section} title={title} />
        <div className="mt-6 space-y-6">
          <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
          <p>This is the page for Build Reviews.</p>
          {audioUrl && (
            <AudioPlayerWrapper 
              audioUrl={audioUrl} 
              imageSrc={buildReviewsArt} 
              title="Build Reviews"
              labels={['Development', 'Review']}
            />
          )}
        </div>
      </div>
    </main>
  );
} 