import Breadcrumb from '@/components/Breadcrumb';
import AudioPlayerWrapper from '@/components/AudioPlayerWrapper';
import designSprintsArt from '@/../assets/Card Art/DesignPlan.svg';

export default function DesignSprintsPage() {
  const title = "Design Sprints";
  const section = "Feature Design";
  const audioUrl = ""; // No audio file yet

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <Breadcrumb section={section} title={title} />
        <div className="mt-6 space-y-6">
          <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
          <p>This is the page for Design Sprints.</p>
          {audioUrl && (
            <AudioPlayerWrapper 
              audioUrl={audioUrl} 
              imageSrc={designSprintsArt} 
              title="Design Sprints"
              labels={['Design', 'Agile']}
            />
          )}
        </div>
      </div>
    </main>
  );
} 