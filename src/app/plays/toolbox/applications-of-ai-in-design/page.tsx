import Breadcrumb from '@/components/Breadcrumb';
import AudioPlayerWrapper from '@/components/AudioPlayerWrapper';
import aiApplicationsArt from '@/../assets/Card Art/AiApplications.svg';

export default function ApplicationsOfAIInDesignPage() {
  const title = "Applications of AI in Design";
  const section = "Toolbox";
  const audioUrl = ""; // No audio file yet

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <Breadcrumb section={section} title={title} />
        <div className="mt-6 space-y-6">
          <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
          <p>This is the page for Applications of AI in Design.</p>
          <AudioPlayerWrapper 
            audioUrl={audioUrl} 
            imageSrc={aiApplicationsArt} 
            title="Applications of AI in Design"
            labels={['AI', 'Design']}
          />
        </div>
      </div>
    </main>
  );
} 