import Breadcrumb from '@/components/Breadcrumb';
import AudioPlayerWrapper from '@/components/AudioPlayerWrapper';
import clientOnboardingArt from '@/../assets/Card Art/ClientOnboarding.svg';

export default function ClientOnboardingPage() {
  const title = "Client On-Boarding";
  const section = "Foundation";
  const audioUrl = "/audio/Client Onboarding and Collaboration Playbook.m4a";

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <Breadcrumb section={section} title={title} />
        <div className="mt-6 space-y-6">
          <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
          <p>This is the page for Client On-Boarding.</p>
          <AudioPlayerWrapper 
            audioUrl={audioUrl} 
            imageSrc={clientOnboardingArt} 
            title="Client On-Boarding"
            labels={['Teams', 'Planning']}
          />
        </div>
      </div>
    </main>
  );
} 