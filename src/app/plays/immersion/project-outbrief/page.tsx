import Breadcrumb from '@/components/Breadcrumb';
import AudioPlayerWrapper from '@/components/AudioPlayerWrapper';
import projectOutbriefArt from '@/../assets/Card Art/Project Outbrief.svg';

export default function ProjectOutbriefPage() {
  const title = "Project Outbrief";
  const section = "Immersion";
  const audioUrl = ""; // No audio file yet

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <Breadcrumb section={section} title={title} />
        <div className="mt-6 space-y-6">
          <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
          <p>This is the page for Project Outbrief.</p>
          {audioUrl && (
            <AudioPlayerWrapper 
              audioUrl={audioUrl} 
              imageSrc={projectOutbriefArt} 
              title="Project Outbrief"
              labels={['Project', 'Documentation']}
            />
          )}
        </div>
      </div>
    </main>
  );
} 