import Breadcrumb from '@/components/Breadcrumb';
import AudioPlayerWrapper from '@/components/AudioPlayerWrapper';
import hypeVideoArt from '@/../assets/Card Art/HypeVideoHiRes.svg';

export default function HypeVideoPage() {
  const title = "Hype Video";
  const section = "Feature Design";
  const audioUrl = ""; // No audio file yet

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <Breadcrumb section={section} title={title} />
        <div className="mt-6 space-y-6">
          <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
          <p>This is the page for Hype Video.</p>
          {audioUrl && (
            <AudioPlayerWrapper 
              audioUrl={audioUrl} 
              imageSrc={hypeVideoArt} 
              title="Hype Video"
              labels={['Video', 'Marketing']}
            />
          )}
        </div>
      </div>
    </main>
  );
} 