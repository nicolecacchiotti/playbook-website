import Breadcrumb from '@/components/Breadcrumb';
import AudioPlayerWrapper from '@/components/AudioPlayerWrapper';

export default function Page() {
  const title = "Competitive Landscape";
  const section = "Immersion";
  const audioUrl = "https://example.com/podcast.mp3"; // Replace with your actual audio URL

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <Breadcrumb section={section} title={title} />
        <div className="mt-6 space-y-6">
          <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
          <p>This is the page for Competitive Landscape.</p>
          
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Podcast Episode</h2>
            <AudioPlayerWrapper audioUrl={audioUrl} imageSrc="/images/podcast-cover.jpg" />
          </div>
        </div>
      </div>
    </main>
  );
} 