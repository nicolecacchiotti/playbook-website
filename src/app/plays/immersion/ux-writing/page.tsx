import Breadcrumb from '@/components/Breadcrumb';
import AudioPlayerWrapper from '@/components/AudioPlayerWrapper';
import uxWritingArt from '@/../assets/Card Art/UX Writing.svg';

export default function UXWritingPage() {
  const title = "UX Writing";
  const section = "Immersion";
  const audioUrl = "/audio/UX Writing.m4a";

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <Breadcrumb section={section} title={title} />
        <div className="mt-6 space-y-6">
          <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
          <p>This is the page for UX Writing.</p>
                    <AudioPlayerWrapper 
              audioUrl={audioUrl} 
              imageSrc={uxWritingArt} 
              title="UX Writing"
              labels={['Content', 'UX']}
            />
        </div>
      </div>
    </main>
  );
} 