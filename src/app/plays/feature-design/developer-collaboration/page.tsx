import Breadcrumb from '@/components/Breadcrumb';
import AudioPlayerWrapper from '@/components/AudioPlayerWrapper';
import developerCollaborationArt from '@/../assets/Card Art/DesignHandoff.svg';

export default function DeveloperCollaborationPage() {
  const title = "Developer Collaboration";
  const section = "Feature Design";
  const audioUrl = ""; // No audio file yet

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <Breadcrumb section={section} title={title} />
        <div className="mt-6 space-y-6">
          <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
          <p>This is the page for Developer Collaboration.</p>
                    <AudioPlayerWrapper 
              audioUrl={audioUrl} 
              imageSrc={developerCollaborationArt} 
              title="Developer Collaboration"
              labels={['Development', 'Collaboration']}
            />
          )
        </div>
      </div>
    </main>
  );
} 