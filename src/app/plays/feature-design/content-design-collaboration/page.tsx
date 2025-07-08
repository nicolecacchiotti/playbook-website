import Breadcrumb from '@/components/Breadcrumb';
import AudioPlayerWrapper from '@/components/AudioPlayerWrapper';
import contentDesignCollaborationArt from '@/../assets/Card Art/ContentDesignCollaboration.svg';

export default function ContentDesignCollaborationPage() {
  const title = "Content Design Collaboration";
  const section = "Feature Design";
  const audioUrl = ""; // No audio file yet

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <Breadcrumb section={section} title={title} />
        <div className="mt-6 space-y-6">
          <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
          <p>This is the page for Content Design Collaboration.</p>
          {audioUrl && (
            <AudioPlayerWrapper 
              audioUrl={audioUrl} 
              imageSrc={contentDesignCollaborationArt} 
              title="Content Design Collaboration"
              labels={['Content', 'Collaboration']}
            />
          )}
        </div>
      </div>
    </main>
  );
} 