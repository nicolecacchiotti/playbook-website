import Breadcrumb from '@/components/Breadcrumb';
import AudioPlayerWrapper from '@/components/AudioPlayerWrapper';
import outcomesWorkshopArt from '@/../assets/Card Art/OutcomesWorkshop.svg';

export default function OutcomesWorkshopPage() {
  const title = "Outcomes Workshop";
  const section = "Immersion";
  const audioUrl = "/audio/Outcomes Workshop.m4a";

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <Breadcrumb section={section} title={title} />
        <div className="mt-6 space-y-6">
          <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
          <p>This is the page for Outcomes Workshop.</p>
                    <AudioPlayerWrapper 
              audioUrl={audioUrl} 
              imageSrc={outcomesWorkshopArt} 
              title="Outcomes Workshop"
              labels={['Workshop', 'Strategy']}
            />
        </div>
      </div>
    </main>
  );
} 