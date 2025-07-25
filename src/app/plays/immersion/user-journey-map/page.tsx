import Breadcrumb from '@/components/Breadcrumb';
import AudioPlayerWrapper from '@/components/AudioPlayerWrapper';
import userJourneyMapArt from '@/../assets/Card Art/UserJourneyMaps.svg';

export default function UserJourneyMapPage() {
  const title = "User Journey Map";
  const section = "Immersion";
  const audioUrl = "/audio/User Journey Map.m4a";

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <Breadcrumb section={section} title={title} />
        <div className="mt-6 space-y-6">
          <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
          <p>This is the page for User Journey Map.</p>
          <AudioPlayerWrapper 
            audioUrl={audioUrl} 
            imageSrc={userJourneyMapArt} 
            title="User Journey Map"
            labels={['Research', 'UX']}
          />
        </div>
      </div>
    </main>
  );
} 