import Breadcrumb from '@/components/Breadcrumb';
import AudioPlayerWrapper from '@/components/AudioPlayerWrapper';
import rapidIdeationWorkshopArt from '@/../assets/Card Art/RapidIdeationWorkshop.svg';

export default function RapidIdeationWorkshopPage() {
  const title = "Rapid Ideation Workshop";
  const section = "Immersion";
  const audioUrl = "/audio/Rapid Ideation Workshop.m4a";

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <Breadcrumb section={section} title={title} />
        <div className="mt-6 space-y-6">
          <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
          <p>This is the page for Rapid Ideation Workshop.</p>
                    <AudioPlayerWrapper 
              audioUrl={audioUrl} 
              imageSrc={rapidIdeationWorkshopArt} 
              title="Rapid Ideation Workshop"
              labels={['Workshop', 'Ideation']}
            />
          )
        </div>
      </div>
    </main>
  );
} 