import Breadcrumb from '@/components/Breadcrumb';
import AudioPlayerWrapper from '@/components/AudioPlayerWrapper';
import designResourcesArt from '@/../assets/Card Art/esignResources.svg';

export default function DesignResourcesPage() {
  const title = "Design Resources";
  const section = "Toolbox";
  const audioUrl = ""; // No audio file yet

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <Breadcrumb section={section} title={title} />
        <div className="mt-6 space-y-6">
          <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
          <p>This is the page for Design Resources.</p>
          <AudioPlayerWrapper 
            audioUrl={audioUrl} 
            imageSrc={designResourcesArt} 
            title="Design Resources"
            labels={['Design', 'Resources']}
          />
        </div>
      </div>
    </main>
  );
} 