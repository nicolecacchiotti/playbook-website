import Breadcrumb from '@/components/Breadcrumb';
import AudioPlayerWrapper from '@/components/AudioPlayerWrapper';
import competitiveLandscapeArt from '@/../assets/Card Art/CompetitiveLandscape.svg';

export default function CompetitiveLandscapePage() {
  const title = "Competitive Landscape";
  const section = "Immersion";
  const audioUrl = "/audio/Competitive Landscape Analysis_Launch.m4a";

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <Breadcrumb section={section} title={title} />
        <div className="mt-6 space-y-6">
          <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
          <p>This is the page for Competitive Landscape.</p>
          <AudioPlayerWrapper 
            audioUrl={audioUrl} 
            imageSrc={competitiveLandscapeArt} 
            title="Competitive Landscape"
            labels={['Research', 'Analysis']}
          />
        </div>
      </div>
    </main>
  );
} 