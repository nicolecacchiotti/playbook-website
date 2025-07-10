import Breadcrumb from '@/components/Breadcrumb';
import AudioPlayerWrapper from '@/components/AudioPlayerWrapper';
import userTestingArt from '@/../assets/Card Art/User Testing.svg';

export default function UserTestingPage() {
  const title = "User Testing";
  const section = "Creative Direction";
  const audioUrl = "/audio/User Testing.m4a";

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <Breadcrumb section={section} title={title} />
        <div className="mt-6 space-y-6">
          <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
          <p>This is the page for User Testing.</p>
                    <AudioPlayerWrapper 
              audioUrl={audioUrl} 
              imageSrc={userTestingArt} 
              title="User Testing"
              labels={['Research', 'Testing']}
            />
        </div>
      </div>
    </main>
  );
} 