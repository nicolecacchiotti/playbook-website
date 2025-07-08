import Breadcrumb from '@/components/Breadcrumb';
import AudioPlayerWrapper from '@/components/AudioPlayerWrapper';
import designAuditArt from '@/../assets/Card Art/DesignAudit.svg';

export default function DesignAuditPage() {
  const title = "Design Audit";
  const section = "Immersion";
  const audioUrl = ""; // No audio file yet

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <Breadcrumb section={section} title={title} />
        <div className="mt-6 space-y-6">
          <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
          <p>This is the page for Design Audit.</p>
          {audioUrl && (
            <AudioPlayerWrapper 
              audioUrl={audioUrl} 
              imageSrc={designAuditArt} 
              title="Design Audit"
              labels={['Design', 'Analysis']}
            />
          )}
        </div>
      </div>
    </main>
  );
} 