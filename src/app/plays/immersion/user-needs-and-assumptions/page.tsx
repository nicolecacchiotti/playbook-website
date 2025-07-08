import Breadcrumb from '@/components/Breadcrumb';
import AudioPlayerWrapper from '@/components/AudioPlayerWrapper';
import userNeedsAssumptionsArt from '@/../assets/Card Art/UserNeeds&Assumptions.svg';

export default function UserNeedsAssumptionsPage() {
  const title = "User Needs & Assumptions";
  const section = "Immersion";
  const audioUrl = ""; // No audio file yet

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <Breadcrumb section={section} title={title} />
        <div className="mt-6 space-y-6">
          <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
          <p>This is the page for User Needs & Assumptions.</p>
                    <AudioPlayerWrapper 
              audioUrl={audioUrl} 
              imageSrc={userNeedsAssumptionsArt} 
              title="User Needs & Assumptions"
              labels={['Research', 'UX']}
            />
          )
        </div>
      </div>
    </main>
  );
} 